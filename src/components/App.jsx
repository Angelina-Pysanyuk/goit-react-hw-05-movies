import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: 22,
        color: '#010101',
      }}
    >
      <Suspense>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id/*" element={<MovieDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
