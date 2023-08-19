import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Banner from '../images/banner.jpeg'
import './Home.css'

const Home = () => {
  return (
  <Layout>
    <div className="home" style={{background:`url(${Banner})`}} >
      <div className="homeContainer">
        <h1>Food Website</h1>
        <p>Best Food In India </p>
        <Link to={'/menu'}>
          <button>
            ORDER NOW
          </button>
        </Link>
      </div>
    </div>
  </Layout>);
};

export default Home;
