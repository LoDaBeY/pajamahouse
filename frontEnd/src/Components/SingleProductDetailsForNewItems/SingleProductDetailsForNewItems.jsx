import React from "react";
import { Box } from "@mui/material";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./product-details.css";
import DetailsThumb from "./DetailsThumb";
import { useGetOneProductsApiNewItemsByNameQuery } from "../../Redux/ProductsApi";
import IsLoadingAnime from "../../Animation/IsLoadingAnime.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

function SingleProductDetailsForNewItems() {
  let { id } = useParams();
  const { data, isLoading } = useGetOneProductsApiNewItemsByNameQuery(id);
  const [setindexx] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    // @ts-ignore
    setindexx(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  if (isLoading) {
    <Box>
      <Lottie
        animationData={IsLoadingAnime}
        loop={true}
        autoplay={true}
        style={{ backgroundColor: "white", width: "100%", height: "100vh" }}
      />
    </Box>;
  }

  if (data) {
    return (
      <Box>
        <Helmet>
          <title>Product's of New Items</title>
        </Helmet>
        <div className="app details-page">
          <div className="details">
            <div className="big-img">
              <img src={data.Image} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{data.Title}</h2>
                <span>${data.Price}</span>
              </div>

              <DetailsThumb
                ImageLink={data.ImageLink}
                tab={handleTab}
                myRef={myRef}
              />
            </div>
          </div>
        </div>
      </Box>
    );
  }
}

export default SingleProductDetailsForNewItems;
