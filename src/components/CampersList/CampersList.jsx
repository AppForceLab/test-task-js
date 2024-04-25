import React, { useCallback } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import CamperCard from '../CamperCard/CamperCard';
import { Button } from '../Button/Button';
import { getPage, getShowLoadMoreButton } from '../../store/selectors';
import { fetchCampers } from '../../api/catalogApi';

import styles from './CampersList.module.css';

export const CampersList = React.memo(({ campers }) => {
  const dispatch = useDispatch();
  const showLoadMoreButton = useSelector(getShowLoadMoreButton);
  const page = useSelector(getPage);

  const handleLoadMore = useCallback(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  return (
    <>
      <ul className={styles.campersList}>
        {campers.map((camper) => (
          <li className={styles.camperItem} key={camper._id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {showLoadMoreButton && (
        <Button
          className={styles.loadMoreButton}
          variant="transparent"
          onClick={handleLoadMore}
        >
          Load more
        </Button>
      )}
    </>
  );
});
