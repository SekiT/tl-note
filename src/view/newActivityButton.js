import { html } from 'sinuous';
import { plusButtonStyle } from '@/sharedStyle';

const style = {
  ...plusButtonStyle('4vw'),
  position: 'fixed',
  right: '2vw',
  bottom: '2vw',
};

export default () => html`
  <button style=${style}>+</button>
`;
