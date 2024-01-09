import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Button,
  Collapse,
  ListItem,
  ListItemAvatar,
  Avatar,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore, WhatsApp } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const drawerWidth = 320;
const PajamaTakımı = [
  "Peluş Pijama Takımı",
  "Önden Düğmeli Pijama Takımı",
  "Anneli Kızlı Pijama Takımı",
  "Askılı Pijama Takımı",
  "Şortlu Pijama Takımı",
  "Sabahlıklı Pijama Takımı",
  "Kısa Kollu Pijama Takımı",
  "Büyük Beden Pijama Takımı",
  "Uzun Kollu Pijama Takımı",
];
const Erkek = [
  "Erkek Polar Pijama Takımı",
  "Erkek Uzun Kollu Pijama Takımı",
  "Erkek Kısa Kollu Pijama Takımı",
  "Erkek Şortlu Pijama Takımı",
];

const ÇorapMenu = ["Erkek Çorap", "Kadın Çorap"];

const container = window !== undefined ? () => window.document.body : undefined;

function NavbarForPhone({ mobileOpen, handleDrawerToggle }) {
  const [open, setOpen] = useState(false);
  const [ErkekMenu, setErkekMenu] = useState(false);
  const [Çorap, setÇorap] = useState(false);
const theme = useTheme()
  const handleClick = () => {
    setOpen(!open);
  };
  const handleErkek = () => {
    setErkekMenu(!ErkekMenu);
  };
  const handleÇorap = () => {
    setÇorap(!Çorap);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      {/* The bar that can close the drawer with a click in every where even outside or in the drawer and next to the Close button too. */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ bgcolor: "#fb5756" }}
        onClick={handleDrawerToggle}
      >
        <Typography variant="body1" sx={{ my: 2, mx: 1, fontWeight: 700 }}>
          Menüyü Kapat
        </Typography>
        <IconButton
          aria-label="ColseMenu"
          onClick={() => {
            setOpen(open);
          }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider />

      {/* The two buttons in the drawer */}
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        sx={{ my: 1, width: "100%" }}
      >
        <Button
          color="inherit"
          variant="contained"
          sx={{ bgcolor: "#ff85bc", width: "150px", ':hover' : {bgcolor: "#ff85bc"} }}
          startIcon={<PersonIcon />}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
            to={""}
          >
            Hesap
          </Link>
        </Button>
        <Button
          color="error"
          sx={{ bgcolor: "#07060c", width: "150px", ':hover' : {bgcolor: "#07060c"} }}
          variant="contained"
          startIcon={<LocalShippingIcon />}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
            to={""}
          >
            Kargo Takip
          </Link>
        </Button>
      </Stack>
      {/* The starter of the list of the menus */}
      <List
        sx={{
          width: "100%",
          maxWidth: drawerWidth,
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="nested-list"
      >
        <ListItemButton>
          <Link
            to={""}
            style={{
              textDecoration: "none",
              fontWeight: "500",
              color: "inherit",
              textTransform: "capitalize",
            }}
          >
            <ListItemText primary="Yılbaşı⛄" />
          </Link>
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemText
            sx={{ ".MuiTypography-root": { fontWeight: open ? 700 : 400 } }}
            primary="PİJAMA TAKIMI"
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            sx={{
              bgcolor: "#fb5756",
              color: "white",
              m: 1,
              borderRadius: "10px",
            }}
            component="div"
            disablePadding
          >
            {PajamaTakımı.map((item) => {
              return (
                <ListItemButton key={item} sx={{ pl: 4 }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>

        <ListItemButton>
          <Link
            style={{
              textDecoration: "none",
              fontWeight: "400",
              color: "inherit",
            }}
            to={""}
          >
            <ListItemText primary="Sabahlık" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link
            to={""}
            style={{
              textDecoration: "none",
              fontWeight: "400",
              color: "inherit",
            }}
          >
            <ListItemText primary="Tulum" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link
            to={""}
            style={{
              textDecoration: "none",
              fontWeight: "400",
              color: "inherit",
            }}
          >
            <ListItemText primary="Gecelik" />
          </Link>
        </ListItemButton>

        <ListItemButton onClick={handleErkek}>
          <ListItemText
            sx={{
              ".MuiTypography-root": { fontWeight: ErkekMenu ? 700 : 400 },
            }}
            primary="Erkek"
          />
          {ErkekMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={ErkekMenu} timeout="auto" unmountOnExit>
          <List
            sx={{
              bgcolor: "#fb5756",
              color: "white",
              m: 1,
              borderRadius: "10px",
            }}
            component="div"
            disablePadding
          >
            {Erkek.map((item) => {
              return (
                <ListItemButton key={item} sx={{ pl: 4 }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>

        <ListItemButton>
          <Link
            to={""}
            style={{
              textDecoration: "none",
              fontWeight: "400",
              color: "inherit",
            }}
          >
            <ListItemText primary="Çocuk" />
          </Link>
        </ListItemButton>
        <ListItemButton onClick={handleÇorap}>
          <ListItemText
            sx={{
              ".MuiTypography-root": { fontWeight: Çorap ? 700 : 400 },
            }}
            primary="Çorap"
          />
          {Çorap ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={Çorap} timeout="auto" unmountOnExit>
          <List
            sx={{
              bgcolor: "#fb5756",
              color: "white",
              m: 1,
              borderRadius: "10px",
            }}
            component="div"
            disablePadding
          >
            {ÇorapMenu.map((item) => {
              return (
                <ListItemButton key={item} sx={{ pl: 4 }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <ListItemButton>
          <Link
            to={""}
            style={{
              textDecoration: "none",
              fontWeight: "500",
              color: "inherit",
            }}
          >
            <ListItemText primary="Yeni Gelenler" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link
            to={""}
            style={{
              textDecoration: "none",
              fontWeight: "500",
              color: "inherit",
            }}
          >
            <ListItemText primary="Çok Satanlar❤️" />
          </Link>
        </ListItemButton>

        {/* The Contact Button for WhatsApp and The button to go to display your favorite products */}
        <Button
          sx={{
            width: "90%",
            my: 3,
            textTransform: "capitalize",
            mx: 2,
            display: "flex",
            gap: 1,
          }}
          startIcon={<WhatsApp />}
          color="success"
          variant="outlined"
        >
          WhatsApp İletişim
        </Button>
        <Button
          sx={{
            width: "90%",
            my: 3,
            textTransform: "capitalize",
            mx: 2,
            display: "flex",
            gap: 1,
          }}
          startIcon={<FavoriteBorderIcon />}
          color="error"
          variant="outlined"
        >
          Favorilerim
        </Button>

        {/* The Cart and how much it cost */}
        <ListItem sx={{ bgcolor: theme.palette.mode === "light"? "whitesmoke" : "inherit",  }}>
          <ListItemAvatar>
            <Avatar>
              <ShoppingCartIcon />
            </Avatar>
          </ListItemAvatar>
          <Link
            to={""}
            style={{
              width: "100%",
              textDecoration: "none",
              color: "inherit",
              alignItems: "center"
            }}
          >
            <Stack direction={"row"} alignItems={"center"} >
              <ListItemText sx={{ '.MuiTypography-root': {fontWeight: "700"} }}  primary="Sepetin" color="inherit" />
              <Typography sx={{fontWeight: "700" }} variant="caption" color="inherit">
                $19.99
              </Typography>
            </Stack>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
}

export default NavbarForPhone;
