import React from 'react'
import { FcSearch } from 'react-icons/fc';
import { BsMoonFill } from 'react-icons/BS';
import { FaGithubAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='nav-container'>
       <div className="navbar">
            
                <div className="nav-items">
                <Link to="/"  style={{textDecoration: 'none', color: 'white'}}><h1>ANIMEASF</h1></Link>
                    <ul>
                     <Link to="/" style={{textDecoration: 'none', color: 'white'}}> <li>Home</li></Link>
                      <Link to="/topairing" style={{textDecoration: 'none', color: 'white'}}><li>Trending</li></Link>
                      <Link to="/recentanimes" style={{textDecoration: 'none', color: 'white'}}><li>Recent</li></Link>
                    </ul>
                </div>

                <div className='search-container'> 
                    <input style={{ outline: 'none'}} type="text" placeholder='search anime' />
                      <h2><FcSearch /></h2>
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

export default Navbar