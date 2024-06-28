import React, { useContext, useEffect, useMemo, useState } from 'react'

import '../moviesStyle/MoviesStyle.css'

import arrayData from '../../../array/reppository/apiDataRepository/apiDataRepository'
import MoviesAndTvShowsCard from '../../../components/bigPagesComponentsCard/moviesAndTvShowsCard/MoviesAndTvShowsCard'
import { GlobalContext } from '../../../context/Context'


export default function MoviesNowPlaying() {


  const [ data, setData ] = useState([])


  const {lang} = useContext(GlobalContext).langObject


  const [ endPoint , setEndPoint ] = useState("movie/now_playing?language=en-US&page=1")

  useMemo(()=>{
    setEndPoint(`/movie/now_playing?language=${lang}&page=1`)
  },[lang])



  const info = arrayData(endPoint)

  useEffect( () => {
    info.then( (resp) => {
      // BigPagesComponentsCard(resp)
      console.log(resp);
      setData(resp.data)
    })
  }, [endPoint])


  return (
    <div  className='Movies'>



      <div className='Movies_info'>

        <h1 className='Movies_info_text'>Popular Movies</h1>

      </div>



      <div className='Movies_content'>


        <div className='Movies_content_functionalWrapper'></div>


        <div className='Movies_content_cardWrapper'>

          <MoviesAndTvShowsCard elem={data}/>

        </div>

      </div>


      
    </div>
  )
}
