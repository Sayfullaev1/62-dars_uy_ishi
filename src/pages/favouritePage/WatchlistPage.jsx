  import React, { useContext, useEffect, useState } from 'react'

  import './watchlistPage.css'
  import { useSelector } from 'react-redux'
  import arrayData from '../../array/reppository/apiDataRepository/apiDataRepository';
  import { GlobalContext } from '../../context/Context';
  import { Link } from 'react-router-dom';
  import PercentageIndicator from '../../components/smallAuxiliaryComponents/percentageIndicator/PercentageIndicator';

  export default function WatchlistPages() {

    const BaseUrl = "https://image.tmdb.org/t/p/w500";

    const {lang} = useContext(GlobalContext).langObject


    const select = useSelector((state)=> state.counter.value)


    const [menuData, setMenuData] = useState([])



    function createData(data) {

      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]

      let thisData = data.split('-')

      let newDay = thisData[2]
      let newMonth = months[Number(thisData[1])-1]
      let newYear = thisData[0]

      let newData = `${newMonth} ${newDay}, ${newYear}`

      return(newData)
    }
    

    useEffect(() => {
      let array = []

      select?.map( (item, index) => {
        const endPoint = `/${item.tupe}/${item.id}?language=${lang}&page=1`
        const info = arrayData(endPoint)
        info.then( (resp) => {
          array.push(resp.data)

          if (index === select.length -1) {
            setMenuData(array)
            console.log(array);
          }
        })
      })
      
    }, [lang, select])


    return (
      <div className='WatchlistPages'>



        <div className='WatchlistPages_wrap'>


          <div className='WatchlistPages_wrap_'>
            <h1>My Watchlist</h1>
          </div>


          <div className='WatchlistPages_wrap_cardWrapper'>
            {
              menuData?.map( (item, index) => {
                console.log(item);
                return(
                  <div className='WatchlistPages_wrap_cardWrapper_card'>
                    <div className='WatchlistPages_wrap_cardWrapper_card_img'>
                      <Link to={`/${select[index]?.tupe}/${item.id}`} className='WatchlistPages_wrap_cardWrapper_card_img_link'>
                        <img src={BaseUrl + item.poster_path} alt="" />
                      </Link>
                      
                    </div>
                    <div className='WatchlistPages_wrap_cardWrapper_card_info'>

                      <div className='WatchlistPages_wrap_cardWrapper_card_info_contents'>

                        <div className='WatchlistPages_wrap_cardWrapper_card_info_contents_wrap'>
                          <div className='WatchlistPages_wrap_cardWrapper_card_info_contents_wrap_counterIndicator'>
                            <PercentageIndicator elem={item.vote_average}/>
                          </div>
                        </div>

                        <div className='WatchlistPages_wrap_cardWrapper_card_info_contents_contentsInfo'>

                          <Link className='WatchlistPages_wrap_cardWrapper_card_info_contents_contentsInfo_link' to={`/${select[index]?.tupe}/${item.id}`} className='MoviesCard_card_infoWrapper_info_link'>
                            {item.title === undefined ? item.name :item.title }
                          </Link>

                          <p className='WatchlistPages_wrap_cardWrapper_card_info_contents_contentsInfo_p'>
                            {
                              createData( item.release_date === undefined ? item.last_air_date : item.release_date )
                            }
                          </p>

                        </div>

                      </div>

                      <div className='WatchlistPages_wrap_cardWrapper_card_info_details'>
                        <p className='WatchlistPages_wrap_cardWrapper_card_info_details_p'>
                          {
                            item?.overview
                          }
                        </p>
                      </div>
                      
                    </div>
                  </div>
                )
              })
            }
          </div>


        </div>



      </div>
    )
  }

  