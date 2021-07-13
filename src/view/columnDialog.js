import { html } from 'sinuous';
import { observable, computed } from 'sinuous/observable';
import { plusButtonStyle } from '@/sharedStyle';
import { foregroundColor } from './util';

export const columnDialogState = observable({
  mode: 'none', // 'add' or 'update' or 'none'
  id: '',
  color: [0, 0, 0],
  name: '',
});

const containerStyle = computed(() => ({
  display: columnDialogState().mode === 'none' ? 'none' : 'block',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  'background-color': 'rgba(0, 0, 0, 0.6)',
  'font-family': 'sans-serif',
  'font-size': '24px',
}));

const windowStyle = {
  position: 'absolute',
  top: '50vh',
  left: '50vw',
  transform: 'translate(-50%, -50%)',
  'border-radius': '12px',
  padding: '12px',
  'background-color': 'white',
};

const titleStyle = {
  'font-size': '18px',
};

const titleTexts = {
  add: '登場人物追加',
  update: '登場人物編集',
};
const titleText = computed(() => titleTexts[columnDialogState().mode]);

const closeButtonStyle = {
  ...plusButtonStyle('24px'),
  position: 'absolute',
  right: '7px',
  'font-size': '12px',
  'background-color': '#ccc',
  'border-color': '#999',
};

const onClickCloseButton = () => {
  columnDialogState({ ...columnDialogState(), mode: 'none' });
};

const hrStyle = {
  margin: '5px 0 7px 0',
};

const bgColor = computed(() => `#${columnDialogState().color.map((c) => c.toString(16).padStart(2, '0')).join('')}`);
const name = computed(() => columnDialogState().name);

const colorInputStyle = {
  width: '24px',
  height: '24px',
  padding: 0,
  'border-radius': '12px',
  'background-color': 'transparent',
};

const onChangeColor = (evt) => {
  const [r1, r2, g1, g2, b1, b3] = evt.target.value.slice(1).split('');
  const color = [r1 + r2, g1 + g2, b1 + b3].map((str) => parseInt(str, 16));
  columnDialogState({ ...columnDialogState(), color });
};

const nameInputStyle = computed(() => ({
  'margin-left': '5px',
  padding: 0,
  'font-size': '24px',
  'line-height': '24px',
  'text-align': 'center',
  'background-color': bgColor(),
  color: foregroundColor(columnDialogState().color),
}));

const onChangeName = (evt) => {
  columnDialogState({ ...columnDialogState(), name: evt.target.value });
};

const buttonAreaStyle = {
  'margin-top': '7px',
};

const deleteButtonStyle = {
  ...plusButtonStyle('30px'),
  'font-size': '15px',
  'background-color': '#fcc',
  'border-color': '#c99',
};

const deleteButton = computed(() => (
  columnDialogState().mode === 'update' && (
    html`<button style=${deleteButtonStyle}>🗑️</button>`
  )
));

const upsertButtonStyle = {
  ...plusButtonStyle('30px'),
  'margin-left': '7px',
  'font-size': '15px',
  'background-color': '#cfc',
  'border-color': '#9c9',
};

export default () => html`
  <div style=${containerStyle}>
    <div style=${windowStyle}>
      <div style="display:flex">
        <div style=${titleStyle}>${titleText}</div>
        <button style=${closeButtonStyle} onclick=${onClickCloseButton}>X</button>
      </div>
      <hr style=${hrStyle} />
      <div>
        <input type="color" value=${bgColor} style=${colorInputStyle} onchange=${onChangeColor} />
        <input type="text" value=${name} style=${nameInputStyle} onchange=${onChangeName} />
      </div>
      <div style=${buttonAreaStyle}>
        ${deleteButton}
        <button style=${upsertButtonStyle}>✔️</button>
      </div>
    </div>
  </div>
`;
