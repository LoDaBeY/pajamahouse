import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@mui/material";

function Slider() {
  const isLargeScreen = useMediaQuery("(max-width:799px)");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {isLargeScreen ? (
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
          style={{ borderRadius: "15px", width: "100%", maxHeight: "100vh" }}
        >
          <SwiperSlide style={{}}>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/mobilslider/mobil2901-3.jpg"
              alt="PhotoSlider1"
              style={{}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/mobilslider/mobil2901-4.jpg"
              alt="PhotoSlider2"
              style={{}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/mobilslider/mobil2901-2-.jpg"
              alt="PhotoSlider3"
              style={{}}
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
          style={{ borderRadius: "15px", minWidth: "100%", height: "100vh" }}
        >
          <SwiperSlide style={{}}>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/slider/web1612-1+.jpg"
              alt="PhotoSlider1"
              style={{}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/slider/web1612-2+.jpg"
              alt="PhotoSlider2"
              style={{}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/slider/web1612-3+.jpg"
              alt="PhotoSlider3"
              style={{}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/slider/web1612-4+.jpg"
              alt="PhotoSlider4"
              style={{}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/slider/web1612-5+.jpg"
              alt="PhotoSlider4"
              style={{}}
            />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}

export default Slider;
