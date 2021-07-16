import { html } from 'sinuous';
import { computed } from 'sinuous/observable';
import { map } from 'sinuous/map';
import columns from '@/observable/columns';
import activities from '@/observable/activities';
import { foregroundColor } from './util';
import { activityDialogState } from './activityDialog';

const dayTimeKey = (day, time) => [day, time].join(',');
const deKey = (dayTime) => {
  const [dayStr, time] = dayTime.split(',');
  return [parseInt(dayStr, 10), time];
};

const dayTimeToActivities = computed(() => [
  ...activities()
    .reduce(
      (acc, activity) => {
        const { day, time, timeEnd } = activity;
        const key = dayTimeKey(day, time);
        acc.set(key, [...acc.get(key) || [], activity]);
        const timeEndKey = dayTimeKey(day, timeEnd);
        if (timeEnd) acc.set(timeEndKey, [...acc.get(timeEndKey) || []]);
        return acc;
      },
      new Map(),
    )
    .entries(),
]
  .map(([key, acts]) => [...deKey(key), acts])
  .sort(([day1, time1], [day2, time2]) => {
    if (day1 < day2) return -1;
    if (day1 > day2) return 1;
    if (time1 < time2) return -1;
    if (time1 > time2) return 1;
    return 0;
  }));

const trStyle = {
  'border-top': '1px dashed black',
  'border-bottom': '1px dashed black',
};

const timeColumnStyle = {
  padding: 0,
  width: '10vw',
  'text-align': 'center',
  color: 'black',
};

const cellStyle = computed(() => ({
  display: 'table-cell',
  padding: 0,
  width: `${75 / columns().length}vw`,
  'text-align': 'center',
  'vertical-align': 'top',
}));

const actStyle = (color) => ({
  margin: '1px',
  padding: '2px',
  border: '1px solid black',
  'border-radius': '3px',
  'background-color': `rgb(${color.map((c) => Math.floor(128 + c / 2)).join(',')})`,
  color: foregroundColor(color),
  'z-index': 1,
});

const onClickAct = (act) => () => {
  activityDialogState({
    mode: 'update',
    ...act,
  });
};

const activityView = ([day, time, acts]) => html`
  <tr style=${trStyle}>
    <td style=${timeColumnStyle} data-day=${day} data-time=${time}>${time}</td>
    ${map(columns, ({ id: columnId, color }) => html`
      <td style=${cellStyle}>
        ${acts.map((act) => (act.columnIds.includes(columnId) ? html`
          <div style=${actStyle(color)} onclick=${onClickAct(act)} data-id=${act.id}>${act.text}</div>
        ` : ''))}
      </td>
    `)}
  </tr>
`;

const containerStyle = {
  width: '85vw',
  margin: '0 5vw',
  'border-collapse': 'collapse',
  'overflow-y': 'scroll',
  'background-color': '#eee',
};

export default () => html`
  <table style=${containerStyle} cellSpacing={0}>
    <tbody>
      ${map(dayTimeToActivities, activityView)}
    </tbody>
  </table>
`;
