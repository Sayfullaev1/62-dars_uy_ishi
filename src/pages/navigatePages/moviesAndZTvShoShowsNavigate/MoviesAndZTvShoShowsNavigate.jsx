import React, { useContext, useEffect, useState } from 'react'

import "./moviesAndZTvShoShowsNavigate.css"
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../context/Context';
import arrayData from '../../../array/reppository/apiDataRepository/apiDataRepository';
import PercentageIndicator from '../../../components/smallAuxiliaryComponents/percentageIndicator/PercentageIndicator';

import AddToListComponents from '../../../components/smallAuxiliaryComponents/buttonsComponent/addToListComponents/AddToListComponents';
import FavoriteButtonComponent from '../../../components/smallAuxiliaryComponents/buttonsComponent/favoriteButtonComponent/FavoriteButtonComponent';
import SaveButtonComponent from '../../../components/smallAuxiliaryComponents/buttonsComponent/saveButtonComponent/SaveButtonComponent';


// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';




export default function MoviesAndZTvShoShowsNavigate() {

  const navigateListMenu = [
    {
      Name: "Overview",
      list: [
        {
          pageName: 'Main',
          link: "",
        },
        {
          pageName: 'Alternative Titles',
          link: "",
        },
        {
          pageName: 'Cast & Crew',
          link: "",
        },
        {
          pageName: 'Release Dates',
          link: "",
        },
        {
          pageName: 'Translations',
          link: "",
        },
        {
          pageName: 'Changes',
          link: "",
        },
        {
          pageName: 'Report',
          link: "",
        },
        {
          pageName: 'Edit',
          link: "",
        },
      ],
    },
    {
      Name: "Media",
      list: [
        {
          pageName: 'Backdrops',
          link: "",
        },
        {
          pageName: 'Logos',
          link: "",
        },
        {
          pageName: 'Posters',
          link: "",
        },
        {
          pageName: 'Videos',
          link: "",
        },
      ],
    },
    {
      Name: "Fandom",
      list: [
        {
          pageName: 'Discussions',
          link: "",
        },
        {
          pageName: 'Reviews',
          link: "",
        },
      ],
    },
    {
      Name: "Share",
      list: [
        {
          pageName: 'Share Link',
          link: "",
        },
        {
          pageName: 'Facebook',
          link: "",
        },
        {
          pageName: 'Tweet',
          link: "",
        },
      ],
    },
  ]


  const BaseUrl = "https://image.tmdb.org/t/p/w500";

  const { type, id } = useParams()
  

  const [ data, setData ] = useState([])


  const {lang} = useContext(GlobalContext).langObject


  const endPoint = `/${type}/${id}?language=${lang}&page=1`

  const info = arrayData(endPoint)

  useEffect( () => {
    info.then( (resp) => {
      console.log(resp.data);
      setData(resp.data)
    })
  }, [endPoint])


  
  return (
    <div className='MoviesAndZTvShoShowsNavigate'>

      

      <div className='MoviesAndZTvShoShowsNavigate_menuWrapper'>

        <div className='MoviesAndZTvShoShowsNavigate_menuWrapper_menu'>
          <ul className='MoviesAndZTvShoShowsNavigate_menuWrapper_menu_list'>
            {
              navigateListMenu.map( (item , index) => {
                return(
                  <li className='MoviesAndZTvShoShowsNavigate_menuWrapper_menu_list_item' key={index}>
                    <div className='MoviesAndZTvShoShowsNavigate_menuWrapper_menu_list_item_wrap' style={index=== 0 ? {borderBottom: '4px solid rgba(1, 180, 228, 1)'} : {}}>
                      <div className='MoviesAndZTvShoShowsNavigate_menuWrapper_menu_list_item_wrap_info'>
                          <h1 className='MoviesAndZTvShoShowsNavigate_menuWrapper_menu_list_item_wrap_info_text'>
                            {item.Name}
                          </h1>
                      </div>
                      <div className='MoviesAndZTvShoShowsNavigate_menuWrapper_menu_list_item_wrap_symbol'>&#9660;</div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>

      </div>



      <main className='MoviesAndZTvShoShowsNavigate_main' style={data?.backdrop_path !== undefined ? { background: `url(${BaseUrl + data?.backdrop_path}) no-repeat 380% 3%` , backgroundSize: 'auto 160%'} : {}}>
        
        
        <div className='MoviesAndZTvShoShowsNavigate_main_wrap'>


          <div className='MoviesAndZTvShoShowsNavigate_main_wrap_img'>
              <img src={BaseUrl+data?.poster_path} alt="" />
          </div>


          <div className='MoviesAndZTvShoShowsNavigate_main_wrap_info'>

            <div className='MoviesAndZTvShoShowsNavigate_main_wrap_info_title'> 
              <div className='MoviesAndZTvShoShowsNavigate_main_wrap_info_title_MainTitle'>
                <Link className='MoviesAndZTvShoShowsNavigate_main_wrap_info_title_MainTitle_link'>{data?.title}</Link>
                <span className='MoviesAndZTvShoShowsNavigate_main_wrap_info_title_MainTitle_year'>{`(${data?.release_date?.substring(0,4)})`}</span>
              </div>
              <div className='MoviesAndZTvShoShowsNavigate_main_wrap_info_title_smallTitle'>
                <span className='MoviesAndZTvShoShowsNavigate_main_wrap_info_title_smallTitle_span'>{`${data?.origin_country}`}</span>
                <h3 className='MoviesAndZTvShoShowsNavigate_main_wrap_info_title_smallTitle_h3'>{`${data?.release_date?.replace('-','/').replace('-','/')}(${data?.origin_country})`}</h3>
                <h4 className='MoviesAndZTvShoShowsNavigate_main_wrap_info_title_smallTitle_h4'>{`${data?.release_date}`}</h4>
                <h4 className='MoviesAndZTvShoShowsNavigate_main_wrap_info_title_smallTitle_h4'></h4>
              </div>
            </div>

            <div className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper'>
              
              <div className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_PercentageIndicator'>
                <PercentageIndicator elem={data?.vote_average}/>
              </div>

              <div className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_text'>
                <h4>User Score</h4>
              </div>

              <div className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_imgWrapper'>
                <ul className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_imgWrapper_list'>
                  <li className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_imgWrapper_list_item'>
                    <img className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_imgWrapper_list_item_img' src="https://www.themoviedb.org/assets/2/v8/1f60d-f12478ffe50d98da9d6cafbf29ef1777b8d1d2bb123224c978ca9ba4e6e6159b.svg" alt="" />
                  </li>
                  <li className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_imgWrapper_list_item'>
                    <img className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_imgWrapper_list_item_img' src="https://www.themoviedb.org/assets/2/v8/1f972-53b1d0723b2bec00ada6fba7a1772b267f5a05d955b0999f66771865e59fd97b.svg" alt="" />
                  </li>
                  <li className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_imgWrapper_list_item'>
                    <img className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_imgWrapper_list_item_img' src="https://www.themoviedb.org/assets/2/v8/1f92f-a18cb233c7639241a00dd2fea97c74a12765c05a55b881653868dad147165eda.svg" alt="" />
                  </li>
                </ul>
              </div>

              <div className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_btn'>
                <Link className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_btn_link'>
                  <button className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_btn_link_button' type="button">
                    What's your
                    <span className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_btn_link_button_spanText'>Vibe</span>
                    ?
                    <span className='MoviesAndZTvShoShowsNavigate_main_wrap_info_btnsWrapper_btn_link_button_spanImg'>
                      <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-636-circle-info-06837a451a09552349b182d84ae84f26308efee8f7e8ddca255bd5dbc4a66ea4.svg" alt="" />
                    </span>
                  </button>
                </Link>
              </div>

            </div>


            <div className='MoviesAndZTvShoShowsNavigate_main_wrap_info_reaction'>

              
              <ul className='MoviesAndZTvShoShowsNavigate_main_wrap_info_reaction_list'>

                <li className='MoviesAndZTvShoShowsNavigate_main_wrap_info_reaction_list_item'>
                  <span className='MoviesAndZTvShoShowsNavigate_main_wrap_info_reaction_list_item_span'>
                    <AddToListComponents/>
                  </span>
                </li>

                <li className='MoviesAndZTvShoShowsNavigate_main_wrap_info_reaction_list_item'>
                  <span className='MoviesAndZTvShoShowsNavigate_main_wrap_info_reaction_list_item_span'>
                    <FavoriteButtonComponent />
                  </span>
                </li>

                <li className='MoviesAndZTvShoShowsNavigate_main_wrap_info_reaction_list_item'>
                  <span className='MoviesAndZTvShoShowsNavigate_main_wrap_info_reaction_list_item_span'>
                    <SaveButtonComponent elem={ { id:data?.id, tupe:type} }/>
                  </span>
                </li>

                <li className='MoviesAndZTvShoShowsNavigate_main_wrap_info_reaction_list_item'>
                  <div>
                    {/* <h1> <span></span> Play Trailer</h1> */}
                  </div>
                </li>

              </ul>


            </div>
            

          </div>


        </div>
            

      </main>



    </div> 
  )
}
