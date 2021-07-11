import { html } from 'sinuous';
import { map } from 'sinuous/map';
import activities from '@/observable/activities';

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
    ${map(activities, activityView)}
  </div>
`;
