import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Searchbar from './components/Header/Searchbar';
import MovieGallery from './components/MovieGallery';
import Button from './shared/components/Button';

import getMovies from './shared/services/movies';

import IMovie from './interfaces/Movie.interface';

interface IState {
  items: IMovie[];
  error: null;
}

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [state, setState] = useState<IState>({
    items: [],
    error: null,
  });

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      const items = await getMovies(query, page);
      

      setState(prevState => ({
        ...prevState,
        items: [...prevState.items, ...items],
        loading: false,
      }));
    };
    try {
      const movieInfoPromise = fetchData();

      toast.promise(movieInfoPromise, {
        loading: 'Loading',
        success: 'Got the movies, enjoy!',
        error: 'Error when fetching, try again later',
      }, {
        style: {
          minWidth: "20vw",
        },
        position: 'top-left',
        success: {
          duration: 2000
        }
      });
    } catch (error: any) {
      setState(prevState => ({
        ...prevState,
        error: error.message,
      }));
    }
  }, [query, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const changeQuery = (q: string) => {
    if (!q) {
      toast.custom('Search field must contain at least 1 symbol :)', {
        position: "top-right",
      })
      return;
    }

    setState(prevState => ({
      ...prevState,
      items: [],
    }))
    setQuery(q);
    setPage(1);
  };
  
  const { items } = state;

  return (
    <div className="App">
      <Header>
        <Searchbar onSubmit={changeQuery} />
      </Header>
      <Toaster />
      {items.length && (
        <MovieGallery items={items}>
          <Button text="Load More" loadMore={loadMore} />
        </MovieGallery>
      )}
    </div>
  );
};

export default App;