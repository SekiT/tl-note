import { html } from 'sinuous';
import activities from '@/observable/activities';
import { plusButtonStyle } from '@/sharedStyle';
import { activityDialogState } from './activityDialog';

const style = {
  ...plusButtonStyle('4vw'),
  position: 'fixed',
  right: '2vw',
  bottom: '2vw',
};

const onClick = () => {
  const currentActivities = activities();
  const id = `a${Math.max(0, ...currentActivities.map((activity) => parseInt(activity.id.slice(1), 10)))}`;
  const day = Math.max(1, ...currentActivities.map((activity) => activity.day));
  activityDialogState({
    mode: 'add',
    id,
    columnIds: [],
    day,
    time: '12:00',
    timeEnd: '',
    text: '',
  });
};

export default () => html`
  <button style=${style} onclick=${onClick}>+</button>
`;
