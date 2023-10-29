import { Link } from 'react-router-dom';

export const MovieItem = ({ id }) => {
  return (
    <li>
      <Link to={`movies/${id}`}></Link>
    </li>
  );
};
