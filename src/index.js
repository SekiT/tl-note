import { html } from 'sinuous';
import columnsView from './view/columns';
import activitiesView from './view/activities';
import newActivityButtonView from './view/newActivityButton';
import columnDialog from './view/columnDialog';

const style = {
  margin: '2vh 0',
  'font-size': '14px',
  'font-family': 'sans-serif',
};

const indexView = () => html`
  <div style=${style}>
    <${columnsView} />
    <${activitiesView} />
  </div>
  <${newActivityButtonView} />
  <${columnDialog} />
`;

document.body.append(indexView());
