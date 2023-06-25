import React from "react";
import Search from "./Search/Search";
import RadioButton from "./components/RadioButton";
import Navbar from "./components/Navbar";
// import "./Home.css"
import MyChart from "./MyChart";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend
} from "chart.js";
import { useGlobalContext } from "./context";
import CarouselNews from "./components/CarouselNews";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const Home = () => {
  const {fullname,showError} = useGlobalContext();
  return (
    <>
      <Navbar/>
      <Search />
      {showError ? <p>Not available. Search a valid name</p> : 
      <>
      <h1>{fullname}</h1>
      <RadioButton/>
      <MyChart/>
      <CarouselNews/>
      </>
      }
    
  
      
    </>
  );
};

export default Home;
