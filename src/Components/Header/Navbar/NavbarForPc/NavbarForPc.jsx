import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import NavbarForPhone from "../NavbarForPhone/NavbarForPhone";
import PjamaHouseLOGO from "../../../../Images/logo-kirmizi.webp";
import { Badge, Stack } from "@mui/material";
import { useState } from "react";
import { useTheme, Typography } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavbarForPc({ setMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        mb: 4,

      }}
    >
      <CssBaseline />
      <AppBar component="nav" sx={{       bgcolor: theme.palette.
// @ts-ignore
      backGround.main}}>
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
              maxWidth: { xs: "180px", sm: "190px", md: "210px", lg: "250px" },
            }}
          >
            <img style={{ width: "100%" }} src={PjamaHouseLOGO} alt="" />
          </Stack>
          <Stack direction={"row"}>
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
              <PersonIcon />
              <Typography
                sx={{ display: { xs: "none", sm: "block" } }}
                variant="body1"
                color="inherit"
              >
                Hesap
              </Typography>
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
  );
}

export default NavbarForPc;
