import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import AnimeCard from './AnimeCard';
import Navbar from './Navbar';
import Footer from './Footer';
import { useParams } from 'react-router-dom';


function Search() {
 
  const {quary} = useParams();
  
 const url = "https://api.consumet.org/anime/gogoanime/"+ quary+ "?page={number}";
 
 const [searchAnimes, setSearchAnimes] = useState(null);
 

 useEffect(()=>{
  fetchData();
 }, []);


const fetchData = async () => {
 try {
 const { data } = await axios.get(url, { params: { page: 2 } });
 setSearchAnimes(data.results);
 console.log(searchAnimes)
 } catch (err) {
 throw new Error(err.message);
 }
};

if (searchAnimes === null) {
    return <div style={{display: 'flex', justifyContent: 'center', marginTop: '10em'}}>Loading...</div>; // Show loading message while data is being fetched
  }


  return (
    <>
   <Navbar/>
    <div className='container'>
        {searchAnimes.map((anime)=>(
             <AnimeCard key={anime.id} anime={anime}/>
        ))}
    </div>
    <Footer/>
    </>
  )
}

export default Search