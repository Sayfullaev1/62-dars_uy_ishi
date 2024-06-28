import React, { useContext, useEffect, useState } from 'react'

import "../peopllePagesStyle/peopllePagesStyle.css"


import arrayData from '../../../array/reppository/apiDataRepository/apiDataRepository'
import PoppularPeopleCard from '../../../components/bigPagesComponentsCard/poppularPeopleCard/PoppularPeopleCard'
import { GlobalContext } from '../../../context/Context'



export default function PeoplePopularPeople() {


  const [ data, setData ] = useState([])


  const { lang } = useContext(GlobalContext).langObject


  const endPoint = `/person/popular?language=${lang}&page=1`

  const info = arrayData(endPoint)

  useEffect( () => {
    info.then( (resp) => {
      // BigPagesComponentsCard(resp)
      console.log(resp);
      setData(resp.data)
    })
  }, [lang])


  return (
    <div  className='PeoplePopularPeople'>  



      <div className='PeoplePopularPeople_info'>

        <h1 className='PeoplePopularPeople_info_text'>Popular People</h1>

      </div>



      <div className='PeoplePopularPeople_content'>


        <div className='PeoplePopularPeople_content_cardWrapper'>

          <PoppularPeopleCard elem={data}/>

        </div>

      </div>


      
    </div>
  )
}
