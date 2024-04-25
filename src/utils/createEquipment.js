import { ReactComponent as IconAc } from '../img/svg/AC.svg';
import Icon from 'components/Icon/Icon.jsx';

export const createEquipment = () => {
  return [
    {
      id: 'e1',
      value: 'airConditioner',
      svg: <IconAc width="32" height="32" aria-label="airConditioner" />,
      text: 'AC',
    },
    {
      id: 'e2',
      value: 'transmission',
      svg: <Icon width="32" height="32" name="automatic" />,
      text: 'Automatic',
    },
    {
      id: 'e3',
      value: 'kitchen',
      svg: <Icon width="32" height="32" name="kitchen" />,
      text: 'Kitchen',
    },
    {
      id: 'e4',
      value: 'TV',
      svg: <Icon width="32" height="32" name="TV" />,
      text: 'TV',
    },
    {
      id: 'e5',
      value: 'shower',
      svg: <Icon width="32" height="32" name="shower" />,
      text: 'Shower/WC',
    },
  ];
};