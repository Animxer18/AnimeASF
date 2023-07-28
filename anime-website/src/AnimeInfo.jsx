import {React, useEffect, useState} from 'react'
import axios from "axios";
import AnimeInfoPage from './AnimeInfoPage';

const url = "https://api.consumet.org/anime/gogoanime/info/spy-x-family";

function AnimeInfo() {
  
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const { data } = await axios.get(url);
        setInfo(data)     
        console.log(data)
    } catch (err) {
        throw new Error(err.message);
    }
};

 if(info === null){
   return(<div>Loading.........</div>)
 }

return (
  <div>
    {info ? <AnimeInfoPage infos={info} /> : <p>ERROR</p>}
  </div>
)
}

export default AnimeInfo;