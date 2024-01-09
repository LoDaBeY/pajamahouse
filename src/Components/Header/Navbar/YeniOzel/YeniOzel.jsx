import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

function YeniOzel() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "30px",
        bgcolor: "#fb5756",
        color: "white",
        m: 1,
        textAlign: "center",
        ml: 0,
        my: 1,
      }}
    >
      <Marquee direction="left">
        <Typography sx={{ paddingRight: 40 }} variant="caption" color="inherit">
          Yeni Yıla Özel
          <span style={{ color: "yellow", margin: 2 }}>
            %60'a VARAN İNDİRİMLERLE
          </span>
          Peluş Extra Başladı!
          <span style={{ paddingLeft: 6 }}>
            Yeni Yıla kargo <span style={{ color: "blue" }}>Bedava</span>
          </span>
        </Typography>
      </Marquee>
    </Box>
  );
}

export default YeniOzel;
