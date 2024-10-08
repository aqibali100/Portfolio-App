import React from 'react'
import html from '../../assests/images/html.jpg'
import css from '../../assests/images/css.png'
import javascript from '../../assests/images/javascript.png'
import bootstrap from '../../assests/images/bootstrap-icons.png'
import sass from '../../assests/images/sass.jpg'
import react from '../../assests/images/react.png'
import nextjs from '../../assests/images/next.png'
import wordpress from '../../assests/images/wordpres.png'
import shopify from '../../assests/images/shopify.jpeg'
import express from '../../assests/images/expres.png'
import nodejs from '../../assests/images/nodejs.webp'
import strapi from '../../assests/images/Strapi.png'
import php from '../../assests/images/Php.png'
import '../../assests/styles/Technology.css'
import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../../assests/images/testimonial-1-100x100.jpg'
import sliderImg2 from '../../assests/images/testimonial-2-100x100.jpg'
import sliderImg3 from '../../assests/images/testimonial-3-100x100.jpg'
import sliderImg4 from '../../assests/images/testimonial-4-100x100.jpg'


const Technology = () => {
    return (
        <>
            <div class="technology-banner-bg mt-5 pt-4">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="technology-banner text-center">
                                <div class="technology-heading">
                                    <h1 className='text-white'>Technologies I Use in <span className='common-color'>Web Development</span></h1>
                                </div>
                                <div class="technology-para mt-3 text-white">
                                    <p>In my web development journey, I leverage a wide range of modern technologies and tools to create<br></br> fast, scalable, and user-friendly applications. These technologies allow me to build everything from <br></br>responsive front-end interfaces to robust back-end architectures.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="technology-bg mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={html} alt='html'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>HTML5</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={css} alt='css'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>CSS</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={javascript} alt='javascript'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>JavaScript</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={bootstrap} alt='bootstrap'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>BootStrap 5</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={sass} alt='sass'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>SASS</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={react} alt='react'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>React JS</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={nextjs} alt='nextjs'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>Next JS</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={wordpress} alt='wordpress'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>Wordpress</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={shopify} alt='shopify'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>Shopify</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={express} alt='express'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>Express JS</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={nodejs} alt='nodejs'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>Node JS</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={strapi} alt='strapi'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>Strapi</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="technology">
                                <div class="technology-img">
                                    <img src={php} alt='php'></img>
                                </div>
                                <div class="technology-name text-white mt-4 text-center">
                                    <h2 className='common-color'>Php</h2>
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
        </>
    )
}

export default Technology
