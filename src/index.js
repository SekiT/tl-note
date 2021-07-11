import { html } from 'sinuous';
import columnsView from './view/columns';
import activitiesView from './view/activities';

const style = {
  margin: '2% 0',
  'font-size': '14px',
  'font-family': 'sans-serif',
};

const indexView = () => html`
  <div style=${style}>
    <${columnsView} />
    <${activitiesView} />
  </div>
`;

document.body.append(indexView());
