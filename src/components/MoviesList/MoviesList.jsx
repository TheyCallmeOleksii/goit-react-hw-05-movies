// import { MovieItem } from "./MovieItem";

import { Link, useLocation } from 'react-router-dom';
import {
  StyledCatalog,
  StyledCatalogList,
  StyledImg,
} from './MoviesList.styled';
import { BASE_POSTER_URL, DEFAULT_POSTER } from 'helpers/Helpers';
import { StyledP } from 'components/Layout/Layout.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  //   Check if 'movies' is an array and has elements
  if (!Array.isArray(movies)) {
    return <p>No movies to display.</p>;
  }
  return (
    <StyledCatalog>
      {movies.map(movie => {
        return (
          <StyledCatalogList key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              <StyledImg
                src={
                  movie.poster_path
                    ? `${BASE_POSTER_URL + movie.poster_path}`
                    : DEFAULT_POSTER
                }
                alt={movie.title}
              />
              <StyledP>{movie.title}</StyledP>
            </Link>
          </StyledCatalogList>
        );
      })}
    </StyledCatalog>
    // {/* <Outlet /> */}
  );
};
