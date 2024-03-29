
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#F5F5F5",
          },

          favColor: {
            main: grey[300],
          },
          backGround: {
            main: "#ffffff"
          }
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#01949A",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
          backGround: {
            main: "#1D2021"
          }

        }),
  },
});
