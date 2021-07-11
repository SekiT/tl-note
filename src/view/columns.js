import { html } from 'sinuous';
import { map } from 'sinuous/map';
import columns from '@/observable/columns';

const columnStyle = ({ color, width }) => ({
  display: 'inline',
  width: `${width}%`,
  'text-align': 'center',
  'background-color': `rgb(${color.join(',')})`,
  color: color[0] + color[1] + color[2] < 384 ? 'white' : 'black',
});

const columnView = (column) => html`
  <div style=${columnStyle(column)}>${column.name}</div>
`;

const containerStyle = {
  display: 'flex',
  width: '80%',
  margin: '0 5% 0 15%',
};

const buttonStyle = {
  width: '5%',
};

export default () => html`
  <div style=${containerStyle}>
    ${map(columns, columnView)}
    <button style=${buttonStyle}>+</button>
  </div>
`;
