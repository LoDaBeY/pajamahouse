import { Box } from "@mui/material";
import LoadingAnime from "../../Animation/Loading.json";
import Lottie from "lottie-react";

function Loading() {
  return (
    <Box>
      <Lottie
        animationData={LoadingAnime}
        loop={true}
        autoplay={true}
        style={{ backgroundColor: "white", width: "100%", height: "100vh" }}
      />
    </Box>
  );
}

export default Loading;
