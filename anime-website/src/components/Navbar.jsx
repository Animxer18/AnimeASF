import React , {useState, useEffect} from 'react'
import { FcSearch } from 'react-icons/fc';
import { BsMoonFill } from 'react-icons/BS';
import { FaGithubAlt, FaUserCircle } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import axios from "axios";



function Navbar() {

 
  
  
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
                    <input style={{ outline: 'none'}} type="text" placeholder='search anime'/>
                     <Link to = {`/search/${quary}`}><h2><FcSearch /></h2></Link>
                </div>

                <div className='socials'>
                    <h3><BsMoonFill/></h3> 
                    <h2><FaGithubAlt/></h2> 
                    <h2><FaUserCircle/></h2> 
                </div>

         </div>
    </div>
  )
}

export default Navbar;