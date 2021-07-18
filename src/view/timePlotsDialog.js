import { html } from 'sinuous';
import { observable, computed } from 'sinuous/observable';
import { map } from 'sinuous/map';
import timePlots from '@/observable/timePlots';
import {
  plusButtonStyle, closeButtonStyle, dialogBackgroundStyle, dialogWindowStyle,
} from '@/sharedStyle';

export const timePlotsDialogState = observable({
  open: false,
});

const timePlotsWithIndex = computed(() => timePlots().map((plot, index) => [plot, index]));

const containerStyle = computed(() => `
  ${dialogBackgroundStyle}
  display: ${timePlotsDialogState().open ? 'block' : 'none'};
`);

const titleStyle = `
  font-size: 18px;
`;

const dialogCloseButtonStyle = `
  ${closeButtonStyle('24px')}
  position: flex;
  justify-self: flex-end;
  align-self: center;
`;

const onClickCloseButton = () => {
  timePlotsDialogState({ ...timePlotsDialogState(), open: false });
};

const hrStyle = `
  margin: 5px 0 7px 0;
`;

const timePlotItemStyle = `
  display: flex;
  margin: 5px 0;
  width: 100%;
  font-size: 16px;
  align-items: center;
`;
const numberInputStyle = `
  margin: 0 3px;
  width: 32px;
  font-size: 16px;
`;
const timeInputStyle = `
  margin: 0 6px 0 3px;
  font-size: 16px;
`;
const updateByIndex = (index, key, value) => {
  timePlots(timePlots().map((plot, i) => (i === index ? { ...plot, [key]: value } : plot)));
};
const onChangeDay = (propertyName, index) => (evt) => {
  const day = parseInt(evt.target.value, 10);
  if (Number.isNaN(day)) { timePlots(timePlots()); return; }
  updateByIndex(index, propertyName, day);
};
const onChangeTime = (propertyName, index) => (evt) => {
  const { value } = evt.target;
  if (value === '') { timePlots(timePlots()); return; }
  updateByIndex(index, propertyName, value);
};
const onChangeStep = (index) => (evt) => {
  const step = parseInt(evt.target.value, 10);
  if (!step) { timePlots(timePlots()); return; }
  updateByIndex(index, 'step', step);
};
const deleteButtonStyle = `
  ${plusButtonStyle('24px')}
  margin-left: 6px;
  font-size: 12px;
  background-color: #fcc;
  border-color: #c99;
`;
const onClickDeleteButton = (index) => () => {
  timePlots(timePlots().filter((_, i) => i !== index));
};
const timePlotView = ([{
  fromDay, fromTime, toDay, toTime, step,
}, index]) => html`
  <div style=${timePlotItemStyle}>
    Day
    <input
      type="number"
      style=${numberInputStyle}
      onblur=${onChangeDay('fromDay', index)}
      value=${fromDay}
      min="1"
    />
    <input
      type="time"
      style=${timeInputStyle}
      onblur=${onChangeTime('fromTime', index)}
      value=${fromTime}
    />
    <span style="word-break:keep-all">~ Day</span>
    <input
      type="number"
      style=${numberInputStyle}
      onblur=${onChangeDay('toDay', index)}
      value=${toDay}
      min="1"
    />
    <input
      type="time"
      style=${timeInputStyle}
      onblur=${onChangeTime('toTime', index)}
      value=${toTime}
    />
    /
    <input
      type="number"
      style=${numberInputStyle}
      onblur=${onChangeStep(index)}
      value=${step}
      min="1"
    />
    min
    <button style=${deleteButtonStyle} onclick=${onClickDeleteButton(index)}>🗑️</button>
  </div>
`;

const addButtonStyle = `
  ${plusButtonStyle('24px')}
  align-self: flex-end;
`;
const onClickPlusButton = () => {
  timePlots([...timePlots(), {
    fromDay: 1,
    fromTime: '00:00',
    toDay: 1,
    toTime: '23:00',
    step: 60,
  }]);
};

export default () => html`
  <div style=${containerStyle}>
    <div style=${dialogWindowStyle}>
      <div style="display:flex">
        <div style=${titleStyle}>時刻プロット編集</div>
        <div style="display:flex;flex:auto;justify-content:flex-end">
          <button style=${dialogCloseButtonStyle} onclick=${onClickCloseButton}>X</button>
        </div>
      </div>
      <hr style=${hrStyle} />
      <div style="display:flex;flex-direction:column;margin:0 5px">
        ${map(timePlotsWithIndex, timePlotView)}
        <button style=${addButtonStyle} onclick=${onClickPlusButton}>+</button>
      </div>
    </div>
  </div>
`;
