import moment from 'moment';

export const stringToDateFormat = (date: string) => {
  return moment(date).format('YYYY-MM-DD');
};
