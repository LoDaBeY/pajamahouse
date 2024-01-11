import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import NavbarForPhone from "../NavbarForPhone/NavbarForPhone";
import PjamaHouseLOGO from "../../../../Images/logo-kirmizi.webp";
import {
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Paper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme, Typography } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import YeniOzel from "../YeniOzel/YeniOzel";
import DisposalHeader from "../../DisposalHeader/DisposalHeader";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { WhatsApp } from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Üye Girişi / Üye Ol",
    icon: <PersonOutlineIcon />,
    link: "/",
    handleOpen: true 
    
  },
  { title: "Kargo Takip", icon: <LocalShippingIcon />, link: "kargo-takip" },
  { title: "Favorilerim", icon: <FavoriteBorderIcon />, link: "favorilerim" },
  { title: "Yardım", icon: <HelpOutlineIcon />, link: "yardim" },
  {
    title: "Siparişlerim",
    icon: <ShoppingCartCheckoutIcon />,
    link: "siparislerim",
  },
  { title: "Whatsapp İletişim", icon: <WhatsApp />, link: "whatsapp-iletisim" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function NavbarForPc({ setMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const theme = useTheme();
  const isLargeScreen = useMediaQuery("(min-width:800px)");
  const [appbarPosition, setAppbarPosition] = useState("relative");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 60) {
        setAppbarPosition("fixed");
      } else {
        setAppbarPosition("relative");
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      {isLargeScreen && <YeniOzel />}
      <DisposalHeader />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          mb: 3,
        }}
      >
        <CssBaseline />
        <AppBar
          component="header"
          sx={{
            bgcolor:
              // @ts-ignore
              theme.palette.backGround.main,
            boxShadow: 0,
            position: appbarPosition,
            transition: "position 0.6s ease-in-out",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="default"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Stack
              sx={{
                flexGrow: { xs: "none", md: 1 },
                my: 2,
                maxWidth: {
                  xs: "180px",
                  sm: "190px",
                  md: "210px",
                  lg: "250px",
                },
              }}
            >
              <Link to={"/"}>
                <img
                  style={{ width: "100%", cursor: "pointer" }}
                  src={PjamaHouseLOGO}
                  alt="PjamaHouseLOGO"
                />
              </Link>
            </Stack>

            {/* Hesap, Favorilerim and Sepet buttons */}
            <Stack direction={"row"}>
              <IconButton
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "15px",
                  gap: 1,
                  position: "relative",
                  ":hover .MuiBox-root": { display: "block" },
                }}
                aria-label="PersonIcon"
              >
                <PersonIcon />
                <Typography
                  sx={{ display: { xs: "none", sm: "block" } }}
                  variant="body1"
                  color="inherit"
                >
                  Hesap
                </Typography>

                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "none",
                  }}
                >
                  <Paper
                    sx={{
                      width: { xs: "220px", sm: "250px" },
                      borderRadius: "20px",
                      mt: "10px",
                      mr: "10px",
                    }}
                  >
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        {menuItems.map((item) => {
                          return (
                            <ListItem
                              className="borderAnimation"
                              key={item.title}
                              disablePadding
                            >
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                                to={item.link}
                              >
                                <ListItemButton
                                  onClick={
                                    item.handleOpen ? handleOpen : undefined
                                  }
                                >
                                  {" "}
                                  <ListItemIcon>{item.icon}</ListItemIcon>
                                  <ListItemText
                                    sx={{
                                      ".MuiTypography-root": {
                                        fontSize: "0.9rem",
                                      },
                                    }}
                                    primary={item.title}
                                  />
                                </ListItemButton>
                              </Link>
                            </ListItem>
                          );
                        })}
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </IconButton>

              <IconButton
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "15px",
                  gap: 1,
                }}
                aria-label="PersonIcon"
              >
                <FavoriteBorderIcon />
                <Typography
                  sx={{ display: { xs: "none", sm: "block" } }}
                  variant="body1"
                  color="inherit"
                >
                  Favorilerim
                </Typography>
              </IconButton>
              <IconButton
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "15px",
                  gap: 1,
                }}
                aria-label="PersonIcon"
              >
                <Badge badgeContent={4} color="error">
                  <ShoppingCartIcon color="action" />
                </Badge>
                <Typography
                  sx={{ display: { xs: "none", sm: "block" } }}
                  variant="body1"
                  color="inherit"
                >
                  Sepet
                </Typography>
              </IconButton>
              {/* The Dark and Light Mode */}
              <Box>
                {theme.palette.mode === "light" ? (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "currentTheme",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                    color="default"
                  >
                    <LightModeOutlined />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "currentTheme",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                    color="default"
                  >
                    <DarkModeOutlined />
                  </IconButton>
                )}
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>

        <NavbarForPhone
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>

      {true && (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </Box>
  );
}

export default NavbarForPc;
