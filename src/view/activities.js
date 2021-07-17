import { html } from 'sinuous';
import { computed } from 'sinuous/observable';
import { map } from 'sinuous/map';
import columns from '@/observable/columns';
import activities, { newId } from '@/observable/activities';
import { foregroundColor } from './util';
import { activityDialogState } from './activityDialog';

const dayTimeKey = ({ day, time }) => [day, time].join(',');
const deKey = (dayTime) => {
  const [dayStr, time] = dayTime.split(',');
  return [parseInt(dayStr, 10), time];
};

const dayTimeToActivities = computed(() => [
  ...activities()
    .reduce(
      (acc, activity) => {
        const key = dayTimeKey(activity);
        acc.set(key, [...acc.get(key) || [], activity]);
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
  display: 'block',
  margin: '1px',
  padding: '2px',
  border: '1px solid black',
  'border-radius': '3px',
  'background-color': `rgba(${color.join(',')},0.5)`,
  color: foregroundColor(color),
  'z-index': 1,
});

const onClickCell = (day, time, columnId) => () => {
  activityDialogState({
    mode: 'add',
    id: newId(),
    day,
    time,
    columnIds: [columnId],
    text: '',
  });
};

const onClickAct = (act) => (evt) => {
  activityDialogState({
    mode: 'update',
    ...act,
  });
  evt.stopPropagation();
};

const activityView = ([day, time, acts]) => html`
  <tr style=${trStyle}>
    <td style=${timeColumnStyle}>${time}</td>
    ${map(columns, ({ id: columnId, color }) => html`
      <td style=${cellStyle} onclick=${onClickCell(day, time, columnId)}>
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
