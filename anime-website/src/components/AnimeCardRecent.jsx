import React from 'react'

const AnimeCardRecent = ({anime : {title, image, episodeNumber} }) => {
  return (
   <div className='card-container'>
         <img width={150} src={image} alt="" />
        <div className='title'>
            {title} 
        </div>
        <div style={{fontSize: '12px', marginLeft: '-6em', color: 'grey', marginTop: '1em'}}>Episode   {episodeNumber}</div>
    </div>
  );
}

export default AnimeCardRecent;