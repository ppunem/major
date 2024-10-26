import './Footer.css'
import {assets} from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
      <div className='footer-content-left'>
        <img src={assets.logo} alt='logo'/>
        <p>xyz</p>
        <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='facebook'/>
            <img src={assets.twitter_icon} alt='twitter'/>
            <img src={assets.linkedin_icon} alt='linkedin'/>
        </div>
      </div>
      <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
      </div>
      <div className='footer-content-right'>
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+1-123-456-780</li>
            <li>contactus@food.com</li>
        </ul>
      </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 Food.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
