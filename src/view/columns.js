import { html } from 'sinuous';
import { map } from 'sinuous/map';
import columns from '@/observable/columns';

const columnStyle = ({ color, width }) => ({
  display: 'inline',
  width: `${width}%`,
  'text-align': 'center',
  'border-radius': '12px 12px 0 0',
  'background-color': `rgb(${color.join(',')})`,
  color: color[0] + color[1] + color[2] < 384 ? 'white' : 'black',
});

const columnView = (column) => html`
  <div style=${columnStyle(column)}>${column.name}</div>
`;

const containerStyle = {
  display: 'flex',
  width: '80%',
  height: '36px',
  margin: '0 5% 0 15%',
  'font-size': '24px',
};

const buttonWidth = 'min(max(4vw, 24px), 32px)';

const buttonStyle = {
  'align-self': 'center',
  'margin-left': '0.5vw',
  width: buttonWidth,
  height: buttonWidth,
  'font-size': `calc(${buttonWidth} * 0.8)`,
  padding: 0,
  border: '2px solid #99c',
  'border-radius': '50%',
  'background-color': '#ccf',
  color: '#339',
};

export default () => html`
  <div style=${containerStyle}>
    ${map(columns, columnView)}
    <button style=${buttonStyle}>+</button>
  </div>
`;
