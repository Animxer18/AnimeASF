import React from 'react'

const  AnimeInfoPage = ({infos}) => {


  return (
    <div key={infos.id}>
        <div>{infos.description}</div>
        <div>{infos.title}</div>
        <img src={infos.image} alt="" />
        <div>{infos.status}</div>
        <h3>Episodes:</h3>
          <ul>
            {infos.episodes.map((episode) => (
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