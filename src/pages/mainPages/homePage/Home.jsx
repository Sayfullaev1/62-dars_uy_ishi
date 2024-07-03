import React, { useContext, useEffect, useRef, useState } from 'react'

import "./Home.css"
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../context/Context';
import arrayData from '../../../array/reppository/apiDataRepository/apiDataRepository';
import { ToggleButton } from '@mui/material';
import TrendingMoviesCard from '../../../components/bigPagesComponentsCard/trendingMoviesCard/TrendingMoviesCard';



export default function Home() {


  const [trendData, setTrendData] = useState([]);
  const searchRef = useRef();
  const navigate = useNavigate();
  const { lang } = useContext(GlobalContext).langObject;



  const { type, id } = useParams()



  const [searchWord, setSearchWord] = useState('day')


  
  const endPoint = `trending/movie/${searchWord}?language=${lang}&page=1`
  
  const info = arrayData(endPoint)



  useEffect( () => {
    info.then( (resp) => {
      console.log(resp.data);
      setTrendData(resp.data)
    })
  }, [searchWord, endPoint, lang])
  

  const handleSearch = () => {
    const searchQuery = searchRef?.current?.value;
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

  
  const handleToggle = (value) => {
    // getPopularMovies(value === "today" ? "day" : "week");
    setSearchWord(value === "today" ? "day" : "week")
  };
  











  const BaseUrl = "https://image.tmdb.org/t/p/w500";
    

  function cardReturnLink(item) {
    
    
    const returnNewNavigateNameUrl = () => {
      const id = item.id

      const name = item.original_title

      const nameChange = name.toLowerCase().replace( / /g , "-").replace(/:/g, "")

      const navigateUrl = `${id}-${nameChange}`

      return navigateUrl
    }

    // navigate(`/movie/${returnNewNavigateNameUrl()}`)
  }

  const location = useLocation().pathname;

  function locationLink() {

    let linkName

    if (location.includes("/",1) === false) {
      let lastMonth = location.length
      linkName=location.substring(1 , lastMonth )
    } else{
      let lastMonth = location.indexOf("/",1)
      linkName=location.substring(1 , lastMonth )
    }

     return(linkName)
  }
 
  function createData(data) {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]

    let thisData = data.split('-')

    let newDay = thisData[2]
    let newMonth = months[Number(thisData[1])-1]
    let newYear = thisData[0]

    let newData = `${newMonth} ${newDay}, ${newYear}`

    return(newData)
  }










  return (
    <div className='Home'>
      



      <div className="sectOne">
        <div className="texts">
          {lang === "ru-Ru" ? <h2>Добро пожаловать.</h2> : <h2>Welcome.</h2>}
          {lang === "ru-Ru" ? (
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
                lang === "ru-Ru"
                  ? "Найти фильм, сериал, персону......."
                  : "Search for a movie, tv show, person......"
              }
              ref={searchRef}
            />
            <button onClick={handleSearch}>
              {lang === "ru-Ru" ? "Поиск" : "Search"}
            </button>
          </div>
        </div>
        <div className="oscars">
          {/* <img src={Oscar} alt="" /> */}
          <button>
            {lang === "ru-Ru" ? "Посмотреть победителей" : "View the winners"} →
          </button>
        </div>
      </div>




      <main className='home_main'>


        
        <div className='home_main_trendingMovies'>


          <div className='trendingMoviesToggle'>
            <div className="trendingMoviesToggle">
              <h2>{lang === "ru" ? "В тренде" : "Trending"}</h2>
                <div className="toggle-container">
                  <button
                    className={`toggle-btn ${searchWord === "day" ? "active" : ""}`}
                    onClick={() => setSearchWord("day")}
                  >
                    {lang === "ru" ? "Сегодня" : "today"}
                  </button>
                  <button
                    className={`toggle-btn ${searchWord === "week" ? "active" : ""}`}
                    onClick={() => setSearchWord("week")}
                  >
                    {lang === "ru" ? "На этой неделе" : "This week"}
                  </button>
                </div>
            </div>
          </div>


          <div className='home_main_CardWrapper'>

            <TrendingMoviesCard elem={trendData}/>

            <div className='home_main_CardWrapper_visualEffect'></div>

          </div>
          

        </div>



      </main>
   

      
      <div className="leaderboard">
        <div className="leaderboardText">
          <h2>{lang === "en-Us" ? "Leaderboard" : "Доска почёта"}</h2>
          <div className="allEdits">
            <p>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background:
                    "linear-gradient(to right, rgb(192, 254, 207) 0%, rgb(30, 213, 169) 100%)",
                  display: "inline-block",
                  borderRadius: "50%",
                }}
              ></span>{" "}
              {lang === "en-Us" ? "All Time Edits" : "Правки за всё время"}
            </p>
            <p>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background:
                    "linear-gradient(to right,rgba(253, 193, 112,1) 0%,rgba(217, 59, 99,1) 100%)",
                  display: "inline-block",
                  borderRadius: "50%",
                }}
              ></span>{" "}
              {lang === "en-Us" ? "Edits This Week" : "Правки за неделю"}
            </p>
          </div>
        </div>
      </div>
        


    </div>
  )
}
