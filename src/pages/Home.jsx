import HomeComp from 'components/Home/HomeComp';
import React from 'react';
import { useEffect, useState } from 'react';
import { requestTrendingMovies } from 'api_service/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await requestTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {trendingMovies.length > 0 ? (
        <HomeComp trendingMovies={trendingMovies} />
      ) : (
        <p>Something went wrong, try to reload the page.</p>
      )}
    </>
  );
};

export default Home;
