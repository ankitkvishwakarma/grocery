import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

import Header from './component/Header';
import HeroBanner from './component/HeroBanner';
import Categories from './component/categories';
import FeaturedProducts from './component/FeaturedProducts';
import BannerSection from './component/BannerSection';
import PopularProducts from './component/PopularProducts';
import StateSection from './component/StatsSection';
import Newslatter from './component/Newsletter';
import Footer from './component/Footer';
import Login from './component/Account/Login';
import ForgetPassword from './component/Account/ForgetPassword';
import ShopPage from './component/ShopPage';
import Signup from './component/Account/Signup';
import CartPage from './component/CartPage';
import Checkout from './component/cart/Checkout';
import Livesale from "./component/HeroSection";
import FaqAccordion from "./component/FaqAccordion";
import Wishlist from "./component/Wishlist";
import PageNotfound from "./component/PageNotfound";
import ProductGrid from "./component/ProductGrid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<>
          <HeroBanner />
          <Categories />
          <Livesale />
          <FeaturedProducts />
          <BannerSection />
          <PopularProducts />
          <StateSection />
          <Newslatter />
          {/* <ProductGrid/> */}



        </>
        } />
        <Route path="/shop" element={<ShopPage />} />
        <Route path='/userlogin' element={<Login />} />
        <Route path='/SignUp' element={<Signup />} />
        <Route path='/ProductGrid' element={<ProductGrid />} />
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
        <Route path='/Cart' element={<CartPage />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Blogs' element={<FaqAccordion />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path="*" element={<PageNotfound />} />
        <Route path="/" />


      </Routes>

      <Footer />
    </>

  );
}

export default App;
