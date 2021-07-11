import { observable } from 'sinuous/observable';

const columns = observable([
  {
    id: 'c1',
    name: 'A氏',
    color: [0, 0, 128],
    width: 33,
  },
  {
    id: 'c2',
    name: 'B君',
    color: [255, 128, 128],
    width: 33,
  },
  {
    id: 'c3',
    name: 'C様',
    color: [128, 255, 128],
    width: 33,
  },
]);

export default columns;
