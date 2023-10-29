import axios from 'axios';

const API_KEY = '6ab01e7de22f8f583270a7ee53cfe6da';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const { data } = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);

  return data;
};

export const fetchMovieDetails = async movieId => {
  const details = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return details;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data.cast;
};
export const fetchReview = async movieId => {
  const dataReview = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return dataReview.data;
};
export const fetchSearchMovie = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&page=1&language=en-US`
  );

  return data.results;
};
