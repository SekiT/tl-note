import { html } from 'sinuous';
import { computed } from 'sinuous/observable';
import { map } from 'sinuous/map';
import columns from '@/observable/columns';
import activities, { newId } from '@/observable/activities';
import timePlots, { toTimes } from '@/observable/timePlots';
import { foregroundColor } from './util';
import { activityDialogState } from './activityDialog';

const dayTimeKey = ({ day, time }) => [day, time].join(',');
const deKey = (dayTime) => {
  const [dayStr, time] = dayTime.split(',');
  return [parseInt(dayStr, 10), time];
};

const dayTimeToActivities = computed(() => [
  ...[
    ...activities()
      .map((activity) => [dayTimeKey(activity), [activity]]),
    ...timePlots()
      .flatMap((timePlot) => [...toTimes(timePlot)])
      .map(([day, time]) => [dayTimeKey({ day, time }), []]),
  ].reduce(
    (acc, [key, acts]) => {
      acc.set(key, [...acc.get(key) || [], ...acts]);
      return acc;
    },
    new Map(),
  ).entries(),
]
  .map(([key, acts]) => [...deKey(key), acts])
  .sort(([day1, time1], [day2, time2]) => {
    if (day1 < day2) return -1;
    if (day1 > day2) return 1;
    if (time1 < time2) return -1;
    if (time1 > time2) return 1;
    return 0;
  }));

const timeTable = computed(() => {
  const currentColumns = columns();
  return dayTimeToActivities().map(([day, time, acts]) => [
    day,
    time,
    currentColumns.map(({ id, color }) => ({
      day,
      time,
      columnId: id,
      color,
      acts: acts.flatMap((act) => (act.columnIds.includes(id) ? [{ ...act, color }] : [])),
    })),
  ]);
});

const trStyle = `
  border-top: 1px dashed black;
  border-bottom: 1px dashed black;
`;

const timeColumnStyle = `
  padding: 3px 0;
  width: 10vw;
  text-align: center;
  color: black;
`;

const cellStyle = computed(() => `
  display: table-cell;
  padding: 0;
  width: ${75 / columns().length}vw;
  text-align: center;
  vertical-align: top;
`);

const actStyle = (color) => `
  display: block;
  min-height: 21px;
  margin: 1px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: rgba(${color.join(',')},0.5);
  color: ${foregroundColor(color)};
  z-index: 1;
`;

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

const actView = (act) => html`
  <div style=${actStyle(act.color)} onclick=${onClickAct(act)}>${act.text}</div>
`;

const cellView = ({
  day, time, columnId, acts,
}) => html`
  <td style=${cellStyle} onclick=${onClickCell(day, time, columnId)}>
    ${acts.map(actView)}
  </td>
`;

const activityView = ([, time, cells]) => html`
  <tr style=${trStyle}>
    <td style=${timeColumnStyle}>${time}</td>
    ${cells.map(cellView)}
  </tr>
`;

const containerStyle = `
  display: block;
  width: 85vw;
  max-height: calc(96vh - 36px);
  margin: 0 5vw;
  border-collapse: collapse;
  overflow-y: scroll;
  background-color: #eee;
`;

export default () => html`
  <table style=${containerStyle} cellSpacing="0">
    <tbody>
      ${map(timeTable, activityView)}
    </tbody>
  </table>
`;
