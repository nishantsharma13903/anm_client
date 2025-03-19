import React, { useEffect } from 'react';
import Header from "./Header";
import Footer2 from './Footer2';
import About from './About';
const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Header /> 
     
           <About />
            <Footer2 /> 
        </>
    );
};

export default AboutPage;
