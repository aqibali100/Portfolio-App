import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import aboutImg from '../../assests/images/about.png';
import './About.css';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsIcon from '@mui/icons-material/Settings';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessibilityIcon from '@mui/icons-material/Accessibility';


const About = () => {
    return (
        <>
            <div className='banner-bg'>
                <div className='container'>
                    <div className='row pt-5'>
                        <div className='col-md-6 d-flex align-items-center mb-5'>
                            <div className='banner-left'>
                                <div className="banner-heading text-white">
                                    <h1>
                                        Hey, I'm <span className='common-color'>Aqib</span>
                                    </h1>
                                </div>
                                <div className='text-animation text-white d-flex gap-2 align-items-baseline'>
                                    <p className='first-span'>I am a </p> <span className='common-color span-size'></span>
                                </div>
                                <div className='banner-para text-white'>
                                    <p>Hi, I'm a passionate and dedicated Web Developer specializing in creating modern, responsive, and user-friendly websites.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center mb-5'>
                            <motion.img src={aboutImg} className='w-75' alt='BannerImg' animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
                        </div>
                    </div>


                    <div className='row mt-5'>
                        <div className='form-heading text-center'>
                            <h3 className='text-white'>Why <span className='common-color'>Choose</span>Me?</h3>
                            <p className='text-white'>Discover the key reasons why I am the right fit for your next project.</p>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-4 mb-5'>
                            <div className='why-choose-me-item'>
                                <div className='why-choose-me-icon'>
                                    <ComputerIcon className='common-color icon-size' />
                                </div>
                                <div className='why-choose-me-info'>
                                    <h4 className='text-white'>Expertise Across the Full Stack</h4>
                                    <p>With in-depth knowledge of the MERN stack (MongoDB, Express.js, React, Node.js), I can handle both front-end and back-end development. From crafting intuitive user interfaces to building robust server-side logic.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='why-choose-me-item'>
                                <div className='why-choose-me-icon'>
                                    <CodeIcon className='common-color icon-size' />
                                </div>
                                <div className='why-choose-me-info'>
                                    <h4 className='text-white'>Passion for Clean Code</h4>
                                    <p>I believe in writing clean, maintainable, and well-documented code. This not only ensures that the code is easy to understand and extend but also makes future updates and maintenance smooth and cost-effective.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='why-choose-me-item'>
                                <div className='why-choose-me-icon'>
                                    <SettingsIcon className='common-color icon-size' />
                                </div>
                                <div className='why-choose-me-info'>
                                    <h4 className='text-white'>Tailored Solutions</h4>
                                    <p>No two projects are the same. I take the time to understand your unique business requirements and goals, and then tailor my approach to deliver customized web solutions that truly resonate with your audience and drive results.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='why-choose-me-item'>
                                <div className='why-choose-me-icon'>
                                    <LightbulbIcon className='common-color icon-size' />
                                </div>
                                <div className='why-choose-me-info'>
                                    <h4 className='text-white'> Problem-Solving Mindset</h4>
                                    <p>I thrive on solving complex problems and turning challenges into opportunities. Whether you're facing technical roadblocks or looking to innovate, I bring a solution-oriented mindset to the table, ensuring that your project stays on track and achieves its objectives.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='why-choose-me-item'>
                                <div className='why-choose-me-icon'>
                                    <TrendingUpIcon className='common-color icon-size' />
                                </div>
                                <div className='why-choose-me-info'>
                                    <h4 className='text-white'>Continuous Learning and Adaptation</h4>
                                    <p>The tech world evolves rapidly, and I make it a priority to stay on top of the latest industry trends, tools, and best practices. By continuously learning and adapting, I ensure that your project leverages cutting-edge technologies.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='why-choose-me-item'>
                                <div className='why-choose-me-icon'>
                                    <AccessibilityIcon className='common-color icon-size' />
                                </div>
                                <div className='why-choose-me-info'>
                                    <h4 className='text-white'>User-Centric Approach</h4>
                                    <p>Your users are at the heart of everything I build. By focusing on creating intuitive, user-friendly designs and experiences, I ensure that your web application not only looks great but is also easy to navigate. My code quality directly translates into long-term value for your project.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About