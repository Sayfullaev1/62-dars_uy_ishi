import React, { useContext, useEffect, useRef, useState } from 'react'

import "./Home.css"
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../context/Context';
import arrayData from '../../../array/reppository/apiDataRepository/apiDataRepository';
import { ToggleButton } from '@mui/material';



export default function Home() {


  const [trendData, setTrendData] = useState([]);
  const searchRef = useRef();
  const navigate = useNavigate();
  const { lang } = useContext(GlobalContext).langObject;


  // async function getPopularMovies(searchWord = "day") {
  //   try {
  //     const resp = await homeTrending.getMoviesByName(
  //       `movie/${searchWord}?language=${lang === "ru" ? "ru-RU" : "en-US"}`
  //     );
  //     setTrendData(resp.results);
  //   } catch (error) {
  //     console.error("Error fetching popular movies:", error);
  //   }
  // }


  const { type, id } = useParams()

  let searchWord = 'day'


  const endPoint = `/${searchWord}?/${id}?language=${lang}&page=1`

  const info = arrayData(endPoint)

  useEffect( () => {
    info.then( (resp) => {
      console.log(resp.data);
      setTrendData(resp.data)
    })
  }, [endPoint, lang])

  // useEffect(() => {
  //   getPopularMovies();
  // }, [lang]);

  const handleSearch = () => {
    const searchQuery = searchRef?.current?.value;
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  // const handleToggle = (value) => {
  //   getPopularMovies(value === "today" ? "day" : "week");
  // };

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };
  
  return (
    <div className='Home'>
      



      <div className="sectOne">
        <div className="texts">
          {lang === "ru" ? <h2>Добро пожаловать.</h2> : <h2>Welcome.</h2>}
          {lang === "ru" ? (
            <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
          ) : (
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          )}
          <div className="search">
            <input
              type="search"
              placeholder={
                lang === "ru"
                  ? "Найти фильм, сериал, персону......."
                  : "Search for a movie, tv show, person......"
              }
              ref={searchRef}
            />
            <button onClick={handleSearch}>
              {lang === "ru" ? "Поиск" : "Search"}
            </button>
          </div>
        </div>
        <div className="oscars">
          {/* <img src={Oscar} alt="" /> */}
          <button>
            {lang === "ru" ? "Посмотреть победителей" : "View the winners"} →
          </button>
        </div>
      </div>
      
   


    </div>
  )
}
