import { observable } from 'sinuous';

export default observable([
  {
    fromDay: 1,
    fromTime: '11:00',
    toDay: 3,
    toTime: '14:00',
    step: 30,
  },
]);

const compareTuple = (tuple1, tuple2) => {
  const { length } = tuple1;
  for (let index = 0; index < length; index += 1) {
    if (tuple1[index] < tuple2[index]) return -1;
    if (tuple1[index] > tuple2[index]) return 1;
  }
  return 0;
};

const toTimeString = (hour, minute) => `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

export function* toTimes({
  fromDay, fromTime, toDay, toTime, step,
}) {
  let day = fromDay;
  let [hour, minute] = fromTime.split(':').map((str) => parseInt(str, 10));
  const [toHour, toMinute] = toTime.split(':').map((str) => parseInt(str, 10));
  const toTuple = [toDay, toHour, toMinute];
  while (compareTuple([day, hour, minute], toTuple) <= 0) {
    yield [day, toTimeString(hour, minute)];
    const hourDiff = Math.floor((minute + step) / 60);
    day += Math.floor((hour + hourDiff) / 24);
    hour = (hour + hourDiff) % 24;
    minute = (minute + step) % 60;
  }
}
