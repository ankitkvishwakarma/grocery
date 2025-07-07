import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      <Routes>
        <Route path="/" element={<>
          <HeroBanner />
          <Categories />
          <FeaturedProducts />
          <BannerSection />
          <PopularProducts />
          <StateSection />
          <Newslatter />

        </>
        } />
        <Route path="/shop" element={<ShopPage />} />
        <Route path='/userlogin' element={<Login/>}/>
        <Route path='/SignUp' element={<Signup/>}/>
        <Route path='/ShopPage' element={<ShopPage/>}/>
        <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        <Route path='/Cart' element={<CartPage/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>

        
      </Routes>

      <Footer />
      </>

  );
}

export default App;
