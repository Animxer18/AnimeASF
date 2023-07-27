import React from 'react'

const AnimeCard = ({anime : {title, image} }) => {
  return (
   <div className='card-container'>
         <img width={150} src={image} alt="" />
        <div className='title'>
            {title}
           
        </div>
    </div>
  );
}

export default AnimeCard;