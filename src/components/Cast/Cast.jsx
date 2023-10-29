import { BASE_POSTER_URL, DEFAULT_POSTER } from 'helpers/Helpers';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import {
  StyledCharacter,
  StyledH3,
  StyledName,
  StyledList,
  StyledItem,
  StyledImg,
} from './Cast.styled';
import { Loader } from 'components/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchCastId = async () => {
      try {
        setIsLoading(true);
        const detailsCast = await fetchCast(movieId);

        setCastDetails(detailsCast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCastId();
  }, [movieId]);

  // const { name } = castDetails;
  return (
    <>
      {' '}
      {isLoading && <Loader />}
      {castDetails !== null && (
        <div>
          <StyledH3>Cast:</StyledH3>
          <StyledList>
            {castDetails.map(castDetail => (
              <StyledItem key={castDetail.id}>
                <StyledImg
                  src={`${
                    castDetail.profile_path
                      ? BASE_POSTER_URL + castDetail.profile_path
                      : DEFAULT_POSTER
                  }`}
                  alt={castDetail.name}
                  width={150}
                />
                <StyledName>{castDetail.name}</StyledName>
                <StyledCharacter>
                  Character: {castDetail.character}
                </StyledCharacter>
              </StyledItem>
            ))}
          </StyledList>
        </div>
      )}
    </>
  );
};
export default Cast;
