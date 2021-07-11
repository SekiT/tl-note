import { html } from 'sinuous';

// TODO: use observable
const columns = [
  { id: 1, name: 'A氏', color: [0, 0, 128] },
  { id: 2, name: 'B君', color: [255, 128, 128] },
  { id: 3, name: 'C様', color: [128, 255, 128] },
];

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
    ${columns.map(columnView)}
    <button>+</button>
  </div>
`;
