import { Box, IconButton } from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Divider,
  FormControl,
  InputLabel,
  Modal,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { Typography, Button } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs: "95%", sm: 400},
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 32,
  p: 3,
};

function SignIn({ handleClose, open }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <IconButton
            sx={{
              bgcolor: "inherit",
              position: "absolute",
              top: "10px",
              right: "5px",
            }}
            aria-label="Close"
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <Typography variant="h6" color="inherit">
            Üye Girişi
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body1" color="inherit">
            Üye giriş bilgilerini giriniz.
          </Typography>
          <Box sx={{ marginTop: "15px", width: "100%" }} component={"form"}>
            <Stack gap={3}>
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue=""
              />

              <FormControl sx={{}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  }
                  label="Password"
                />
              </FormControl>
            </Stack>

            <Stack
              sx={{ justifyContent: "space-between", mt: 3, flexDirection: {xs: "column", sm: "row"}, alignItems: {xs: "center", sm: "normal"}, gap: 2 }}
            >
              <Button
                sx={{ width: {xs: "100%", sm: "120px"} }}
                variant="contained"
                color="secondary"
              >
                Üye Ol
              </Button>

              <Button
                sx={{ width: {xs: "100%", sm: "120px"} }}
                variant="contained"
                color="secondary"
              >
                Giriş Yap
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default SignIn;
