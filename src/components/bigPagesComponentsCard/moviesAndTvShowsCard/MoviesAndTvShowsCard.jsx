import React from 'react'


import "./MoviesAndTvShowsCard.css"
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import PercentageIndicator from '../../smallAuxiliaryComponents/percentageIndicator/PercentageIndicator';
// import MoviesNaigate from '../../../pages/moviesPages/moviesNaigate/MoviesNaigate';


export default function MoviesAndTvShowsCard(props) {

    console.log(props?.elem?.results);

    const BaseUrl = "https://image.tmdb.org/t/p/w500";
    
    const navigate = useNavigate()


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
    <div className='MoviesCard'>
      
      {
        props?.elem?.results?.map( (item) => {
            return(
                <div key={item.backdrop_path} className="MoviesCard_card" >

                    <div  className="MoviesCard_card_imgWrapper">
                      <Link to={`/${locationLink()}/${item.id}`} className='MoviesCard_card_imgWrapper'>
                        <img  src={BaseUrl + item.poster_path} alt="" /*onClick={() => cardReturnLink(item)}*//>
                      </Link>
                    </div>

                    <div className="MoviesCard_card_infoWrapper">

                      <div className='MoviesCard_card_infoWrapper_ratingWrapper'>
                        <div className='MoviesCard_card_infoWrapper_ratingWrapper_counterIndicator'>
                          <PercentageIndicator elem={item.vote_average}/>
                        </div>
                      </div>

                      <div className='MoviesCard_card_infoWrapper_info'>

                        <Link to={`/${locationLink()}/${item.id}`} className='MoviesCard_card_infoWrapper_info_link'>
                          {item.title === undefined ? item.name :item.title }
                        </Link>
                            
                        <p className='MoviesCard_card_infoWrapper_info_data'>
                          {/* {item.release_date=== undefined ? item.first_air_date : item.release_date } */}
                          {createData(item.release_date=== undefined ? item.first_air_date : item.release_date)}
                        </p>

                      </div>

                    </div>

                </div>
            )
        })
      }

    </div>
  )
}
