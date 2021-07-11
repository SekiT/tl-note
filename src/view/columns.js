import { html } from 'sinuous';
import { map } from 'sinuous/map';
import columns from '@/observable/columns';

const columnStyle = (color) => ({
  display: 'inline',
  'text-align': 'center',
  'background-color': `rgb(${color.join(',')})`,
  color: color[0] + color[1] + color[2] < 384 ? 'white' : 'black',
});

const columnView = ({ name, color }) => html`
  <div style=${columnStyle(color)}>${name}</div>
`;

const containerStyle = {
  width: '90%',
  margin: '0 5%',
};

export default () => html`
  <div style=${containerStyle}>
    ${map(columns, columnView)}
    <button>+</button>
  </div>
`;
