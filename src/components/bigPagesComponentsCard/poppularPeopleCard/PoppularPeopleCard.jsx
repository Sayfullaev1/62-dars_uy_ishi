import React from 'react'

import "./PoppularPeopleCard.css"


export default function PoppularPeopleCard(props) {


    const BaseUrl = "https://image.tmdb.org/t/p/w500";

    console.log(props.elem.results);    

  return (
    <div className='PoppularPeopleCard'>
      {
        props.elem.results?.map( (item) => {
            return(
                <div className='PoppularPeopleCard_card' key={item.id}>


                    <div className='PoppularPeopleCard_card_img'>
                        <img src={BaseUrl + item.profile_path} alt="" />
                    </div>


                    <div className='PoppularPeopleCard_card_info'>

                        <h1>{item.name}</h1>

                        <p>{`${item.known_for[0]?.title}, ${item.known_for[1]?.title}, and ${item.known_for[2]?.title}`}</p>

                    </div>


                </div>
            )
        })
      }
    </div>
  )
}
