import React, { useContext, useEffect, useMemo, useState } from 'react'


import "../tvShowsStyle/tvShowsStyle.css"


import arrayData from '../../../array/reppository/apiDataRepository/apiDataRepository'
import { GlobalContext} from '../../../context/Context'
import MoviesAndTvShowsCard from '../../../components/bigPagesComponentsCard/moviesAndTvShowsCard/MoviesAndTvShowsCard'



export default function TvShowsPopular() {
  

  const [ data, setData ] = useState([])


  const { lang }= useContext(GlobalContext).langObject

  console.log(lang);


  const [ endPoint , setEndPoint ] = useState("/tv/popular?language=en&page=1")

  useMemo(()=>{
    setEndPoint(`/tv/popular?language=${lang}-US&page=1`)
  },[lang])

  // const info = arrayData(endPoint)

  useEffect( () => {
    info.then( (resp) => {
      // BigPagesComponentsCard(resp)
      console.log(resp);
      setData(resp.data)
    })
  }, [endPoint])


  // const endPoint = "/tv/popular?language=en-US&page=1"

  const info = arrayData(endPoint)

  useEffect( () => {
    info.then( (resp) => {
      // BigPagesComponentsCard(resp)
      console.log(resp);
      setData(resp.data)
    })
  }, [])

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
