import { html } from 'sinuous';
import { observable, computed } from 'sinuous/observable';
import columns from '@/observable/columns';
import activities from '@/observable/activities';
import {
  plusButtonStyle, closeButtonStyle, dialogBackgroundStyle, dialogWindowStyle,
} from '@/sharedStyle';
import { foregroundColor } from './util';

export const columnDialogState = observable({
  mode: 'none', // 'add' or 'update' or 'none'
  id: '',
  color: [0, 0, 0],
  name: '',
});

const containerStyle = computed(() => `
  ${dialogBackgroundStyle}
  display: ${columnDialogState().mode === 'none' ? 'none' : 'block'};
`);

const titleStyle = `
  font-size: 18px;
`;

const titleTexts = {
  add: '登場人物追加',
  update: '登場人物編集',
};
const titleText = computed(() => titleTexts[columnDialogState().mode]);

const dialogCloseButtonStyle = closeButtonStyle('24px');

const onClickCloseButton = () => {
  columnDialogState({ ...columnDialogState(), mode: 'none' });
};

const hrStyle = `
  margin: 5px 0 7px 0;
`;

const bgColor = computed(() => `#${columnDialogState().color.map((c) => c.toString(16).padStart(2, '0')).join('')}`);
const name = computed(() => columnDialogState().name);

const colorInputStyle = `
  width: 24px;
  height: 24px;
  padding: 0;
  border-radius: 12px;
  background-color: transparent;
`;

const onChangeColor = (evt) => {
  const [r1, r2, g1, g2, b1, b3] = evt.target.value.slice(1).split('');
  const color = [r1 + r2, g1 + g2, b1 + b3].map((str) => parseInt(str, 16));
  columnDialogState({ ...columnDialogState(), color });
};

const nameInputStyle = computed(() => `
  margin-left: 5px;
  padding: 0;
  width: 20vw;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  background-color: ${bgColor()};
  color: ${foregroundColor(columnDialogState().color)};
`);

const onChangeName = (evt) => {
  columnDialogState({ ...columnDialogState(), name: evt.target.value });
};

const buttonAreaStyle = `
  margin-top: 7px;
`;

const deleteButtonStyle = `
  ${plusButtonStyle('30px')}
  margin-right: 7px;
  font-size: 15px;
  background-color: #fcc;
  border-color: #c99;
`;

const onClickDeleteButton = () => {
  const state = columnDialogState();
  columns(columns().filter(({ id }) => id !== state.id));
  activities(activities().flatMap((activity) => {
    const { columnIds } = activity;
    if (columnIds.length === 1 && columnIds[0] === state.id) {
      return [];
    }
    return [{ ...activity, columnIds: columnIds.filter((id) => id !== state.id) }];
  }));
  columnDialogState({ ...state, mode: 'none' });
};

const deleteButton = computed(() => (
  columnDialogState().mode === 'update' && (
    html`<button style=${deleteButtonStyle} onclick=${onClickDeleteButton}>🗑️</button>`
  )
));

const upsertButtonStyle = `
  ${plusButtonStyle('30px')}
  font-size: 15px;
  background-color: #cfc;
  border-color: #9c9;
`;

const onClickUpsertButton = () => {
  const { mode, ...newColumn } = columnDialogState();
  const currentColumns = columns();
  if (mode === 'add') {
    columns([...currentColumns, newColumn]);
  } else {
    columns(currentColumns.map((current) => (current.id === newColumn.id ? newColumn : current)));
  }
  columnDialogState({ mode: 'none', ...newColumn });
};

export default () => html`
  <div style=${containerStyle}>
    <div style=${dialogWindowStyle}>
      <div style="display:flex">
        <div style=${titleStyle}>${titleText}</div>
        <button style=${dialogCloseButtonStyle} onclick=${onClickCloseButton}>X</button>
      </div>
      <hr style=${hrStyle} />
      <div>
        <input type="color" value=${bgColor} style=${colorInputStyle} oninput=${onChangeColor} />
        <input type="text" value=${name} style=${nameInputStyle} oninput=${onChangeName} />
      </div>
      <div style=${buttonAreaStyle}>
        ${deleteButton}
        <button style=${upsertButtonStyle} onclick=${onClickUpsertButton}>✔️</button>
      </div>
    </div>
  </div>
`;
