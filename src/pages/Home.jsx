import React from "react";
import About from "../components/Home/About";
import Feature from "../components/Home/Feature";
import Landing from "../components/Home/Landing";
import ServicesFirst from "../components/Home/ServicesFirst";
import ServicesSecound from "../components/Home/ServicesSecound";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Feature />
      <ServicesFirst />
      <ServicesSecound />
    </Layout>
  );
};

export default Home;
