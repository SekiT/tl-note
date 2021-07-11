import { html } from 'sinuous';

// TODO: use observable
const activities = [
  {
    id: 'a1',
    day: 1,
    columnIds: ['c1', 'c2'],
    time: '12:00',
    text: 'A氏とB君がエントランスで会った',
  },
  {
    id: 'a2',
    day: 1,
    columnIds: ['c1'],
    time: '12:00',
    timeEnd: '13:00',
    text: 'A氏はエントランスにいた。B君以外とは会っていない',
  },
];

const activityView = ({ time, timeEnd, text }) => html`
  <div>
    <div>
      ${time}${timeEnd ? `~${timeEnd}` : ''}
    </div>
    ${text}
  </div>
`;

const containerStyle = {
  width: '90%',
  margin: '0 5%',
  'overflow-y': 'scroll',
  'background-color': '#eee',
};

export default () => html`
  <div style=${containerStyle}>
    ${activities.map(activityView)}
  </div>
`;
