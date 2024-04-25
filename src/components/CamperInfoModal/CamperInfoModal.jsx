import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { RatingLocationBlock } from '../RatingLocationBlock/RatingLocationBlock';
import defaultImage from '../../images/default-camper-image.png';

import styles from './CamperInfoModal.module.css';

export const CamperInfoModal = ({ camper }) => {
  const { _id, description, gallery, location, name, price, rating, reviews } =
    camper;

  return (
    <>
      <h2 className={styles.title}>{name}</h2>
      <RatingLocationBlock
        rating={rating}
        reviewsQuantity={reviews.length}
        location={location}
      />
      <div className={styles.price}>{`€${price.toFixed(2)}`}</div>
      <div className={styles.gallery}>
        {gallery.map((item, index) => (
          <div className={styles.imageContainer} key={`${_id}_image_${index}`}>
            <img
              src={item || defaultImage}
              alt="Camper title"
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.modalBottom}>
        <div className={styles.tabLinksWrapper}>
          <ul className={styles.linksList}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${styles.tabLink} ${isActive && styles.active}`
                }
                to={`features/${_id}`}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${styles.tabLink} ${isActive && styles.active}`
                }
                to={`reviews/${_id}`}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.featuresReviewsWrapper}>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
          <div className={styles.formWrapper}>
            <form action="bla">Form</form>
          </div>
        </div>
      </div>
    </>
  );
};
