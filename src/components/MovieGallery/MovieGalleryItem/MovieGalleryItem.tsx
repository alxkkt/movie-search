import styles from './MovieGalleryItem.module.scss';

import defaultImg from '../../../images/defaultMinimal.jpeg';

interface IProps {
  poster: string;
  title: string;
  year: string;
}

const MovieGalleryItem = ({ poster,title, year }: IProps) => {
  return (
    <li className={styles.item} aria-label="movie card" tabIndex={0}>
        <img
        className={styles.itemImage}
        src={poster === "N/A" ? defaultImg : poster}
        alt={`${poster} poster`}
      />
      <div className={styles.descriptionWrapper}>
        <p className={styles.title} aria-label="movie title">{title}</p>
        <p className={styles.year} aria-label="release year">{year}</p>
      </div>
    </li>
  );
};

export default MovieGalleryItem;