import { html } from 'sinuous';
import { observable, computed } from 'sinuous/observable';
import columns from '@/observable/columns';
import activities from '@/observable/activities';
import {
  plusButtonStyle, closeButtonStyle, dialogBackgroundStyle, dialogWindowStyle,
} from '@/sharedStyle';
import { foregroundColor } from './util';

export const activityDialogState = observable({
  mode: 'none', // 'add' or 'update' or 'none'
  id: '',
  columnIds: [],
  day: 1,
  time: '',
  timeEnd: '',
  text: '',
});

const containerStyle = computed(() => ({
  ...dialogBackgroundStyle,
  display: activityDialogState().mode === 'none' ? 'none' : 'block',
}));

const windowStyle = {
  ...dialogWindowStyle,
  width: '70%',
  height: '70%',
};

const titleStyle = {
  'margin-left': '7px',
  'font-size': '24px',
};

const titleTexts = {
  add: '項目追加',
  update: '項目編集',
  none: '',
};
const titleText = computed(() => titleTexts[activityDialogState().mode]);

const dialogCloseButtonStyle = closeButtonStyle('36px');
const onClickCloseButton = () => activityDialogState({
  ...activityDialogState(),
  mode: 'none',
});

const columnStyle = (color, checked, width) => ({
  'background-color': `rgb(${color.join(',')})`,
  color: foregroundColor(color),
  opacity: checked ? 1 : 0.3,
  width: `${width}%`,
  'border-radius': '8px 8px 0 0',
  'font-size': '16px',
  'text-align': 'center',
});
const onClickColumn = (id, checked) => () => {
  const currentState = activityDialogState();
  const columnIds = checked
    ? currentState.columnIds.filter((columnId) => columnId !== id)
    : [...currentState.columnIds, id];
  activityDialogState({
    ...currentState,
    columnIds,
  });
};
const columnPart = (columnIds, length) => ({ id, name, color }) => {
  const checked = columnIds.includes(id);
  return html`
    <div
      style=${columnStyle(color, checked, 100 / length)}
      onclick=${onClickColumn(id, checked)}
    >
      ${name}
    </div>
  `;
};
const columnsPart = computed(() => {
  const { columnIds } = activityDialogState();
  const currentColumns = columns();
  const columnRenderer = columnPart(columnIds, currentColumns.length);
  return html`
    ${currentColumns.map(columnRenderer)}
  `;
});

const dayFieldStyle = {
  'margin-top': '5px',
  'font-size': '14px',
};
const dayInputStyle = {
  'margin-left': '5px',
  width: '30%',
};
const day = computed(() => activityDialogState().day);
const onChangeDay = (evt) => {
  activityDialogState({
    ...activityDialogState(),
    day: parseInt(evt.target.value, 10) || 0,
  });
};

const timeInputStyle = {
  'margin-top': '5px',
  width: '70%',
};
const time = computed(() => activityDialogState().time);
const onChangeTime = (evt) => {
  activityDialogState({
    ...activityDialogState(),
    time: evt.target.value,
  });
};

const timeEndFieldStyle = {
  'font-size': '18px',
  'margin-top': '5px',
};

const timeEnd = computed(() => activityDialogState().timeEnd);
const onChangeTimeEnd = (evt) => {
  activityDialogState({
    ...activityDialogState(),
    timeEnd: evt.target.value,
  });
};

const clearTimeEndButtonStyle = {
  ...plusButtonStyle('18px'),
  'margin-left': '5px',
  'background-color': '#ccc',
  'border-color': '#999',
};
const onClickClearTimeEnd = () => {
  activityDialogState({
    ...activityDialogState(),
    timeEnd: '',
  });
};

const textStyle = {
  width: 'calc(100% - 12px)',
  height: 'calc(70vh - 109px)',
  padding: '5px',
  'font-size': '18px',
  'background-color': '#eee',
  color: 'black',
  'font-family': 'sans-serif',
  resize: 'none',
};
const text = computed(() => activityDialogState().text);
const onChangeText = (evt) => {
  activityDialogState({
    ...activityDialogState(),
    text: evt.target.value,
  });
};

const buttonsFieldStyle = {
  'margin-top': 'auto',
};
const deleteButtonStyle = {
  ...plusButtonStyle('30px'),
  'margin-right': '7px',
  'font-size': '15px',
  'background-color': '#fcc',
  'border-color': '#c99',
};
const onClickDeleteButton = () => {
  const state = activityDialogState();
  const { id } = state;
  activities(activities().filter((activity) => activity.id !== id));
  activityDialogState({ ...state, mode: 'none' });
};
const deleteButton = computed(() => (activityDialogState().mode === 'update' ? (
  html`<button style=${deleteButtonStyle} onclick=${onClickDeleteButton}>🗑️</button>`
) : ''));

const upsertButtonDisabled = computed(() => {
  const { columnIds, time: currentTime, text: currentText } = activityDialogState();
  return columnIds.length === 0 || currentTime === '' || currentText === '';
});
const upsertButtonStyle = computed(() => ({
  ...plusButtonStyle('30px'),
  'font-size': '15px',
  'background-color': '#cfc',
  'border-color': '#9c9',
  opacity: upsertButtonDisabled() ? 0.3 : 1,
}));
const onClickUpsertButton = () => {
  const { mode, ...newActivity } = activityDialogState();
  if (mode === 'add') {
    activities([...activities(), newActivity]);
  } else {
    activities(activities().map((activity) => (
      activity.id === newActivity.id ? newActivity : activity
    )));
  }
  activityDialogState({ ...newActivity, mode: 'none' });
};

export default () => html`
  <div style=${containerStyle}>
    <div style=${windowStyle}>
      <div style=${titleStyle}>
        ${titleText}
        <button style=${dialogCloseButtonStyle} onclick=${onClickCloseButton}>X</button>
      </div>
      <hr />
      <div style="display:flex">
        ${columnsPart}
      </div>
      <div style="display:flex;flex:25% 75%">
        <div style="display:flex;flex-direction:column">
          <div style=${dayFieldStyle}>
            Day
            <input type="number" style=${dayInputStyle} value=${day} onchange=${onChangeDay} />
          </div>
          <input type="time" style=${timeInputStyle} value=${time} onchange=${onChangeTime} />
          <div style=${timeEndFieldStyle}>
            ~<input type="time" value=${timeEnd} onchange=${onChangeTimeEnd} />
            <button style=${clearTimeEndButtonStyle} onclick=${onClickClearTimeEnd}>X</button>
          </div>
          <div style=${buttonsFieldStyle}>
            ${deleteButton}
            <button
              style=${upsertButtonStyle}
              onclick=${onClickUpsertButton}
              disabled=${upsertButtonDisabled}
            >✔️</button>
          </div>
        </div>
        <div style="width:100%">
          <textarea style=${textStyle} value=${text} onchange=${onChangeText}></textarea>
        </div>
      </div>
    </div>
  </div>
`;
