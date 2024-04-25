import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { FeatureItem } from '../FeatureItem/FeatureItem';
import { getCamper } from '../../store/selectors';
import { useGenerateFeatureItems } from '../../hooks/useGenerateFeatureItems';

import styles from './FeaturesBlock.module.css';

export const FeaturesBlock = () => {
  const { camperId } = useParams();
  const camper = useSelector(getCamper(camperId));

  const { form, length, width, height, tank, consumption } = camper;

  const features = useGenerateFeatureItems(camper);

  return (
    <div>
      <div className={styles.featuresContainer}>
        {features.map((feture) => {
          const [key, value] = feture;
          return <FeatureItem key={key} iconId={key} title={value} />;
        })}
      </div>
      <h3 className={styles.detailsTableTitle}>Vehicle details</h3>
      <div className={styles.detailsTableContainer}>
        <table className={styles.detailsTable}>
          <tbody>
            <tr>
              <td>Form</td>
              <td>{form}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{length}</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>{width}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{height}</td>
            </tr>
            <tr>
              <td>Tank</td>
              <td>{tank}</td>
            </tr>
            <tr>
              <td>Consumption</td>
              <td>{consumption}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
