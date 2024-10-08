import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../../assests/images/testimonial-1-100x100.jpg'
import sliderImg2 from '../../assests/images/testimonial-2-100x100.jpg'
import sliderImg3 from '../../assests/images/testimonial-3-100x100.jpg'
import sliderImg4 from '../../assests/images/testimonial-4-100x100.jpg'

const Slider = () => {
    return (
        <>
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
                                            <p>"Working with Aqib Ali was an absolute pleasure. He has a deep understanding of the MERN stack and brought incredible expertise to our project. His ability to seamlessly integrate the front end with the back end and deliver a user-friendly, scalable web application was impressive. Communication was excellent throughout the process, and he always kept us updated. Highly recommended for anyone looking for a skilled and reliable developer!"</p>
                                        </div>
                                        <div className="slider-card-img">
                                            <img src={sliderImg1} alt='slider-img'></img>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slider-card mt-5">
                                        <div className="slider-card-text text-center text-white">
                                            <p>"We had a complex full-stack project that required robust functionality and clean, efficient code. Aqib Ali not only met but exceeded our expectations. His professionalism, technical skills, and attention to detail were outstanding. He took the time to understand our requirements and provided valuable suggestions that improved the overall outcome. We’re extremely satisfied with the final product and look forward to working with him again in the future."</p>
                                        </div>
                                        <div className="slider-card-img">
                                            <img src={sliderImg2} alt='slider-img'></img>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slider-card mt-5">
                                        <div className="slider-card-text text-center text-white">
                                            <p>"Aqib Ali is an exceptional full-stack developer with a strong command of the MERN stack. He was able to take our vision and turn it into a fully functioning web application that met all of our requirements. What impressed us most was his ability to troubleshoot complex issues and provide timely solutions. The entire process was smooth, and he was always responsive to feedback. We highly recommend his services! Thank you so much."</p>
                                        </div>
                                        <div className="slider-card-img">
                                            <img src={sliderImg3} alt='slider-img'></img>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slider-card mt-5">
                                        <div className="slider-card-text text-center text-white">
                                            <p>"Our project involved creating a scalable and feature-rich application, and Aqib Ali delivered on every front. His understanding of both front-end and back-end technologies facilitated a seamless development process. He was always proactive, offering creative solutions to potential challenges. We appreciated his clear communication and dedication to delivering a high-quality product on time. We couldn’t have asked for a better developer for our project!"</p>
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

export default Slider
