import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function DisposalHeader() {
  const [CloseTheDisposbolHeader, setCloseTheDisposbolHeader] =
    useState("flex");
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: CloseTheDisposbolHeader,
        // @ts-ignore
        bgcolor: theme.palette.neutral.main,
        py: 1,
      }}
    >
      <Stack
        direction={"row"}
        gap={9}
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: { xs: "flex-end", sm: "center" },
        }}
      >
        <Typography variant="body2" color="inherit">
          Yeni Yıla Özel KARGO
          <span style={{ color: "red", marginLeft: 3 }}>BEDAVA</span>{" "}
        </Typography>
        <IconButton
          onClick={() => {
            setCloseTheDisposbolHeader("none");
          }}
          aria-label="delete"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default DisposalHeader;
