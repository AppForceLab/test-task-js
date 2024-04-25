import { modifieFirstLetter } from './modifieFirstLetter';

export const createParamsForItem = (obj, value) => {
  if (value === 'airConditioner') return 'AC';
  if (
    value === 'beds' ||
    value === 'adults' ||
    value === 'hob' ||
    value === 'freezer'
  )
    return `${obj[value]} ${value}`;

  return modifieFirstLetter(value);
};