import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'services/api';
import { StyledLi, StyledUl } from './Review.styled';
import { Loader } from 'components/Loader';

const Review = () => {
  const { movieId } = useParams();
  const [reviewItems, setReviewItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchReviewItem = async () => {
      try {
        setIsLoading(true);
        const revItems = await fetchReview(movieId);

        setReviewItems(revItems.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviewItem();
  }, [movieId]);

  return (
    <>
      {' '}
      {isLoading && <Loader />}
      {reviewItems !== null && (
        <StyledUl>
          {reviewItems.map(reviewItem => (
            <StyledLi key={reviewItem.id}>
              <b>Author: {reviewItem.author}</b>
              <p>{reviewItem.content}</p>
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
};
export default Review;
