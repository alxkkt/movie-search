import React, { useState, memo } from 'react';

import Icon from '../../../shared/components/Icon';

import styles from './Searchbar.module.scss';

interface IProps {
  onSubmit: (param: string) => void;
}

const Searchbar = ({ onSubmit }: IProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setQuery(value);
  };
  
  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit} aria-label="search form">
      <button type="submit" className={styles.SearchFormButton} aria-label="submit">
        <span className={styles.SearchFormButtonLabel}>
          Search
        </span>
        <Icon width={15} height={15} name={"search"} className={styles.icon} />
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        name={query}
        autoComplete="off"
        autoFocus
        onChange={handleChange}
        placeholder="Search images and photos"
        aria-label="search input field"
      />
    </form>
  );
};

export default memo(Searchbar);