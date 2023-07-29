import React, { useEffect, useState } from 'react';
import AnimeCard from './AnimeCard'
import axios from "axios";
import { Link } from 'react-router-dom';
const url = "https://api.consumet.org/anime/gogoanime/top-airing";


const HeroTopAiring = () => {
  
  const  [animes, setAnimes] = useState(null); 


      useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
     try {
     const { data } = await axios.get(url, { params: { page: 1 } });
     const five = data.results.slice(0, 5);
    setAnimes(five);
    console.log(data);
     } catch (err) {
     throw new Error(err.message);
     }
    
    };
    
    if (animes === null) {
      return <div style={{display: 'flex', justifyContent: 'center', marginTop: '10em'}}>Loading...</div>; // Show loading message while data is being fetched
    }


    return (
      <div >
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '27em'}}>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>    
               <h1 style={{ fontSize: '40px'}}>TOP AIRING ANIMES</h1>
               <p style={{display: 'flex', fontSize: '13px', justifyContent: 'start',
                alignItems: 'center', marginTop: '-2em', marginLeft: '-4em' , color: 'grey'}}>
                Current most popular or highly-rated anime series!</p>
            </div>
            
        <Link to="/topairing" style={{textDecoration: 'none'}}> <button style={{display: 'flex', justifyContent: 'center', marginTop: '1em', paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px',
           paddingRight: '20px', backgroundColor: '#2e2e30', border: 'none', color: 'white', borderRadius: '5px', fontFamily: 'Poppins', 
           textAlign: 'center', cursor: 'pointer'
         }}>See More</button></Link> 
          </div>
        {animes.length > 0 ? (
          <div style={{display: 'flex', justifyContent: 'center', gap: '2.6em'}}>
            {animes.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <div>No anime data available.</div>
        )}  
      </div>
       
    );
  };

export default HeroTopAiring;
