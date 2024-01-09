import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./Theme/Theme";
import ScrollUp from "../src/Components/Scroll-Fixed-Button-main/ScrollUp";
import { Outlet } from "react-router-dom";
import NavbarForPc from "../src/Components/Header/Navbar/NavbarForPc/NavbarForPc";


function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentTheme")
      ? localStorage.getItem("currentTheme")
      : "light"
  );

  //Don't forget to update the header with passing SetMode to his MainComponent
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    // @ts-ignore

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarForPc setMode={setMode} />
      <Outlet/>
      <ScrollUp/>
    </ThemeProvider>
  );
}

export default App;
