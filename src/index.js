import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';

import Context from './context/Context';

import store from './app/store'
import { Provider } from 'react-redux'



import Home from './pages/mainPages/homePage/Home';



import MoviesPopular from './pages/moviesPages/moviesPopular/MoviesPopular';
import MoviesNowPlaying from './pages/moviesPages/moviesNowPlaying/MoviesNowPlaying';
import MoviesUpcoming from './pages/moviesPages/moviesUpcoming/MoviesUpcoming';
import MoviesTopRated from './pages/moviesPages/moviesTopRated/MoviesTopRated';



import TvShowsPopular from './pages/tvShowsPages/tvShowsPopular/TvShowsPopular';
import TvShowsAiringToday from './pages/tvShowsPages/tvShowsAiringToday/TvShowsAiringToday';
import TvShowsOnTv from './pages/tvShowsPages/tvShowsOnTv/TvShowsOnTv';
import TvShowsTopRated from './pages/tvShowsPages/tvShowsTopRated/TvShowsTopRated';


import MoviesAndZTvShoShowsNavigate from './pages/navigatePages/moviesAndZTvShoShowsNavigate/MoviesAndZTvShoShowsNavigate'



import PeoplePopularPeople from './pages/peoplePages/peoplePopularPeople/PeoplePopularPeople';




import WatchlistPage from './pages/favouritePage/WatchlistPage';
import SearchPage from './pages/searchPage/SearchPage';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  // <React.StrictMode>


  <Provider store={store}>


    <Context>

      <BrowserRouter>


        <Routes>



          <Route element={<DashboardLayout/>}>


            <Route path='/' element={<Home/>}/>



            <Route path='/movie' element={<MoviesPopular/>}/>
            <Route path='/movie/now-playing' element={<MoviesNowPlaying/>}/>
            <Route path='/movie/upcoming' element={<MoviesUpcoming/>}/>
            <Route path='/movie/top-rated' element={<MoviesTopRated/>}/>


            <Route path='/tv' element={<TvShowsPopular/>}/>
            <Route path='/tv/airing-today' element={<TvShowsAiringToday/>}/>
            <Route path='/tv/on-the-air' element={<TvShowsOnTv/>}/>
            <Route path='/tv/top-rated' element={<TvShowsTopRated/>}/>



            <Route path='/:type/:id' element={<MoviesAndZTvShoShowsNavigate/>}/>



            <Route path='/search' element={<SearchPage />}/>



            <Route path='/watchlist' element={<WatchlistPage/>}/>



            <Route path='/person' element={<PeoplePopularPeople/>}/>


          </Route>



        </Routes>


      </BrowserRouter>

    </Context>


  </Provider>


  // </React.StrictMode> 
);
