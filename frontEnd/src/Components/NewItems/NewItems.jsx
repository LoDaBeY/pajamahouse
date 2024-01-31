import { Box, Typography, IconButton, useTheme, Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShoppingCart } from "@mui/icons-material";
import { useGetProductsByNameQuery } from "../../Redux/ProductsApi";
import { useDispatch } from "react-redux";
import { AddToCart, AddToCartFavori } from "../../Redux/CartcounterSlice";

function NewItems() {
  const { data } = useGetProductsByNameQuery("NewItemsProductData");
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (data) {
    return (
      <Box sx={{ width: "100%", mb: 5 }}>
        <Typography textAlign={"center"} variant="h6" color="inherit">
          Yeni Ürünler
        </Typography>

        <Box>
          <Link
            style={{
              textDecoration: " none",
              color: "inherit",
              marginLeft: 50,
            }}
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
            {data.map((item) => (
              <Tooltip key={item.Title} title={item.Title} arrow>
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
                      alt={item.Title}
                      style={{ borderRadius: "10px", width: "100%" }}
                      onClick={() => {
                        navigate(
                          `/SingleProductDetailsForNewItems/${item.Title}`
                        );
                      }}
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

                    <Typography variant="body1" color="inherit">
                      {item.Title}
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
}

export default NewItems;
