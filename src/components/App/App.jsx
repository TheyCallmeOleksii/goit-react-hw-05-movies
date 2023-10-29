import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from '../Loader';
import { StyledDiv } from './App.styled';
// import { Home } from 'pages/Home';
// import { Layout } from './Layout/Layout';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Movies } from 'pages/Movies';
// import { Cast } from './Cast';
// import { Review } from './Review';

const Home = lazy(() => import('pages/Home/Home/Home'));
const Layout = lazy(() => import('../Layout/Layout'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import('../Cast/Cast'));
const Review = lazy(() => import('../Review/Review'));

export const App = () => {
  return (
    <StyledDiv>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="review" element={<Review />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </StyledDiv>
  );
};
