import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";

const url = "https://api.consumet.org/anime/gogoanime/top-airing";


function HeroBanner() {
   
   useEffect(()=>{
      fetchData();
   })

const fetchData = async () => {
 try {
 const { data } = await axios.get(url, { params: { page: 1 } });
 console.log(data)

 } catch (err) {
 throw new Error(err.message);
 }
};





  return (
   <>
   </>
  )
}

export default HeroBanner;