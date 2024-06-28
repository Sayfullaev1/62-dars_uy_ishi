import React, { useEffect, useMemo, useState } from 'react'

import './saveButtonComponent.css'

import BookmarkIcon from '@mui/icons-material/Bookmark';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../../../app/slices/counterSlice';




export default function SaveButtonComponent(props) {
  
  const getSaveData = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();


  const [active, setActive] = useState(false);

  useEffect(() => {
    function filter() {

      let examination = false;

      getSaveData.map((item) => {
        if (item.id === props.elem.id) {
          examination = true;
        }
      });

      return examination;
    }

    let resultOfChecking = filter();
    setActive(resultOfChecking);
  }, [getSaveData, props.elem]);

  function toggleActive() {

    setActive((prevActive) => {
      const newActive = !prevActive;
      if (newActive) {
        dispatch(addItem(
          {
            tupe: props.elem.tupe,
            id: props.elem.id,
          }
          
        ));
      } else {
        dispatch(removeItem(
          {
            tupe: props.elem.tupe,
            id: props.elem.id,
          }
        ));
      }
      return newActive;
    });

  }


  return (
    <div className='SaveButtonComponent' onClick={ () => toggleActive()}>

      <div className='SaveButtonComponent_wrap'>

        <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          color={`${active === true ? `red` : `white`}`}
        >

          <BookmarkIcon/>   
        </svg>

      </div>

    </div>
  )
}
