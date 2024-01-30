import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { auth } from "../../FirebaseConfig/config";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import YeniOzel from "../Header/Navbar/YeniOzel/YeniOzel";
import PcListMenu from "../Header/Navbar/PcListMenu/PcListMenu";
import SearchBar from "../Header/Navbar/NavbarForPc/Search/SearchBar";
import IconsSeaction from "../IconSection/IconsSeaction";
import Footer from "../Footer/Footer";
import { useGetProductsByNameQuery } from "../../Redux/ProductsApi";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AddToCart } from "../../Redux/CartcounterSlice";

function Favori() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const isLargeScreen = useMediaQuery("(max-width:799px)");
  const theme = useTheme();
  const { data } = useGetProductsByNameQuery("SmallerSliderProductData");
  // @ts-ignore
  const { CartProducts } = useSelector((state) => state.CartShopName);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  return (
    <Box>
      <SearchBar />
      {isLargeScreen && <YeniOzel />}
      {!user ? (
        <Divider
          sx={{
            my: 2,
            mr: 1,
            ml: 1,
            border:
              theme.palette.mode === "light"
                ? "1px solid #ededed"
                : "1px solid white",
          }}
        />
      ) : null}
      <PcListMenu />

      <Stack
        direction={"row"}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {CartProducts.map((item) => {
          return (
            <Card
              className="card"
              key={item.Title}
              sx={{ maxWidth: 277, mb: 6, mx: 2 }}
            >
              <CardMedia
                component="img"
                height="400"
                image={item.Image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.Title}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "space-between" }}
                disableSpacing
              >
                <Button
                  sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    dispatch(AddToCart(item))
                  }}

                >
                  <ShoppingCartIcon
                    sx={{ mx: 1 }}
                    color="inherit"
                    fontSize="small"
                  />
                  Add to cart
                </Button>

                <Typography
                  mr={1}
                  variant="body1"
                  color={theme.palette.error.light}
                >
                  ${item.Price}
                </Typography>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
      <Divider
        sx={{
          my: 1,
          mr: 2,
          ml: 3,
          border:
            theme.palette.mode === "light"
              ? "1px solid #ededed"
              : "0.3px solid white",
        }}
      />

      <IconsSeaction />
      <Divider
        sx={{
          my: 1,
          mr: 2,
          ml: 3,
          border:
            theme.palette.mode === "light"
              ? "1px solid #ededed"
              : "0.3px solid white",
        }}
      />
      <Footer />
    </Box>
  );
}

export default Favori;
