import moment from 'moment';

export const stringToDateFormat = (year: number, month: number, day: number) => {
  return moment(`${year}-${month}-${day}`).format('YYYY-MM-DD');
};
