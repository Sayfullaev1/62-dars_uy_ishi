import React from 'react'

import './/footer.css'

import { Link } from 'react-router-dom'

export default function Footer() {

  const menuFooter = [
    {
      Name: "THE BASICS",
      list: [
        {
          item: "About TMDB",
          link: "",
        },
        {
          item: "Contact Us",
          link: "",
        },
        {
          item: "Support Forums",
          link: "",
        },
        {
          item: "API",
          link: "",
        },
        {
          item: "System Status",
          link: "",
        },
      ],
    },
    {
      Name: "GET INVOLVED",
      list: [
        {
          item: "Contribution Bible",
          link: "",
        },
        {
          item: "	Add New Movie",
          link: "",
        },
        {
          item: "Add New TV Show",
          link: "",
        },
      ],
    },
    {
      Name: "COMMUNITY",
      list: [
        {
          item: "	Guidelines",
          link: "",
        },
        {
          item: "Discussions",
          link: "",
        },
        {
          item: "Leaderboard",
          link: "",
        },
      ],
    },
    {
      Name: "LEGAL",
      list: [
        {
          item: "Terms of Use",
          link: "",
        },
        {
          item: "API Terms of Use",
          link: "",
        },
        {
          item: "Privacy Policy",
          link: "",
        },
        {
          item: "	DMCA Policy",
          link: "",
        },
      ],
    },
  ]



  return (
    <div className="Footer">



      <div className='Footer_wrap'>


        <div className="Footer_wrap_User">


          <div className='Footer_wrap_User_img'>
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt=""/>
          </div>

          <div className='Footer_wrap_User_btn'>
            <Link className='Footer_wrap_User_btn_link' >
              <button className='Footer_wrap_User_btn_link_button'>Hi Gyhhvv!</button>
            </Link>
          </div>


        </div>



        <div className='Footer_wrap_menu'>

          <ul className='Footer_wrap_menu_list'>
            {
              menuFooter.map( (item) => {
                return(
                  <li className='Footer_wrap_menu_list_item' key={item.Name}>
                    <div className='Footer_wrap_menu_list_item_nameWrapper'>
                      <h3 className='Footer_wrap_menu_list_item_nameWrapper_text'>{item.Name}</h3>
                    </div>
                    <div className='Footer_wrap_menu_list_item_ulWrapper'>
                      <ul className='Footer_wrap_menu_list_item_ulWrapper_element'>
                        {
                          item.list.map( (element) => {
                            return(
                              <li className='Footer_wrap_menu_list_item_ulWrapper_element_list' key={element.item}>
                                <Link className='Footer_wrap_menu_list_item_ulWrapper_element_list_link'>{element.item}</Link>
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
      


    </div>
  )
}
