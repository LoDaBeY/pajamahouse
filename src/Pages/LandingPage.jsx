import YeniOzel from "../Components/Header/Navbar/YeniOzel/YeniOzel";
import PcListMenu from "../Components/Header/Navbar/PcListMenu/PcListMenu";
import Slider from "../Components/Slider/Slider";
import NewItems from "../Components/NewItems/NewItems";
import FixedUrunler from "../Components/FixedUrunler/FixedUrunler";
import MiniSlider from "../Components/MiniSlider/MiniSlider";
import IconsSeaction from "../Components/IconSection/IconsSeaction";
import Footer from "../Components/Footer/Footer";
import { Box, Divider, useMediaQuery, useTheme } from "@mui/material";
import SearchBar from "../Components/Header/Navbar/NavbarForPc/Search/SearchBar";

function LandingPage() {
  const isLargeScreen = useMediaQuery("(max-width:799px)");
  const theme = useTheme();
  return (
    <Box sx={{ mt: 3 }}>
      <SearchBar />
      {isLargeScreen && <YeniOzel />}
      <PcListMenu />
      <Slider />
      <Divider
        sx={{
          my: 2,
          mr: 1,
          ml: 1,
          border:
            theme.palette.mode === "light"
              ? "1px solid black"
              : "1px solid white",
        }}
      />
      <MiniSlider />
      <Divider
        sx={{
          my: 3,
          mr: 1,
          ml: 1,
          border:
            theme.palette.mode === "light"
              ? "1px solid #ededed"
              : "1px solid white",
        }}
      />
      <FixedUrunler />
      <NewItems />
      <Divider
        sx={{
          my: 1,
          mr: 2,
          ml: 3,
          border:
            theme.palette.mode === "light"
              ? "1px solid #ededed"
              : "1px solid white",
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

export default LandingPage;
