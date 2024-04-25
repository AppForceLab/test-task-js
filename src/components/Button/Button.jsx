import styles from './Button.module.css';

export const Button = ({ variant = 'red', className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
