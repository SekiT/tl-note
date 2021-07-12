import { html } from 'sinuous';
import { computed } from 'sinuous/observable';
import { map } from 'sinuous/map';
import columns from '@/observable/columns';
import activities from '@/observable/activities';
import { buttonWidth } from '@/view/columns';

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

const timeColumnWidth = 100 / 9;

const timeColumnStyle = {
  width: `${timeColumnWidth}%`,
  'text-align': 'center',
  color: 'black',
};

const activityWidthRatio = `(1 - ${timeColumnWidth} / 100)`;

const cellStyle = (width) => ({
  display: 'table-cell',
  width: `calc(${width}% * ${activityWidthRatio}`,
  'vertical-align': 'top',
});

const actStyle = (color) => ({
  margin: '2px 0',
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
  width: `calc(90% - ${buttonWidth})`,
  margin: '0 5%',
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
