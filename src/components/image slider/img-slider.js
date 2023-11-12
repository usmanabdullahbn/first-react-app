import React, { useEffect, useState } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import img_1 from "./images/image 1.jpg";
import img_2 from "./images/image 2.jpg";
import img_3 from "./images/image 3.jpg";
import img_4 from "./images/image 4.jpg";

const ImageSlider = () => {
  // All State Handlimng are here!
  const [sliderImages, setSliderImages] = useState([
    img_1,
    img_2,
    img_3,
    img_4,
  ]);
  const [initialPoint, setInitialPoint] = useState(0);

  const sliderHandler = () => {
    let init = initialPoint;
    init = init + 1;
    setInitialPoint(init);

    if (init == sliderImages.length) init = 0;
    setInitialPoint(init);
  };
  useEffect(() => {
    setTimeout(() => {
      sliderHandler();
    }, 3000);
  }, [sliderHandler]);

  return (
    <>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={sliderImages[initialPoint]}
        alt="..."
      ></MDBCarouselItem>
    </>
  );
};

export default ImageSlider;
