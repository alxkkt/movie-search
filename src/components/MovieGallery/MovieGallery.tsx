import IMovie from '../../interfaces/Movie.interface';

import MovieGalleryItem from './MovieGalleryItem';

import styles from './MovieGallery.module.scss';

interface IProps {
  items: IMovie[];
  children?: JSX.Element;
}

const MovieGallery = ({ items = [], children }: IProps) => {
  const elements = items.map(item => (
      <MovieGalleryItem key={item.imdbID} poster={item.Poster} title={item.Title} year={item.Year} />
  ));
  return (
    <>
      <ul className={styles.ImageGallery}>{elements}</ul>
      {children}
    </>
  );
};

export default MovieGallery;