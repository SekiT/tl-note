import { html } from 'sinuous';
import { map } from 'sinuous/map';
import columns from '@/observable/columns';

const columnStyle = ({ color, width, name }) => ({
  width: `${width * 0.75}vw`,
  'line-height': '36px',
  'font-size': `min(24px, ${(width * 0.75) / name.length}vw)`,
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
  'margin-left': '15vw',
  width: '85vw',
  height: '36px',
  'align-items': 'center',
};

const columnsPartStyle = {
  display: 'flex',
  width: '75vw',
};

const buttonPartStyle = {
  display: 'flex',
  width: '10vw',
  'text-align': 'left',
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
    <div style=${columnsPartStyle}>
      ${map(columns, columnView)}
    </div>
    <div style=${buttonPartStyle}>
      <button style=${buttonStyle}>+</button>
    </div>
  </div>
`;
