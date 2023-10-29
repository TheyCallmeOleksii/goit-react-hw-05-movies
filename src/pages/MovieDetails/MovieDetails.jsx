import { BASE_POSTER_URL } from 'helpers/Helpers';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import {
  StyledDiv,
  StyledLink,
  StyledBox,
  StyledH1,
  StyledP,
  StyledList,
  StyledItem,
  StyledLinkComment,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovieDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);

        setMovieDetails(details.data);
      } catch (error) {
        console.log('setError: ', setError(error.message));
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <StyledDiv>
      <StyledLink to={backLink.current}>Go back</StyledLink>
      {error && <p>error.message</p>}
      {movieDetails !== null && (
        <>
          <StyledBox>
            <img
              src={`${BASE_POSTER_URL + movieDetails.poster_path}`}
              alt={movieDetails.title}
              width="300"
            />
            <div>
              <StyledH1>{movieDetails.title}</StyledH1>
              <StyledP>
                Users Score: {Math.round(movieDetails.vote_average * 10)}%
              </StyledP>
              <StyledP>Overview: {movieDetails.overview}</StyledP>
              <StyledP>
                Genres:{' '}
                {movieDetails.genres.map(genre => genre.name).join(', ')}
              </StyledP>
            </div>
          </StyledBox>
          <div>
            <StyledP>Additional information</StyledP>
            <StyledList>
              <StyledItem>
                <StyledLinkComment to="cast">Cast</StyledLinkComment>
              </StyledItem>
              <li>
                <StyledLinkComment to="review">Review</StyledLinkComment>
              </li>
            </StyledList>
          </div>

          <Outlet />
        </>
      )}
    </StyledDiv>
  );
};
export default MovieDetails;
