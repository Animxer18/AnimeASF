import React from 'react'

const  AnimeInfoPage = ({info}) => {

  if (!info) {
    return <div>Loading...</div>; // Or any other placeholder content when 'infos' is not available
  }


  return (
    <div key={info.id}>
        <div>{info.description}</div>
        <div>{info.title}</div>
        <img src={info.image} alt="" />
        <div>{info.status}</div>
        <h3>Episodes:</h3>
          <ul>
            {info.episodes.map((episode) => (
                 <div key={episode.id} >
                  <div>Episode: {episode.number} </div>
                  <a href={episode.url} target="_blank" rel="noopener noreferrer">
                    {episode.url}
                </a>
                 </div>
            ))}
          </ul>
    </div>
  )
}

export default AnimeInfoPage