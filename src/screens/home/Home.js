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
import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../../assests/images/testimonial-1-100x100.jpg'
import sliderImg2 from '../../assests/images/testimonial-2-100x100.jpg'
import sliderImg3 from '../../assests/images/testimonial-3-100x100.jpg'
import sliderImg4 from '../../assests/images/testimonial-4-100x100.jpg'
import logoImg1 from '../../assests/images/php.png'
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
                <p>We Utilize State of The Art Technologies To Develop Your Website <br></br>
                  And Keep your website running smoothly with our ongoing maintenance and support services.
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
              <p className='text-white'>We'd love to hear from you! Whether you have a question, feedback,<br></br> or just want to say hello, our team is here to help.</p>
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
      <div class="logo-slider-bg mt-5 mb-5">
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="logo-slider">
                <div className="slider-track">
                  <div className="slide-1"><img src={logoImg1} alt="Logo 1" /></div>
                  <div className="slide-1"><img src={sliderImg1} alt="Logo 2" /></div>
                  <div className="slide-1"><img src={sliderImg1} alt="Logo 3" /></div>
                  <div className="slide-1"><img src={sliderImg1} alt="Logo 4" /></div>
                  <div className="slide-1"><img src={sliderImg1} alt="Logo 5" /></div>
                  <div className="slide-1"><img src={sliderImg1} alt="Logo 6" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-bg mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="review-text">
                <h3 className='text-center text-white'>What <span className="common-color">My Clients</span> Say</h3>
                <p className="text-center text-light mt-2">
                  "My clients love the personalized attention and support they receive.<br></br> Here’s a glimpse of their experiences!"
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Carousel className="custom-carousel">
                <Carousel.Item>
                  <div className="slider-card mt-5">
                    <div className="slider-card-text text-center text-white">
                      <p>"Working with Aqib Ali was an absolute pleasure. They have a deep understanding of the MERN stack and brought incredible expertise to our project. Their ability to seamlessly integrate the front end with the back end and deliver a user-friendly, scalable web application was impressive. Communication was excellent throughout the process, and they always made sure to keep us updated. Highly recommended for anyone looking for a skilled and reliable developer!"</p>
                    </div>
                    <div className="slider-card-img">
                      <img src={sliderImg1} alt='slider-img'></img>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="slider-card mt-5">
                    <div className="slider-card-text text-center text-white">
                      <p>"We had a complex full-stack project that required robust functionality and clean, efficient code. Aqib Ali not only met but exceeded our expectations. Their professionalism, technical skills, and attention to detail were top-notch. They took the time to understand our requirements and offered valuable suggestions that improved the overall outcome. We’re extremely satisfied with the final product and look forward to working with them again in the future."</p>
                    </div>
                    <div className="slider-card-img">
                      <img src={sliderImg2} alt='slider-img'></img>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="slider-card mt-5">
                    <div className="slider-card-text text-center text-white">
                      <p>"Aqib Ali is an exceptional full-stack developer with a strong command of the MERN stack. They were able to take our vision and turn it into a fully functioning web application that met all of our requirements. What impressed us most was their ability to troubleshoot complex issues and provide timely solutions. The entire process was smooth, and they were always responsive to feedback. We highly recommend their services! Thanks a lot"</p>
                    </div>
                    <div className="slider-card-img">
                      <img src={sliderImg3} alt='slider-img'></img>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="slider-card mt-5">
                    <div className="slider-card-text text-center text-white">
                      <p>"Our project involved creating a scalable and feature-rich application, and Aqib Ali delivered on every front. Their understanding of both front-end and back-end technologies allowed for a seamless development process. They were always proactive, offering creative solutions to potential challenges. We appreciated their clear communication and dedication to delivering a high-quality product on time. We couldn’t have asked for a better developer for our project!"</p>
                    </div>
                    <div className="slider-card-img">
                      <img src={sliderImg4} alt='slider-img'></img>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
