import { observable } from 'sinuous/observable';

const activities = observable([
  {
    id: 'a1',
    columnIds: ['c1', 'c2'],
    day: 1,
    time: '12:00',
    text: 'A氏とB君がエントランスで会った',
  },
  {
    id: 'a2',
    columnIds: ['c1'],
    day: 1,
    time: '12:00',
    timeEnd: '13:00',
    text: 'A氏はエントランスにいた。B君以外とは会っていない',
  },
  {
    id: 'a3',
    columnIds: ['c3'],
    day: 1,
    time: '13:05',
    text: 'C様が自室から出てエントランスに来た',
  },
]);

export default activities;
