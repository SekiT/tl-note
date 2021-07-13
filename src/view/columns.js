import { html } from 'sinuous';
import { computed } from 'sinuous/observable';
import { plusButtonStyle } from '@/sharedStyle';
import columns from '@/observable/columns';
import { foregroundColor } from './util';
import { columnDialogState } from './columnDialog';

const columnStyle = ({ color, name }, length) => {
  const width = 75 / length;
  return {
    width: `${width}vw`,
    'line-height': '36px',
    'font-size': `min(24px, ${width / name.length}vw)`,
    'text-align': 'center',
    'border-radius': '12px 12px 0 0',
    'background-color': `rgb(${color.join(',')})`,
    color: foregroundColor(color),
  };
};

const onClickColumn = (evt) => {
  const targetId = evt.target.getAttribute('data-id');
  const column = columns().find(({ id }) => id === targetId);
  if (!column) return;
  columnDialogState({
    mode: 'update',
    id: targetId,
    color: column.color,
    name: column.name,
  });
};

const columnView = (column, length) => html`
  <div style=${columnStyle(column, length)} onclick=${onClickColumn} data-id=${column.id}>
    ${column.name}
  </div>
`;

const columnsPart = computed(() => {
  const cs = columns();
  const { length } = cs;
  return cs.map((c) => columnView(c, length));
});

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
  ...plusButtonStyle(buttonWidth),
  'align-self': 'center',
  'margin-left': '0.5vw',
};

const randomColor = () => (
  [0, 64, 128, 192, 255][Math.floor(Math.random() * 5)]
);

const newId = () => `c${Math.max(...columns().map(({ id }) => parseInt(id.slice(1), 10))) + 1}`;

const onClickPlusButton = () => {
  columnDialogState({
    mode: 'add',
    id: newId(),
    color: [...Array(3)].map(randomColor),
    name: '',
  });
};

export default () => html`
  <div style=${containerStyle}>
    <div style=${columnsPartStyle}>
      ${columnsPart}
    </div>
    <div style=${buttonPartStyle}>
      <button style=${buttonStyle} onclick=${onClickPlusButton}>+</button>
    </div>
  </div>
`;
