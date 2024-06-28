import React, { useContext, useEffect, useMemo, useState } from 'react'


import "../tvShowsStyle/tvShowsStyle.css"

import arrayData from '../../../array/reppository/apiDataRepository/apiDataRepository'
import MoviesAndTvShowsCard from '../../../components/bigPagesComponentsCard/moviesAndTvShowsCard/MoviesAndTvShowsCard'
import { GlobalContext } from '../../../context/Context'



export default function TvShowsAiringToday() {
  

  const [ data, setData ] = useState([])


  const {lang} = useContext(GlobalContext).langObject

  const [ endPoint , setEndPoint ] = useState("/tv/airing_today?language=en-US&page=1")

  useMemo(()=>{
    setEndPoint(`/tv/airing_today?language=${lang}&page=1`)
  },[lang])


  // const endPoint = "/tv/airing_today?language=en-US&page=1"

  const info = arrayData(endPoint)

  useEffect( () => {
    info.then( (resp) => {
      // BigPagesComponentsCard(resp)
      console.log(resp);
      setData(resp.data)
    })
  }, [endPoint])

  return (
    <div  className='TvShows'>  



      <div className='TvShows_info'>

        <h1 className='TvShows_info_text'>Popular Movies</h1>

      </div>



      <div className='TvShows_content'>


        <div className='TvShows_content_functionalWrapper'></div>


        <div className='TvShows_content_cardWrapper'>

          <MoviesAndTvShowsCard elem={data}/>

        </div>

      </div>


      
    </div>
  )
}
