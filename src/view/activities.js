import { html } from 'sinuous';
import { computed } from 'sinuous/observable';
import { map } from 'sinuous/map';
import columns from '@/observable/columns';
import activities from '@/observable/activities';
import { foregroundColor } from './util';
import { activityDialogState } from './activityDialog';

const timeToActivities = computed(() => Object.entries(activities().reduce((acc, activity) => {
  const { time, timeEnd } = activity;
  return {
    ...acc,
    [time]: [...acc[time] || [], activity],
    ...(timeEnd ? { [timeEnd]: acc[timeEnd] || [] } : {}),
  };
}, {})).sort(([time1], [time2]) => (time1 < time2 ? -1 : 1)));

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
  'background-color': `rgba(${color.join(',')},0.5)`,
  color: foregroundColor(color),
});

const onClickAct = (act) => () => {
  activityDialogState({
    mode: 'update',
    ...act,
  });
};

const activityView = ([time, acts]) => html`
  <tr style=${trStyle}>
    <td style=${timeColumnStyle}>${time}</td>
    ${map(columns, ({ id: columnId, color }) => html`
      <td style=${cellStyle}>
        ${acts.map((act) => (act.columnIds.includes(columnId) ? html`
          <div style=${actStyle(color)} onclick=${onClickAct(act)}>${act.text}</div>
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
      ${map(timeToActivities, activityView)}
    </tbody>
  </table>
`;
