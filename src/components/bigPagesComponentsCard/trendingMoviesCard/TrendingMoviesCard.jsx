import React from 'react'
import "./trendingMoviesCard.css"
import { Link, useLocation } from 'react-router-dom'
import PercentageIndicator from '../../smallAuxiliaryComponents/percentageIndicator/PercentageIndicator'

export default function TrendingMoviesCard(props) {


    const BaseUrl = "https://image.tmdb.org/t/p/w500";

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
    <div className='TrendingMoviesCard'>

        {
            props.elem?.results?.map( (item) => {
                return(
                    <div key={item.backdrop_path} className="TrendingMoviesCard_card" >
                    
                        <div  className="TrendingMoviesCard_card_imgWrapper">
                          <Link to={`/${locationLink()}/${item.id}`} className='TrendingMoviesCard_card_imgWrapper_link'>
                            <img  src={BaseUrl + item.poster_path} alt="" /*onClick={() => cardReturnLink(item)}*//>
                          </Link>
                        </div>
                
                        <div className="TrendingMoviesCard_card_infoWrapper">
                
                          <div className='TrendingMoviesCard_card_infoWrapper_ratingWrapper'>
                            <div className='TrendingMoviesCard_card_infoWrapper_ratingWrapper_counterIndicator'>
                              <PercentageIndicator elem={item.vote_average}/>
                            </div>
                          </div>
                
                          <div className='TrendingMoviesCard_card_infoWrapper_info'>
                
                            <Link to={`/${locationLink()}/${item.id}`} className='TrendingMoviesCard_card_infoWrapper_info_link'>
                              {item.title === undefined ? item.name :item.title }
                            </Link>

                            <p className='TrendingMoviesCard_card_infoWrapper_info_data'>
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
