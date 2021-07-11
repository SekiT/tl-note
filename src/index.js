import { html } from 'sinuous';
import columnsView from './view/columns';
import activitiesView from './view/activities';

const indexView = () => html`
  <${columnsView} />
  <${activitiesView} />
`;

document.body.append(indexView());
