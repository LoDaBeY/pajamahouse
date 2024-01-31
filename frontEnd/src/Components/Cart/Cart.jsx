import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Footer from "../Footer/Footer";
import SearchBar from "../Header/Navbar/NavbarForPc/Search/SearchBar";
import PcListMenu from "../Header/Navbar/PcListMenu/PcListMenu";
import YeniOzel from "../Header/Navbar/YeniOzel/YeniOzel";
import IconsSeaction from "../IconSection/IconsSeaction";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../FirebaseConfig/config";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Add, Remove } from "@mui/icons-material";
import { Decrease, Increase } from "../../Redux/CartcounterSlice";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));

function Cart() {
  const [user] = useAuthState(auth);
  const isLargeScreen = useMediaQuery("(max-width:799px)");
  const theme = useTheme();
  // @ts-ignore
  const { CartProductsTitle, SelectedProducts } = useSelector(
    // @ts-ignore
    (state) => state.CartShopName
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();
  var subtotal = 0;

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  if (user) {
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
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-around" },
            alignItems: { xs: "center", sm: "normal" },
          }}
        >
          <Stack
            direction={"row"}
            sx={{ flexWrap: "wrap", justifyContent: "center", width: "70%" }}
          >
            {SelectedProducts.map((item, index) => {
              subtotal += item.Price * item.Quantity;

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
                    {CartProductsTitle.includes(item.Title) ? (
                      <div
                        dir="rtl"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <IconButton
                          color="primary"
                          sx={{ ml: "10px" }}
                          onClick={() => {
                            dispatch(Increase(item));
                          }}
                        >
                          <Add fontSize="small" />
                        </IconButton>

                        <StyledBadge
                          badgeContent={SelectedProducts[index].Quantity}
                          color="primary"
                        />

                        <IconButton
                          color="primary"
                          sx={{ mr: "10px" }}
                          onClick={() => {
                            dispatch(Decrease(item));
                          }}
                        >
                          <Remove fontSize="small" />
                        </IconButton>
                      </div>
                    ) : (
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          p: 1,
                          lineHeight: 1.1,
                        }}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          // dispatch(AddToCart(item))
                        }}
                      >
                        <ShoppingCartIcon
                          sx={{ mx: 1 }}
                          color="inherit"
                          fontSize="small"
                        />
                        Add to cart
                      </Button>
                    )}

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

          {SelectedProducts.length > 0 ? (
            <Paper
              sx={{ width: "200px", textAlign: "center", height: "100px" }}
            >
              <Typography variant="h6" color="inherit">
                Subtotal
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Stack>
                <Typography variant="h4" color="inherit">
                  ${subtotal}
                </Typography>
              </Stack>
            </Paper>
          ) : (
            <Stack sx={{ width: "100%" }}>
              <Typography variant="h6" color="inherit">
                Sepetinizde Ürün Bulunmamaktadır
              </Typography>
            </Stack>
          )}
        </Stack>

        <Divider
          sx={{
            mt: 4,
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
}
export default Cart;
