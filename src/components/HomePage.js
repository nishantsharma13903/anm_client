import React, { useEffect } from 'react';
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturedThemes from "./FeaturedThemes";
import FeaturedThemes_2 from "./FeaturedThemes_2";
import PopularCategories from "./PopularCategories";
import FeaturedDesigns from "./FeaturedDesigns";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import ProductDetail from "./ProductDetail";
import Footer2 from "./Footer2"; // Updated Footer
import FooterTop from './FooterTop';

const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Header /> 
            <HeroSection />
            <FeaturedThemes />
            <FeaturedThemes_2 />
            <PopularCategories />
            <FeaturedDesigns />
            <Testimonials />
            <CallToAction />
            <FooterTop />
            <Footer2 /> 
        </>
    );
};

export default HomePage;
