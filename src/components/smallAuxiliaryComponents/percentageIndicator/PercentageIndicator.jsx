import React from 'react'

import './PercentageIndicator.css'

export default function PercentageIndicator(props) {

    const percent = Math.floor(props.elem*10)

    

    let a2

    if (percent>=75) {
        const col = '#21d07a'
        const bacgrColl = '#204529'
        
        a2 = {
            background: `conic-gradient( ${col} 0% ${percent}%, ${bacgrColl} 0% 100%, transparent 80% 100%)`,
        }
    } else if (percent>=50 && percent<75){
        const col = '#d2d531'
        const bacgrColl = '#423d0f'
        
        a2 = {
            background: `conic-gradient( ${col} 0% ${percent}%, ${bacgrColl} 0% 100%, transparent 80% 100%)`,
        }
    } else if (percent>=0 && percent<50){
        const col = '#db2360'
        const bacgrColl = '#571435'
        
        a2 = {
            background: `conic-gradient( ${col} 0% ${percent}%, ${bacgrColl} 0% 100%, transparent 80% 100%)`,
        }

    } else if ( percent === undefined || percent === NaN || percent === false ) {
        const bacgrColl = '#666666'
        
        a2 = {
            background: ` ${bacgrColl} 0% 100%, transparent 80% 100%)`,
        }
    }


  return (
    <div className='PercentageIndicator'>


        <div className='PercentageIndicator_wrap'>

            <div style={a2} className='PercentageIndicator_wrap_border'>
                <div className='PercentageIndicator_wrap_border_div'>
                    <span className='PercentageIndicator_wrap_border_div_span'>
                        <h1>
                            {`${percent}`}
                        </h1>
                        <p>%</p>
                    </span>
                </div>
            </div>

        </div>


    </div>
  )
}
