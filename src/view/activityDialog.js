import { html } from 'sinuous';
import { observable, computed } from 'sinuous/observable';
import { dialogBackgroundStyle, dialogWindowStyle } from '@/sharedStyle';

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

export default () => html`
  <div style=${containerStyle}>
    <div style=${windowStyle}>
      <div style=${titleStyle}>
        ${titleText}
        <button>X</button>
      </div>
      <hr />
      <div style="display:flex">
        <div>A氏</div><div>B君</div><div>C様</div>
      </div>
      <div style="display:flex">
        <div style="display:flex;flex-direction:column">
          <input type="time" />
          <div style="opacity:0.3">
            <input type="checkbox" /> ~ <input type="time" />
          </div>
        </div>
        <div>
          <textarea></textarea>
        </div>
      </div>
      <div>
        <button>🗑️</button>
        <button>✔️</button>
      </div>
    </div>
  </div>
`;
