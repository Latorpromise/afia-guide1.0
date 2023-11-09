import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../../styles/styles";
import Image1 from "./images/image1.jpg";
import Image2 from "./images/image2.jpg";
import Image3 from "./images/image3.jpg";
import Image4 from "./images/image4.jpg";
import { Link } from "react-router-dom";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
];

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`mt-0 relative max-h-[80vh] min-h-[70vh] 800px:min-h-[80vh] w-full 800px:p-8 p-1 bg-no-repeat ${styles.noramlFlex}`}
    style={{
        backgroundImage:
        "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)", display: "block", marginTop: "0",}}
    >
    <div className={`${styles.section}  bg-white p-2 rounded-lg mb-6 800px:mt-0 mt-11`}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        onChange={onChange}
        selectedItem={currentSlide}
        swipeable={true}
        emulateTouch={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        maxHeight={"300px"}
       
      >
        {images.map((image, index) => (
          <div key={index} className="slide" style={{ maxHeight: "300px" }}>
            <img
              src={image}
              class="max-w-full h-auto md:w-1/2 lg:object-contain object-center"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
    <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[20px] leading-[1] 800px:text-[35px] text-[#3d3a3a] font-[600] capitalize`}
        >
        Your one-stop shop for everything online.
        </h1>
        <p className="pt-4 text-[16px] 400px:text-[14px] font-[Poppins] font-[400] text-[#000000ba]">
        Whether you are looking for something new or used, you can find it here at the best prices. Browse through thousands of items from sellers near you, or sell your own stuff and make some cash. It’s easy, fast, and fun to buy and sell on our platform. Join today and discover the benefits of being a member of our community.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>      
</div>
  );
};

export default MyCarousel;
