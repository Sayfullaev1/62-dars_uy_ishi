import React from 'react'

import './favoriteButtonComponent.css'


import FavoriteIcon from '@mui/icons-material/Favorite';



export default function FavoriteButtonComponent(props) {
  return (
    <div className='FavoriteButtonComponent'>
      
      <div className='FavoriteButtonComponent_wrap'>

        <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          color="white"
        >

          <FavoriteIcon/>   
        </svg>

      </div>

    </div>
  )
}
