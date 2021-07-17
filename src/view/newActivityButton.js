import { html } from 'sinuous';
import activities, { newId } from '@/observable/activities';
import { plusButtonStyle } from '@/sharedStyle';
import { activityDialogState } from './activityDialog';

const style = {
  ...plusButtonStyle('50px'),
  position: 'fixed',
  right: '2vw',
  bottom: '4vh',
};

const onClick = () => {
  const currentActivities = activities();
  const id = newId();
  const day = Math.max(1, ...currentActivities.map((activity) => activity.day));
  activityDialogState({
    mode: 'add',
    id,
    columnIds: [],
    day,
    time: '12:00',
    text: '',
  });
};

export default () => html`
  <button style=${style} onclick=${onClick}>+</button>
`;
