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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../FirebaseConfig/config";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: 400 },
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 32,
  p: 3,
};

function SignIn({ handleClose, open }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ position: "relative" }}>
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
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>

            <Stack
              sx={{
                justifyContent: "space-between",
                mt: 3,
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "normal" },
                gap: 2,
              }}
            >
              
              <Button
                sx={{ width: { xs: "100%", sm: "120px" } }}
                variant="contained"
                color="secondary"
              >

              <Link style={{textDecoration: "none", color: "inherit"}} to={"SignUp"}>
              Üye Ol

              </Link>

              </Button>

              <Button
                sx={{ width: { xs: "100%", sm: "120px" } }}
                variant="contained"
                color="secondary"
                onClick={() => {
                  signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      // Signed in
                      const user = userCredential.user;
                      // ...
                      console.log("done");
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      console.log(error.message);
                    });
                }}
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
