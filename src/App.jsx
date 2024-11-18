import './App.css';
import {  Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";


const HomePages = lazy(() => import('./pages/HomePage'));
const Movies = lazy(() => import('./pages/MoviesPage'));
const HomePageCheckMove = lazy(() => import('./pages/MoveList'));
const Cast = lazy(() => import('./components/MovieCast'));
const Reviwes = lazy(() => import('./components/MovieReviews'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const Navigate = lazy(() => import('./components/Navigate'))
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
              <Route path='Cast' element={<Cast />} />
              <Route path='Reviwes' element={<Reviwes />} />
            </Route>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;