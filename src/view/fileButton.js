import { html } from 'sinuous';
import columns from '@/observable/columns';
import activities from '@/observable/activities';
import timePlots from '@/observable/timePlots';
import { plusButtonStyle } from '@/sharedStyle';

const containerStyle = `
  position: fixed;
  left: 2vw;
  bottom: 4vh;
`;

const buttonStyle = `
  ${plusButtonStyle('40px')}
  display: block;
  font-size: 20px;
  margin-top: 1vh;
`;

const onChangeFile = (evt) => {
  const file = evt.target.files[0];
  file.text().then((text) => {
    const {
      columns: fileColumns, activities: fileActivities, timePlots: fileTimePlots,
    } = JSON.parse(text);
    columns(fileColumns);
    activities(fileActivities);
    timePlots(fileTimePlots);
  }).catch(() => {});
};
const fileInput = html`<input type="file" accept="application/json" onchange=${onChangeFile} />`;
const onClickLoad = () => fileInput.click();

const downloadLink = html`<a download="tl-note.json" />`;
const onClickSave = () => {
  const json = { columns: columns(), activities: activities(), timePlots: timePlots() };
  downloadLink.href = `data:application/json,${encodeURIComponent(JSON.stringify(json, null, 2))}`;
  downloadLink.click();
};

export default () => html`
  <div style=${containerStyle}>
    <button style=${buttonStyle} onclick=${onClickLoad}>📂</button>
    <button style=${buttonStyle} onclick=${onClickSave}>💾</button>
  </div>
`;
