import {React, useEffect, useState} from 'react'
import axios from "axios";
import AnimeInfoPage from './AnimeInfoPage';

const url = "https://api.consumet.org/anime/gogoanime/info/spy-x-family";

function AnimeInfo() {
  
 const [infos, setInfos] = useState(null);

useEffect(()=>{
     fetchData();
}, [])

const fetchData = async () => {
 const response = await fetch(url);
 const data = await response.json();
 setInfos(data);
};




if(infos === null){
    return(<div>Loading.......</div>)
}


  return (
    <div>
       {infos.length > 0 ? (
           <div>
             {infos.map((info)=>(
                  <AnimeInfoPage info={info}/>
             ))}  
           </div>
       ): (<div>
            No anime availabe.
         </div>)}
    </div>
  )
}

export default AnimeInfo;