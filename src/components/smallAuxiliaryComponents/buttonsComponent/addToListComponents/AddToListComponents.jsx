import React from 'react'


import './addToListComponents.css'


import ListIcon from '@mui/icons-material/List';



export default function AddToListComponents(props) {
  return (
    <div className='AddToListComponents' >

      <div className='AddToListComponents_wrap'>

        <svg 
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.8}
          stroke="currentColor"
          color="white"
          fontSize="large"
        >

          <ListIcon/>
        </svg>

      </div>

    </div>
  )
}
