import React, { useContext, useEffect, useState } from 'react'

import './Header.css'

import mainIcon from '../../photos/mainIcon/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
import { menuData } from '../../array/menuData/menuData'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/Context'



export default function Header() {

  const {lang , setLang} = useContext(GlobalContext).langObject

  // console.log(lang);


  const [headerWrapHidden, setHeaderWrapHidden ] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0);


  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setHeaderWrapHidden(true);
    } else {
      setHeaderWrapHidden(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className='header'>



      <div className={ `header_wrap ${headerWrapHidden === true ? 'header_wrap_hidden' : ''}`}>


        <div className='header_wrap_menuWrapper'>

          <div className='header_wrap_menuWrapper_img'>
            <Link className='header_wrap_menuWrapper_img_link' to="/">
              <img src={mainIcon} alt="" />
            </Link>
          </div>

          <div className='header_wrap_menuWrapper_menu'>
            <ul className='header_wrap_menuWrapper_menu_list'>
              {
                menuData?.map( (item) => {
                  return(
                    <li key={item.Name} className='header_wrap_menuWrapper_menu_list_item'>
                      <div className='header_wrap_menuWrapper_menu_list_item_nameWrapper'>
                        <h3 className='header_wrap_menuWrapper_menu_list_item_nameWrapper_text'>{item.Name}</h3>
                      </div>
                      <div className='header_wrap_menuWrapper_menu_list_item_internalMenu'>
                        <ul className='header_wrap_menuWrapper_menu_list_item_internalMenu_list'>
                          {
                            item.items.map( (element, index) => {
                              return(
                                <li className='header_wrap_menuWrapper_menu_list_item_internalMenu_list_item' key={index}>
                                  <Link className='header_wrap_menuWrapper_menu_list_item_internalMenu_list_item_link' to={element.link}>{element.Name}</Link>
                                </li> 
                              )
                            })
                          }
                        </ul>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          
        </div>


        <div className='header_wrap_functionalWrapper'>


          <ul className='header_wrap_functionalWrapper_list'>

            <li className='header_wrap_functionalWrapper_list_item'>
              <span className='header_wrap_functionalWrapper_list_item_imgWrapper'>
                <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg" alt="" />
              </span>
            </li>

            <li className='header_wrap_functionalWrapper_list_item'>
              
              <div className='header_wrap_functionalWrapper_list_item_cardWrap'>
                <div className='header_wrap_functionalWrapper_cardWrap_button' onClick={ () => setLang( lang=== "en-US" ? "ru-Ru" :"en-US" ) }>{lang=== "ru-Ru" ? "en" : "ru"}</div>
                <div className='header_wrap_functionalWrapper_list_item_cardWrap_card'>\

                </div>
              </div>
            </li>

            <li className='header_wrap_functionalWrapper_list_item'>
              {/* <Link className='header_wrap_functionalWrapper_list_item_link'>Login</Link> */}
              <Link className='header_wrap_functionalWrapper_list_item_link' to={'/watchlist'}>WatchList</Link>
            </li>

            <li className='header_wrap_functionalWrapper_list_item'>
              <Link className='header_wrap_functionalWrapper_list_item_link'>Join TMDB</Link>
            </li>

            <li className='header_wrap_functionalWrapper_list_item'>
              <span className='header_wrap_functionalWrapper_list_item_imgWrapper'>
                <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg" alt="" />
              </span>
            </li>

          </ul>
          
          
        
        </div>


      </div>



    </header>
  )
}
