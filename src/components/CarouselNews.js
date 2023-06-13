import React from "react";
import Carousel from "react-multi-carousel";
import "./CarouselNews.css";
import News from "./News";
import { useGlobalContext } from "../context";
import "react-multi-carousel/lib/styles.css";
import Loading from "./Loading";
const CarouselNews = () => {
  const { news } = useGlobalContext();
  //   if (news.length === 0) {
  //     return <Loading />;
  //   }
  if (!news || news.length === 0) {
    return <Loading />;
  }
  const enterType = (data) => {
    const { thumbnail } = data;
    const imageUrl = thumbnail?.resolutions[0]?.url;
    return (
      <News
        key={data.id}
        image={imageUrl}
        title={data.title}
        link={data.link}
      />
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="TypeDiv">
      <h2 id="Typeh1">News</h2>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={1400}
        infinite={true}
        responsive={responsive}
        arrows={false}
      >
        {news.map(enterType)}
      </Carousel>
    </div>
  );
};

export default CarouselNews;
