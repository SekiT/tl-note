import { html } from 'sinuous';
import { observable, computed } from 'sinuous/observable';
import columns from '@/observable/columns';
import { closeButtonStyle, dialogBackgroundStyle, dialogWindowStyle } from '@/sharedStyle';
import { foregroundColor } from './util';

export const activityDialogState = observable({
  mode: 'none', // 'add' or 'update' or 'none'
  id: '',
  columnIds: [],
  day: 1,
  time: '',
  timeEnd: null,
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
      <div style="display:flex">
        <div style="display:flex;flex-direction:column">
          <input type="time" />
          <div style="opacity:0.3">
            <input type="checkbox" /> ~ <input type="time" />
          </div>
        </div>
        <div>
          <textarea style="width:60vw;height:calc(50vh - 50px)"></textarea>
        </div>
      </div>
    </div>
  </div>
`;
