import {
  Box,
  Button,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import Footer from "../../Footer/Footer";
import SearchBar from "../../Header/Navbar/NavbarForPc/Search/SearchBar";
import PcListMenu from "../../Header/Navbar/PcListMenu/PcListMenu";
import YeniOzel from "../../Header/Navbar/YeniOzel/YeniOzel";
import IconsSeaction from "../../IconSection/IconsSeaction";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Person } from "@mui/icons-material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../FirebaseConfig/config";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery("(max-width:799px)");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FristNameOfTheUser, setFristNameOfTheUser] = useState("");
  const [LastNameOfTheUser, setLastNameOfTheUser] = useState("");
  const navigate = useNavigate();

  return (
    <Box>
      <SearchBar />
      {isLargeScreen && <YeniOzel />}
      <PcListMenu />

      <Container
        sx={{
          my: 10,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} sx={{ mb: 2 }}>
          <IconButton aria-label="">
            <Person />
          </IconButton>
          <Typography variant="body1" color="inherit">
            Üye Kayıtı
          </Typography>
        </Stack>

        <Container
          component={"form"}
          sx={{ display: "flex", justifyContent: "space-around", gap: 2 }}
        >
          <Stack gap={2} sx={{ width: "100%" }}>
            <TextField
              required
              id="FristName"
              label="Frist Name"
              defaultValue={FristNameOfTheUser}
              onChange={(eo) => {
                setFristNameOfTheUser(eo.target.value);
              }}
            />
            <TextField
              required
              id="LastName"
              label="Last Name"
              defaultValue={LastNameOfTheUser}
              onChange={(eo) => {
                setLastNameOfTheUser(eo.target.value);
              }}
            />
          </Stack>
          <Stack gap={2} sx={{ width: "100%" }}>
            <TextField
              required
              id="EmailAddress"
              label="Email Address"
              defaultValue={email}
              onChange={(eo) => {
                setEmail(eo.target.value);
              }}
            />

            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              defaultValue={password}
              onChange={(eo) => {
                setPassword(eo.target.value);
              }}
            />
            <Button
              onClick={() => {
                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log("user created successfully");
                    navigate("/")
                    console.log(user)
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);

                    // ..
                  });
              }}
              sx={{ width: "120px" }}
              variant="contained"
            >
              Submit
            </Button>
          </Stack>
        </Container>
      </Container>

      <Divider
        sx={{
          my: 1,
          mr: 2,
          ml: 3,
          border:
            theme.palette.mode === "light"
              ? "1px solid #ededed"
              : "1px solid white",
        }}
      />

      <IconsSeaction />
      <Divider
        sx={{
          my: 1,
          mr: 2,
          ml: 3,
          border:
            theme.palette.mode === "light"
              ? "1px solid #ededed"
              : "0.3px solid white",
        }}
      />
      <Footer />
    </Box>
  );
}

export default SignUp;
