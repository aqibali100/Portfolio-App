import React, { useState } from 'react'
import './Contact.css'
import contactImg from '../../assests//images//contact.webp'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import validationSchema from './Validation';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';


const Contact = () => {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            toast.success('Submitted Successfully!');
            resetForm();
        },
    });
    

    return (
        <>
            <div className='contact-bg'>
                <div className='container'>
                    <div className='row pt-5 pb-5'>
                        <div className='col-md-6 d-flex align-items-center'>
                            <div className='contact-text'>
                                <motion.div className='contact-heading' initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                    <h1 className='text-white pt-5'>Contact <span className='common-color'>Me</span></h1>
                                </motion.div>
                                <motion.div className='contact-para' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                                    <p className='text-white mb-0 pt-2'>I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <motion.div className='contact-img pt-5' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
                                <img src={contactImg} className='w-100' alt='Contact' />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='form-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='form-heading text-center'>
                            <h3 className='text-white'>Get <span className='common-color'>in</span> Touch</h3>
                            <p className='text-white'>I'd love to hear from you! Whether you have a question, feedback,<br></br> or just want to say hello</p>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-6 mt-5'>
                            <div className='contact-information'>
                                <div className='contact-heading'>
                                    <h3 className='text-white'>Contact Info<span className='common-color'>rmation</span></h3>
                                    <p className='text-white mb-5'>For any inquiries or support, please reach out<br></br> to me using the details below:</p>
                                </div>
                                <div className='row d-flex align-items-center'>
                                    <div className='col-md-6'>
                                        <div className='phone d-flex gap-3 mb-2'>
                                            <WhatsAppIcon className='text-success' />
                                            <p className='contact-number text-white'>+92 3278551518</p>
                                        </div>
                                        <div className='email-info d-flex gap-3 mb-2'>
                                            <EmailIcon className='text-primary' />
                                            <p className='contact-number text-white'>aqib28000@gmail.com</p>
                                        </div>
                                        <div className='location-info d-flex gap-3 mb-2 align-items-center'>
                                            <LocationOnIcon className='text-danger' />
                                            <p className='contact-number text-white m-0'>Chak No 100 RB,<br></br> Khurrianwala,Faisalabad</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <div className='contact-form'>
                                <div className='contact-heading'>
                                    <h3 className='text-white text-center'>Let's Con<span className='common-color'>nect</span></h3>
                                    <p className='text-white mb-5 text-center'>I'd love to hear from you! Please fill out the form below, and I will get back to you as soon as possible.</p>
                                </div>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='row d-flex justify-content-between form-inputs px-3'>
                                        <div className='col-md-6 mb-5 c-inputs'>
                                            <input
                                                name='name'
                                                type='text'
                                                className={`glow-input ${formik.errors.name && formik.touched.name ? 'is-invalid' : ''}`}
                                                placeholder='Enter Your Name'
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.name && formik.touched.name ? (
                                                <div className='invalid-feedback'>{formik.errors.name}</div>
                                            ) : null}
                                        </div>
                                        <div className='col-md-6 mb-5 c-inputs'>
                                            <input
                                                name='email'
                                                type='email'
                                                className={`glow-input ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`}
                                                placeholder='Enter Your Email'
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.email && formik.touched.email ? (
                                                <div className='invalid-feedback'>{formik.errors.email}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='row mb-5 form-inputs px-3'>
                                        <div className='col-md-12 c-inputs'>
                                            <input
                                                name='phone'
                                                type='number'
                                                className={`glow-input ${formik.errors.phone && formik.touched.phone ? 'is-invalid' : ''}`}
                                                placeholder='Enter Your Phone'
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.phone && formik.touched.phone ? (
                                                <div className='invalid-feedback'>{formik.errors.phone}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='row px-3 form-inputs'>
                                        <div className='col-md-12 mb-5 c-inputs'>
                                            <textarea
                                                name='message'
                                                typeof='text'
                                                rows={7}
                                                className={`glow-input ${formik.errors.message && formik.touched.message ? 'is-invalid' : ''}`}
                                                placeholder='Enter Your Message'
                                                value={formik.values.message}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.message && formik.touched.message ? (
                                                <div className='invalid-feedback'>{formik.errors.message}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='submit-btn d-flex justify-content-end'>
                                        <Button className='glow-input' variant="outlined" type="">Submit</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact