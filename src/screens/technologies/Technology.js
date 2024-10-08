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
import Slider from '../../components/slider/Slider'


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
            <Slider />
        </>
    )
}

export default Technology
