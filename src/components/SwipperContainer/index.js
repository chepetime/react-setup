import React from "react";
import Swiper from "react-id-swiper";

function SwipperContainer(props) {
  const swiperParams = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    spaceBetween: 30,
  };

  return (
    <div className="SwipperContainer">
      <Swiper {...swiperParams}>
        {props.children.map((slide, index) => (
          <div
            className="SwipperContainer__Slide"
            key={`swipper-slide-${index}`}
          >
            {slide}
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default SwipperContainer;
