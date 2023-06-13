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
  const {fullname} = useGlobalContext();
  return (
    <>
      <Navbar/>
      <Search />
      <h1>{fullname}</h1>
      <RadioButton/>
      <MyChart/>
      <CarouselNews/>
      {/* <MyChart 
        details="totalCurrentLiabilities"
      /> */}
      {/* <div className="Graph">
        <Line data={data} options={options}></Line>
      </div> */}
    </>
  );
};

export default Home;
