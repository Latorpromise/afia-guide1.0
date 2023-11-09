import React from 'react';
import Header from "../components/Layout/Header";
import MyCarousel from "../components/Route/Carousel/MyCarousel";
import Categories from "../components/Route/Categories/Categories";
import RestaurantFood from "../components/Route/RestaurantFood/RestaurantFood.jsx";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer"

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <MyCarousel />
        <Categories />
        <RestaurantFood />
        <BestDeals />    
        <Events />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
    </div>
  )
}

export default HomePage