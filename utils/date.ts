import moment from 'moment';

export const stringToDateFormat = (year: number | null, month: number | null, day: number | null) => {
  if (!year || !month || !day) return null;

  return moment(`${year}-${month}-${day}`).format('YYYY-MM-DD');
};
