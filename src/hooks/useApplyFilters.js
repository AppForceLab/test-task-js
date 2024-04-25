import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCampers, getLocationFilterQuery } from '../store/selectors';

export const useApplyFilters = () => {
  const campers = useSelector(getCampers);
  const locationFilterQuery = useSelector(getLocationFilterQuery);

  const [campersToShow, setCampersToShow] = useState(campers);

  useEffect(() => {
    setCampersToShow(
      campers.filter(({ location }) =>
        location.toLowerCase().includes(locationFilterQuery)
      )
    );
  }, [campers, locationFilterQuery]);

  return campersToShow;
};
