import React from 'react'
import buyurduthemes from '../../assests/images/buyurduthemes.png'
import loyalty from '../../assests/images/loyalty.png'
import ilmiya from '../../assests/images/ilmiya.png'
import skinny from '../../assests/images/skinny.png'
import '../../assests/styles/Portfolio.css'
import { Link } from 'react-router-dom'


const Portfolio = () => {
    return (
        <>
            <div class="portfolio-banner-bg mt-5 pt-4">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="portfolio-banner text-center">
                                <div class="portfolio-heading">
                                    <h1 className='text-white'>Showcasing <span className='common-color'>My Work</span> & Passion</h1>
                                </div>
                                <div class="portfolio-para mt-3 text-white">
                                    <p>Welcome to my portfolio! Here, you’ll find a curated selection of projects that reflect<br></br> my dedication to Website Development. Each project represents not only my skills <br></br>and creativity but also my ability to adapt and grow with every challenge. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="projects-bg mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="project">
                                <div class="project-img">
                                    <img src={buyurduthemes} alt='urdu-themes'></img>
                                </div>
                                <div class="project-name text-white mt-4">
                                    <h2 className='common-color'>BuyUrduThemes</h2>
                                </div>
                                <div class="project-description text-white mt-4">
                                    <p>Buy Urdu Themes is a Wordpress Woocommerce Store. Buy Urdu Themes offers a wide selection of free and premium website themes and templates tailored for Urdu-speaking audiences.</p>
                                </div>
                                <div class="project-link text-center">
                                    <Link to='https://buyurduthemes.com/' target='_blank' className='text-white'>Visit Site</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="project">
                                <div class="project-img">
                                    <img src={loyalty} alt='loyalty'></img>
                                </div>
                                <div class="project-name text-white mt-4">
                                    <h2 className='common-color'>LoyaltyPromo</h2>
                                </div>
                                <div class="project-description text-white mt-4">
                                    <p>LoyaltyPromo is a Agency which provides Digital Marketing, Web Development, Mobile App Development, E-Commerce Solutions. And This is MERN Stack Project.This is my interesting project.</p>
                                </div>
                                <div class="project-link text-center">
                                    <Link to='https://www.loyaltypro.site/' target='_blank' className='text-white'>Visit Site</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="project">
                                <div class="project-img">
                                    <img src={ilmiya} alt='ilmiya'></img>
                                </div>
                                <div class="project-name text-white mt-4">
                                    <h2 className='common-color'>ilmiya</h2>
                                </div>
                                <div class="project-description text-white mt-4">
                                    <p>Ilmiya is an education platform designed to enhance learning for K-12 students. It offers an ntelligent infrastructure that adapts to individual learning, optimizing outcomes through advanced analytics.</p>
                                </div>
                                <div class="project-link text-center">
                                    <Link to='https://ilmiya.com/' target='_blank' className='text-white'>Visit Site</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-5">
                            <div class="project">
                                <div class="project-img">
                                    <img src={skinny} alt='skinny'></img>
                                </div>
                                <div class="project-name text-white mt-4">
                                    <h2 className='common-color'>Skinny Tax</h2>
                                </div>
                                <div class="project-description text-white mt-4">
                                    <p>SkinnyTax is a tax planning platform that bridges gap between top tax attorneys and mainstream tax software. It offers solutions for users to forecast their tax liabilities, implement personalized strategies, and maximize tax savings. </p>
                                </div>
                                <div class="project-link text-center">
                                    <Link to='https://skinny.tax/' target='_blank' className='text-white'>Visit Site</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
