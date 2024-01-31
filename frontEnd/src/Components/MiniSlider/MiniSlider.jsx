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

import { useGetProductsByNameQuery } from "../../Redux/ProductsApi";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../Redux/CartcounterSlice";
import { AddToCartFavori } from "../../Redux/CartcounterSlice";
import { useNavigate } from "react-router-dom";

function MiniSlider() {
  const { data } = useGetProductsByNameQuery("SmallerSliderProductData");
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (data) {
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
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id} id="SwiperSlide">
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
                        minWidth: "100%",
                        height: "500px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      src={item.Image}
                      className="MiniSliderImage"
                      alt={item.Title}
                      onClick={() => {
                        navigate(`/SingleProductDetails/${item.Title}`);
                      }}
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
                        color:
                          theme.palette.mode === "light" ? "white" : "black",
                      }}
                      aria-label="Favorilerim"
                      onClick={() => {
                        dispatch(AddToCartFavori(item));
                      }}
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
                        color:
                          theme.palette.mode === "light" ? "white" : "black",
                      }}
                      aria-label="ShoppingCart"
                      onClick={() => {
                        dispatch(AddToCart(item));
                      }}
                    >
                      <ShoppingCart />
                    </IconButton>

                    <Typography
                      sx={{
                        overflow: "clip",
                        p: 1,
                        color:
                          theme.palette.mode === "light" ? "black" : "white",
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
                        {item.Price}
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
