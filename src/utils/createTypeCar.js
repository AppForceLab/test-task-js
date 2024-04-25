import Icon from 'components/Icon/Icon';

export const createTypeCar = () => {
  return [
    {
      id: 't1',
      value: 'panelTruck',
      svg: <Icon width="40" height="28" name="panelTruck" />,
      text: 'Van',
    },
    {
      id: 't2',
      value: 'fullyIntegrated',
      svg: <Icon width="40" height="28" name="fullyIntegrated" />,
      text: 'Fully Integrated',
    },
    {
      id: 't3',
      value: 'alcove',
      svg: <Icon width="40" height="28" name="alcove" />,
      text: 'Alcove',
    },
  ];
};