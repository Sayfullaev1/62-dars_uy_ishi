import React, { useContext, useEffect, useState } from 'react'
import "./searchPage.css"
import { GlobalContext } from '../../context/Context';
import arrayData from '../../array/reppository/apiDataRepository/apiDataRepository';
import { useSearchParams } from 'react-router-dom';

export default function SearchPage() {


  const [res, setRes] = useState("movie");
  const [queryParameters] = useSearchParams();
  const searchQuery = queryParameters.get("query");
  const { lang } = useContext(GlobalContext).langObject
  // const [searchData, setSearch] = useState([]);
  // const [loader, setLoader] = useState(true);
  // const [error, setError] = useState(null);

  const [ data , setData] = useState([])


  const endPoint = `search/${res}?query=${searchQuery}&include_adult=false&language=${lang}-US&page=1`
  
  const info = arrayData(endPoint)


  useEffect( () => {
    info.then( (resp) => {
      console.log(resp.data);
      setData(resp.data)
    })
  }, [ endPoint, lang])



  return (
    <div className='SearchPage'>
      


      <div className=''></div>



      <div>
        
      </div>



    </div>
  )
}
