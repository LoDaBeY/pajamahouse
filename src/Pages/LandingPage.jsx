import DisposalHeader from "../Components/Header/DisposalHeader/DisposalHeader";
import YeniOzel from "../Components/Header/Navbar/YeniOzel/YeniOzel";
import PcListMenu from "../Components/Header/Navbar/PcListMenu/PcListMenu";
import Slider from "../Components/Slider/Slider";
import NewItems from "../Components/NewItems/NewItems";
import FixedUrunler from "../Components/FixedUrunler/FixedUrunler";
import MiniSlider from "../Components/MiniSlider/MiniSlider";
import CustomeSlider from "../Components/CustomerSlider/CustomeSlider";
import IconsSeaction from "../Components/IconSection/IconsSeaction";
import Footer from "../Components/Footer/Footer";
import { Box } from "@mui/material";
import SearchBar from "../Components/Header/Navbar/NavbarForPc/Search/SearchBar";

function LandingPage() {
  return (
    <Box sx={{ py: 8 }}>
      <SearchBar/>
      <YeniOzel />
      <DisposalHeader />
      <PcListMenu />
      <Slider />
      <MiniSlider />
      <FixedUrunler />
      <NewItems />
      <CustomeSlider />
      <IconsSeaction />
      <Footer />
    </Box>
  );
}

export default LandingPage;
