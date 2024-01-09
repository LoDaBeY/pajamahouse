import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


function Slider() {
  return (
    <div style={{ width: "99%", display: "flex", justifyContent: "center", alignItems: "center"    , margin: 6,         
  }}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay ]}
        // autoplay={true}
        className="mySwiper"
        style={{  borderRadius: "10px",  minWidth: "100%", minHeight: "100%" }}
      >
        <SwiperSlide>
          <img
            src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/slider/web1612-1+.jpg"
            alt="PhotoSlider1"
            style={{
              maxHeight: "100%",
              aspectRatio: 16/9
            }}          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/slider/web1612-2+.jpg"
            alt="PhotoSlider2"

          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/slider/web1612-3+.jpg"
            alt="PhotoSlider3"

          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/slider/web1612-4+.jpg"
            alt="PhotoSlider4"

          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,quality=70/Data/EditorFiles/pijamaevi/slider/web1612-5+.jpg"
            alt="PhotoSlider4"

          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
