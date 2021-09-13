export function diffBetweenDays(date) {
  let hours;

  if(date) {
    const currentDate = Date.now();
    const startDate = new Date(date.split(' ')[0]).getTime();
    const diffTime = Math.abs(currentDate - startDate);
    hours = Math.floor(diffTime/1000/60/60);
  }

  return hours;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

