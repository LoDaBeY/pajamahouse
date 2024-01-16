import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import Typography from "@mui/material/Typography";
import { IconButton, Stack, Tooltip, useTheme } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShoppingCart } from "@mui/icons-material";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../FirebaseConfig/config";

const MiniSliderItems = [
  {
    Title: "Kiremit Çam Desenli Önden Düğmeli Peluş Polar Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/kiremit-cam-desenli-onden-dugmeli-pelus-polar-pijama-takimi-onden-dugmeli-pijama-takimi-pijamaevi-20778-34-K.jpg",
    Fırsat: " Fırsat %35 İndirim ",
    ActualPrice: "304,99",
    FakePrice: "499,99",
  },
  {
    Title: "Mavi Çizgili Uzun Kollu V Yaka Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/mavi-cizgili-uzun-kollu-v-yaka-pijama-takimi-mavi-cizgili-pijama-takimi-pijamaevi-20767-34-K.jpg",
    Fırsat: " Fırsat %20 İndirim ",
    ActualPrice: "219,99",
    FakePrice: "274,99",
  },
  {
    Title: "Mor Puantiyeli Kısa Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/mor-puantiyeli-kisa-kollu-kapuconlu-pijama-takimi-mor-puantiyeli-pijama-takimi-pijamaevi-20766-34-K.jpg",
    Fırsat: " Fırsat %25 İndirim ",
    ActualPrice: "189,99",
    FakePrice: "254,99",
  },
  {
    Title: "Gri Pelerin Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/gri-pelerin-desenli-uzun-kollu-kapuconlu-pijama-takimi-gri-pijama-takimi-pijamaevi-20765-34-K.jpg",
    Fırsat: " Fırsat %30 İndirim ",
    ActualPrice: "259,99",
    FakePrice: "374,99",
  },
  {
    Title: "Beyaz Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/beyaz-desenli-uzun-kollu-kapuconlu-pijama-takimi-beyaz-pijama-takimi-pijamaevi-20764-34-K.jpg",
    Fırsat: " Fırsat %15 İndirim ",
    ActualPrice: "199,99",
    FakePrice: "234,99",
  },
  {
    Title: "Lacivert Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/lacivert-desenli-uzun-kollu-kapuconlu-pijama-takimi-lacivert-pijama-takimi-pijamaevi-20763-34-K.jpg",
    Fırsat: " Fırsat %22 İndirim ",
    ActualPrice: "229,99",
    FakePrice: "294,99",
  },
  {
    Title: "Siyah Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/siyah-desenli-uzun-kollu-kapuconlu-pijama-takimi-siyah-pijama-takimi-pijamaevi-20762-34-K.jpg",
    Fırsat: " Fırsat %18 İndirim ",
    ActualPrice: "189,99",
    FakePrice: "234,99",
  },
  {
    Title: "Pudra Pelerin Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/pudra-pelerin-desenli-uzun-kollu-kapuconlu-pijama-takimi-pudra-pijama-takimi-pijamaevi-20761-34-K.jpg",
    Fırsat: " Fırsat %28 İndirim ",
    ActualPrice: "279,99",
    FakePrice: "389,99",
  },
  {
    Title: "Bordo Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/bordo-desenli-uzun-kollu-kapuconlu-pijama-takimi-bordo-pijama-takimi-pijamaevi-20760-34-K.jpg",
    Fırsat: " Fırsat %20 İndirim ",
    ActualPrice: "219,99",
    FakePrice: "274,99",
  },
  {
    Title: "Turuncu Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/turuncu-desenli-uzun-kollu-kapuconlu-pijama-takimi-turuncu-pijama-takimi-pijamaevi-20759-34-K.jpg",
    Fırsat: " Fırsat %25 İndirim ",
    ActualPrice: "239,99",
    FakePrice: "319,99",
  },
  {
    Title: "Lila Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/lila-desenli-uzun-kollu-kapuconlu-pijama-takimi-lila-pijama-takimi-pijamaevi-20758-34-K.jpg",
    Fırsat: " Fırsat %15 İndirim ",
    ActualPrice: "189,99",
    FakePrice: "224,99",
  },
  {
    Title: "Yeşil Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/yesil-desenli-uzun-kollu-kapuconlu-pijama-takimi-yesil-pijama-takimi-pijamaevi-20757-34-K.jpg",
    Fırsat: " Fırsat %30 İndirim ",
    ActualPrice: "259,99",
    FakePrice: "374,99",
  },
];

function MiniSlider() {
  const theme = useTheme();
  const [user, loading, error] = useAuthState(auth);


if (user) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        style={{ minWidth: "100%", minHeight: "640px" }}
        className="mySwiper"
      >
        {MiniSliderItems.map((item) => {
          return (
            <SwiperSlide key={item.Title} id="SwiperSlide">
              <Tooltip title={item.Title}>
                <Stack
                  sx={{
                    width: "90%",
                    cursor: "pointer",
                    ":hover .MiniSliderImage": {
                      scale: "0.9",
                      transition: "0.55s",
                    },
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                    }}
                    src={item.Image}
                    className="MiniSliderImage"
                    alt={item.Title}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 5,
                      right: 23,
                      bgcolor:
                        theme.palette.mode === "light" ? "black" : "white",
                      fontSize: "10px",
                      ":hover": {
                        bgcolor:
                          theme.palette.mode === "light"
                            ? "red"
                            : "rebeccapurple",
                      },
                      color: theme.palette.mode === "light" ? "white" : "black",
                    }}
                    aria-label="Favorilerim"
                    onClick={() => {}}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 5,
                      left: 23,
                      bgcolor:
                        theme.palette.mode === "light" ? "black" : "white",
                      fontSize: "10px",
                      ":hover": {
                        bgcolor:
                          theme.palette.mode === "light"
                            ? "red"
                            : "rebeccapurple",
                      },
                      color: theme.palette.mode === "light" ? "white" : "black",
                    }}
                    aria-label="Favorilerim"
                    onClick={() => {}}
                  >
                    <ShoppingCart />
                  </IconButton>

                  <Typography
                    sx={{
                      overflow: "clip",
                      p: 1,
                      color: theme.palette.mode === "light" ? "black" : "white",
                    }}
                    variant="body2"
                    color="black"
                  >
                    {item.Title}{" "}
                  </Typography>
                  <Typography
                    sx={{
                      bgcolor: "#fb5756",
                      borderRadius: "20px",
                      p: "3px",
                    }}
                    variant="caption"
                    color="white"
                  >
                    {item.Fırsat}
                  </Typography>
                  <Stack
                    direction={"row"}
                    gap={5}
                    justifyContent={"space-evenly"}
                    sx={{ mt: 1 }}
                  >
                    <Typography
                      fontWeight={"bolder"}
                      variant="body1"
                      color="error"
                    >
                      {item.ActualPrice}
                    </Typography>
                    <Typography
                      sx={{
                        textDecoration: "line-through",

                      }}
                      variant="body1"
                      fontWeight={"bold"}
                      className="TypographyForFakePrice"
                      
                    >
                      {item.FakePrice}
                    </Typography>
                  </Stack>
                </Stack>
              </Tooltip>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
}

export default MiniSlider;
