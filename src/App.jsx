import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import css from './App.module.css';
import clsx from 'clsx';

const HomePages = lazy(() => import('./pages/HomePages'));
const Move = lazy(() => import('./pages/Move'));
const HomePageCheckMove = lazy(() => import('./pages/HomePageCheckMove'));
const Casts = lazy(() => import('./components/Casts'));
const Reviwes = lazy(() => import('./components/Reviwes'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  const buildClass = ({isActive}) => clsx(css.link, isActive && css.active);
  
  return (
    <div className='appWrap'>
      <header>
        <NavLink to="/" className={buildClass}>Home</NavLink>
        <NavLink to="/Move" className={buildClass}>Move</NavLink>
      </header>
      <main>
         <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path='/' element={<HomePages />} /> 
            <Route path='/Move' element={<Move />} /> 
            <Route path='/Move/:id' element={<HomePageCheckMove />}>
              <Route path='Casts' element={<Casts />} />
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