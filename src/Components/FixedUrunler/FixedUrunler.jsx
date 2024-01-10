import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

function FixedUrunler() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 3,
      }}
    >
      <Stack
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "300px", md: "100%" },
          gap: 1,
        }}
      >
        <Box>
          <Link to={""}>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto/Data/EditorFiles/pijamaevi/kbanner/kbanner1612-1.jpg"
              alt="Erkek Takımları"
              style={{ width: "100%" }}
            />
          </Link>
        </Box>
        <Box>
          <Link to={""}>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto/Data/EditorFiles/pijamaevi/kbanner/kbanner1612-2.jpg"
              alt="Erkek Takımları"
              style={{ width: "100%" }}
            />
          </Link>
        </Box>
        <Box>
          <Link to={""}>
            <img
              src="https://cdn.pijamaevi.com/cdn-cgi/image/format=auto/Data/EditorFiles/pijamaevi/kbanner/kbanner1612-3.jpg"
              alt="Erkek Takımları"
              style={{ width: "100%" }}
            />
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}

export default FixedUrunler;
