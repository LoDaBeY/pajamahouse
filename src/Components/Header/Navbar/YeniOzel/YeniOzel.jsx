import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "@mui/material";

function YeniOzel() {
  const [mediaQuery, setMediaQuery] = useState(0);
  const [MarqueePlay, setMarqueePlay] = useState("");
  const isLargeScreen = useMediaQuery("(min-width:800px)");

  useEffect(() => {
    if (!isLargeScreen) {
      setMediaQuery(2);
      setMarqueePlay("true");
    } else {
      setMediaQuery(0);
      setMarqueePlay("false");
    }
  }, [isLargeScreen]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "30px",
        bgcolor: "#fb5756",
        color: "white",
        textAlign: "center",
        my: mediaQuery,
      }}
    >
      <Marquee
        // @ts-ignore
        play={MarqueePlay}
      >
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
