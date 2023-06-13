import React from "react";
import "./News.css";
const News = (props) => {
  return (
    <div id="newsDiv">
      {props.image && (
        <img id="newsImage" src={props.image} alt="Hello" />
      )}
      <h5>{props.title}</h5>
        <a href={props.link} target="_blank" rel="noopener noreferrer">Detailed news</a>
    </div>

    // <img src={news[0].resolution[0]?.url} alt='Tesla'></img>
  );
};

export default News;
