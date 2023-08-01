import React , {useState, useEffect} from 'react'
import { FcSearch } from 'react-icons/fc';
import { BsMoonFill } from 'react-icons/BS';
import { FaGithubAlt, FaUserCircle } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import axios from "axios";



function Navbar() {

 const [animes, setAnime] = useState("");


 const Search = () =>{
     setAnime("");
     
 }



  
  return (
    <div className='nav-container'>
       <div className="navbar">
            
                <div className="nav-items">
                <Link to="/"  style={{textDecoration: 'none', color: 'white'}}><h1>ANIMEASF</h1></Link>
                    <ul>
                      <Link to="/topairing" style={{textDecoration: 'none', color: 'white'}}><li>Trending</li></Link>
                      <Link to="/recentanimes" style={{textDecoration: 'none', color: 'white'}}><li>Recent</li></Link>
                    </ul>
                </div>

                <div className='search-container'> 
                    <input style={{ outline: 'none'}} type="text" placeholder='search anime' value={animes}
                    onChange={(event)=> setAnime(event.target.value)}/>
                    {animes.trim() !== "" ? 
                    ( <Link to = {`/search/${animes}`} onClick={Search} ><h2><FcSearch /></h2></Link>)
                     : (<h2><FcSearch /></h2>)}
                </div>

                <div className='socials'>
                    <h3><BsMoonFill/></h3> 
                    <h2><FaGithubAlt/></h2> 
                    <h2><FaUserCircle/></h2> 
                </div>

         </div>

         <div className='mobileSearchContainer'> 
                    <input style={{ outline: 'none'}} type="text" placeholder='search anime' value={animes}
                    onChange={(event)=> setAnime(event.target.value)}/>
                    {animes.trim() !== "" ? 
                    ( <Link to = {`/search/${animes}`} onClick={Search} ><h2><FcSearch /></h2></Link>)
                     : (<h2><FcSearch /></h2>)}
                </div>
    </div>
  )
}

export default Navbar;