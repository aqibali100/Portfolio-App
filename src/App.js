import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/Home';
import Footer from './components/footer/Footer';
import Contact from './screens/contact/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './screens/about/About';
import ScrollToTop from './components/ScrollToTop';
import Portfolio from './screens/portfolio/Portfolio';
import Technology from './screens/technologies/Technology';


function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/technologies' element={<Technology />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
