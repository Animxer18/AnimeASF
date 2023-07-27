import React from 'react'

const  AnimeInfoPage = ({info : {description, title, image,status }}) => {
  return (
    <div>
        <div>{description}</div>
        <div>{title}</div>
        <img src={image} alt="" srcset="" />
        <div>{status}</div>
    </div>
  )
}

export default AnimeInfoPage