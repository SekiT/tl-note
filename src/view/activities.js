import { html } from 'sinuous';
import { computed } from 'sinuous/observable';
import { map } from 'sinuous/map';
import columns from '@/observable/columns';
import activities from '@/observable/activities';

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

const cellStyle = (width) => ({
  display: 'table-cell',
  padding: 0,
  width: `${width * 0.75}vw`,
  'text-align': 'center',
  'vertical-align': 'top',
});

const actStyle = (color) => ({
  margin: '1px',
  padding: '2px',
  border: '1px solid black',
  'border-radius': '3px',
  'background-color': `rgb(${color.map((c) => Math.floor(128 + c / 2)).join(',')})`,
  color: color[0] + color[1] + color[2] < 384 ? 'white' : 'black',
});

const activityView = ([time, acts]) => html`
  <tr style=${trStyle}>
    <td style=${timeColumnStyle}>${time}</td>
    ${map(columns, ({ id: columnId, width, color }) => html`
      <td style=${cellStyle(width)}>
        ${acts.map((act) => (act.columnIds.includes(columnId) ? html`
          <div style=${actStyle(color)}>${act.text}</div>
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
