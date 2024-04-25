
import styles from './Home.module.css';
import SliderComponent from 'components/Slider/SliderComponent';

const Home = () => {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Campers World</h1>
    <SliderComponent />
    </div>
    </>
  );
};

export default Home;