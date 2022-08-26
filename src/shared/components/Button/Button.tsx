import styles from './Button.module.scss';

interface IProps {
  text: string;
  loadMore: () => void;
}

const Button = ({ text, loadMore }: IProps) => {
  return (
    <button onClick={loadMore} className={styles.Button} aria-label="Load More">
      {text}
    </button>
  );
};

export default Button;