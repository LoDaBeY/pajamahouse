import YeniOzel from "../../Components/Header/Navbar/YeniOzel/YeniOzel";
import Footer from "../../Components/Footer/Footer";
import { Box, useMediaQuery } from "@mui/material";
import SearchBar from "../../Components/Header/Navbar/NavbarForPc/Search/SearchBar";

function ErrorPage() {
  const isLargeScreen = useMediaQuery("(max-width:799px)");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SearchBar />
      <Box textAlign={"center"} flexGrow={1}>
        Return to Home Page
      </Box>
      {isLargeScreen && <YeniOzel />}
      <Footer />
    </Box>
  );
}

export default ErrorPage;
