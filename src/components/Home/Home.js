import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import AllReviews from "../User/Review/AllReviews";
import Banner from "./Banner/Banner";
import HomeProduct from "./HomeProduct/HomeProduct";
import Policy from "./Policy/Policy";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  return (
    <div className="mt-3">
      <h1 className="mb-3 text-success">Welcome in P_Watch</h1>
      <Banner></Banner>
      <HomeProduct></HomeProduct>
      <Policy></Policy>
      <AllReviews></AllReviews>
      <WhyUs></WhyUs>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
