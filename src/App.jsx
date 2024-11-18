import './App.css';
import {  Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Navigate from './components/Navigate'


const HomePages = lazy(() => import('./pages/HomePage'));
const Movies = lazy(() => import('./pages/MoviesPage'));
const HomePageCheckMove = lazy(() => import('./components/MovieDetailsPage'));
const Cast = lazy(() => import('./components/MovieCast'));
const Reviews = lazy(() => import('./components/MovieReviews'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
function App() {
  
  
  return (
    <div className='appWrap'>
      <Navigate/>
      <main>
         <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path='/' element={<HomePages />} /> 
            <Route path='/Movies' element={<Movies />} /> 
            <Route path='/Movies/:Movieid' element={<HomePageCheckMove />}>
              <Route path='cast' element={<Cast />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;