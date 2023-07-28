import React, { useEffect, useState } from 'react';
import AnimeCard from './AnimeCard'
import { BsArrowRight, BsArrowLeft} from 'react-icons/BS';
import axios from "axios";

const url = "https://api.consumet.org/anime/gogoanime/top-airing";


const TopAiring = () => {
  
  const  [animes, setAnimes] = useState(null); 
  const [count, setCount] = useState(1);

  const AddCount = () => {
     setCount( count => count + 1)
  }

  const MinusCount = () => {
    setCount((count)=> (count > 1 ? count-1 : count))
 }


      useEffect(() => {
        fetchData();
    }, [count]);


    const fetchData = async () => {
     try {
     const { data } = await axios.get(url, { params: { page: count } });
    setAnimes(data.results);
    console.log(data.results);
     } catch (err) {
     throw new Error(err.message);
     }
    
    };
    

    


    

    if (animes === null) {
      return <div>Loading...</div>; // Show loading message while data is being fetched
    }


    return (
      <div >
          <h1 style={{display: 'flex', justifyContent: 'center', fontSize: '40px'}}>TOP AIRING ANIMES</h1>
        {animes.length > 0 ? (
          <div className='container'>
            {animes.map((anime) => (
              
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <div>No anime data available.</div>
        )}  
        <div className='next-button'>
      <button onClick={MinusCount}><BsArrowLeft/>PREV PAGE</button>
      <button onClick={AddCount}>NEXT PAGE<BsArrowRight/></button>
      </div>
      </div>
       
    );
  };

export default TopAiring;
