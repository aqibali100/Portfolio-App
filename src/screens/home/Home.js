import React from 'react';
import { motion } from 'framer-motion';
import bannerImg from '../../assests/images/banner.png';
import './Home.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LinkIcon from '@mui/icons-material/Link';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Slider from '../../components/slider/Slider';
const Home = () => {
  return (
    <div className='banner-bg'>
      <div className='container'>
        <div className='row pt-5'>
          <div className='col-md-6 d-flex align-items-center mb-5'>
            <div className='banner-left'>
              <div className="banner-heading text-white">
                <h1>
                  WEB DESIGN AND <span className='common-color'>WEB DEVELOPMENT</span>
                </h1>
              </div>
              <div className='banner-para text-white'>
                <p>I Utilize State of The Art Technologies To Develop Your Website <br></br>
                  And Keep your website running smoothly with my ongoing maintenance and support services.
                </p>
              </div>
              <div className='contact-btn mt-5'>
                <Link to='/contact' >
                  <Button className='glow-input' variant="outlined">Contact Me</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center mb-5'>
            <motion.img src={bannerImg} className='w-75' alt='BannerImg' animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
        </div>
      </div>

      <div class="services-bg">
        <div class="container">
          <div className='row mt-5'>
            <div className='form-heading text-center'>
              <h3 className='text-white'>My <span className='common-color'>Services</span></h3>
              <p className='text-white'>
                I offer a range of web development services tailored to meet your needs.
              </p>
            </div>

          </div>

          <div className='row mt-5'>
            <div className='col-md-4 mb-5'>
              <div className='service-card'>
                <div className='service-icon'>
                  <CodeIcon className='common-color icon-size' />
                </div>
                <div className='service-info'>
                  <h4 className='text-white'>Custom Web Application</h4>
                  <p>Transform your ideas into reality with tailored web applications. I create scalable, high-performance solutions using the MERN stack, ensuring your web app is both functional and user-friendly.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-5'>
              <div className='service-card'>
                <div className='service-icon'>
                  <ShoppingCartIcon className='common-color icon-size' />
                </div>
                <div className='service-info'>
                  <h4 className='text-white'>E-Commerce Solutions</h4>
                  <p>Boost your online business with a e-commerce platform. I build custom solutions with seamless shopping experiences, secure payment integrations, and efficient management.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-5'>
              <div className='service-card'>
                <div className='service-icon'>
                  <LinkIcon className='common-color icon-size' />
                </div>
                <div className='service-info'>
                  <h4 className='text-white'>API Development & Integration</h4>
                  <p>Expand your app's capabilities with well-designed APIs. I offer custom API development and third-party integrations to enhance functionality and streamline data exchange</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-5'>
              <div className='service-card'>
                <div className='service-icon'>
                  <DesktopMacIcon className='common-color icon-size' />
                </div>
                <div className='service-info'>
                  <h4 className='text-white'>Front-End Development</h4>
                  <p>Deliver engaging and responsive user interfaces. I design and build modern front-ends with React, ensuring a smooth and interactive experience across all devices.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-5'>
              <div className='service-card'>
                <div className='service-icon'>
                  <StorageIcon className='common-color icon-size' />
                </div>
                <div className='service-info'>
                  <h4 className='text-white'>Back-End Development</h4>
                  <p>Develop reliable and scalable back-end systems. I handle server-side logic, API creation, and database management with Node.js and Express, providing a solid foundation for your applications.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-5'>
              <div className='service-card'>
                <div className='service-icon'>
                  <DeveloperModeIcon className='common-color icon-size' />
                </div>
                <div className='service-info'>
                  <h4 className='text-white'>Full-Stack Development</h4>
                  <p>Get a complete web solution with end-to-end development. I manage both front-end and back-end processes, delivering integrated and seamless experiences from concept to deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Slider />
    </div>
  );
}

export default Home;
