import { Box, Typography, IconButton, useTheme, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShoppingCart } from "@mui/icons-material";

const NewItemsData = [
  {
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/bordo-dotted-desenli-onden-dugmeli-pelus-polar-pijama-takimi-onden-dugmeli-pijama-takimi-pijamaevi-20954-35-K.jpg",
    Name: "Pembe Dotted Desenli Önden Düğmeli Peluş Polar Pijama Takımı",
    Price: "489.99",
  },
  {
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/siyah-jantung-desenli-onden-dugmeli-pelus-polar-pijama-takimi-onden-dugmeli-pijama-takimi-pijamaevi-20928-35-K.jpg",
    Name: "Mavi Stripe Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Price: "349.99",
  },
  {
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/indigo-jantung-desenli-onden-dugmeli-pelus-polar-pijama-takimi-onden-dugmeli-pijama-takimi-pijamaevi-20934-35-K.jpg",
    Name: "Mor Stripe Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Price: "399.99",
  },
  {
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/siyah-dotted-desenli-onden-dugmeli-pelus-polar-pijama-takimi-onden-dugmeli-pijama-takimi-pijamaevi-20940-35-K.jpg",
    Name: "Siyah Dotted Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Price: "429.99",
  },
  {
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/lacivert-desenli-uzun-kollu-kapsonlu-pijama-takimi-lacivert-pijama-takimi-pijamaevi-20950-35-K.jpg",
    Name: "Lacivert Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Price: "379.99",
  },
  {
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/beyaz-desenli-uzun-kollu-kapsonlu-pijama-takimi-beyaz-pijama-takimi-pijamaevi-20949-35-K.jpg",
    Name: "Beyaz Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Price: "419.99",
  },
  {
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/gri-stripe-desenli-uzun-kollu-kapsonlu-pijama-takimi-gri-stripe-pijama-takimi-pijamaevi-20948-35-K.jpg",
    Name: "Gri Stripe Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Price: "359.99",
  },
  {
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/yesil-dotted-desenli-uzun-kollu-kapsonlu-pijama-takimi-yesil-dotted-pijama-takimi-pijamaevi-20947-35-K.jpg",
    Name: "Yeşil Dotted Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Price: "399.99",
  },
];

function NewItems() {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", mb: 5 }}>
      <Typography textAlign={"center"} variant="h6" color="inherit">
        Yeni Ürünler
      </Typography>

      <Box>
        <Link
          style={{ textDecoration: " none", color: "inherit", marginLeft: 50 }}
          to={""}
        >
          <Typography variant="caption">Tümünü Görüntüle + </Typography>
        </Link>

        <Box
          sx={{
            mt: 6,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {NewItemsData.map((item) => (
            <Tooltip key={item.Name} title={item.Name} arrow>
              <div style={{ position: "relative", margin: 15 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: {
                      xs: "250px",
                      sm: "300px",
                      lg: "350px",

                      ":hover .Image": {
                        scale: "1.1",
                        rotate: "1deg",
                        transition: "0.55s",
                      },
                    },
                  }}
                >
                  <img
                    className="Image"
                    src={item.Image}
                    alt={item.Name}
                    style={{ borderRadius: "10px", width: "100%" }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 5,
                      right: 5,
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

                  <Typography variant="body1" color="inherit">
                    {item.Name}
                  </Typography>

                  <Typography variant="h6" color="red">
                    {item.Price} TL
                  </Typography>
                </Box>
              </div>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default NewItems;
