import React from 'react';
import { useDispatch } from 'react-redux';

import { setLocationFilter } from '../../store/filtersSlice';
import sprite from '../../images/icons/sprite.svg';

import styles from './CampersFilter.module.css';

export const CampersFilter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setLocationFilter(event.target.value.trim().toLowerCase()));
  };

  return (
    <div className={styles.filters}>
      <div className={styles.locationFilter}>
        <label className={styles.label} htmlFor="location">
          Location
        </label>
        <div className={styles.inputWrapper}>
          <svg className={styles.locationIcon} width="18" height="20">
            <use xlinkHref={`${sprite}#location`} />
          </svg>
          <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            id="location"
          />
        </div>
      </div>
      <div className={styles.featuresFilter}>Features filter</div>
      <div className={styles.typeFilter}>Type filter</div>
    </div>
  );
};
