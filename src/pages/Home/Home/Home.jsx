import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { StyledH2 } from './Home.styled';
import { Loader } from 'components/Loader';

const Home = () => {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrending();

        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>error.message</p>}
      <StyledH2>Trending today</StyledH2>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
};

export default Home;
