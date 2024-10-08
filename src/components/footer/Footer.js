import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
      <div className='footer-bg pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='footer-logo'>
                <Link to='/' className='logo'>Code<span className='common-color'>With</span>Aqib</Link>
                <p className='footer-para'>
                  With a strong foundation in both front-end and back-end development, I bring ideas to life through clean, efficient code and a keen eye for design.
                </p>
              </div>
            </div>
            <div className='col-md-4 mb-4 text-center'>
              <h4 className='footer-heading'>Links</h4>
              <nav className='footer-links'>
                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact' >Contact Me</Link>
                <Link to='/technologies' >Technologies</Link>
              </nav>
            </div>
            <div className='col-md-4 mb-4'>
              <h4 className='footer-heading'>Contact</h4>
              <div className='contact-main'>
                <div className='contact-info'>
                  <WhatsAppIcon />
                  <p className='contact-number'>+92 3278551518</p>
                </div>
                <div className='email-info'>
                  <EmailIcon />
                  <p className='contact-number'>aqib28000@gmail.com</p>
                </div>
                <div className='location-info'>
                  <LocationOnIcon />
                  <p className='contact-number'>Chak No 100 RB, Khurrianwala,Faisalabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='row pt-3 pb-3'>
            <div className='col-md-6 text-white'>
              <p className='m-0'>&copy; {new Date().getFullYear()} Code<span className='common-color'>With</span>Aqib, All rights reserved.</p>
            </div>
            <div className='col-md-6 d-flex gap-5 justify-content-center align-items-center'>
              <div className='linkedin-icon glow-icon common-icon-style'>
                <Link to='https://www.linkedin.com/in/aqib-ali-735633290/' target='_blank'><LinkedInIcon /></Link>
              </div>
              {/* <div className='youtube-icon glow-icon common-icon-style'>
                <Link to='https://www.youtube.com/channel/UCEr3nhRRap-5Fkvx1mzpPlw' target='_blank'><YouTubeIcon /></Link>
              </div> */}
              <div className='github-icon glow-icon common-icon-style'>
                <Link to='https://github.com/aqibali100' target='_blank'><GitHubIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer