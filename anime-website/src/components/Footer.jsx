import React from 'react'
import { AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';
function Footer() {
  return (
    <div className='footer-container'>
       <div className="footer">
            
                <div className="footer-items">
                  <h1>ANIMEASF</h1>
                </div>
               
              <div className='us'>
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Credits</p>
              </div>
               
                <div className='footer-socials'>
                     <h1><AiFillLinkedin/></h1>
                     <h1><AiFillFacebook/></h1>
                </div>

         </div>
         <p style={{fontSize: '13px', textAlign: 'center'}}>created by Andre Jarl 2023</p>
         <div className='footer-disclaimer'> 
                    <p>Disclaimer: The content presented on this website is intended for educational purposes only. All rights and copyrights to the original owners and creators of the materials are duly acknowledged and respected. This website does not claim ownership or endorse any unauthorized use of copyrighted content.</p>
        </div>
    </div>
  )
}

export default Footer