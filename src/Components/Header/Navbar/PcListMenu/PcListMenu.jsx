import { ExpandMore } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import PhotoSlider1 from "../../../../Images/BigSlider1.webp";
import PhotoSlider2 from "../../../../Images/BigSlider2.webp";
import PhotoSlider3 from "../../../../Images/BigSlider3.webp";
import PhotoSlider4 from "../../../../Images/BigSlider5.webp";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const PajamaTakımı = [
  {
    name: "Peluş Pijama Takımı",
    link: "PeluşPijamaTakımı",
    photo: PhotoSlider1,
  },
  {
    name: "Önden Düğmeli Pijama Takımı",
    link: "ÖndenDüğmeliPijamaTakımı",
    photo: PhotoSlider2,
  },
  {
    name: "Anneli Kızlı Pijama Takımı",
    link: "AnneliKızlıPijamaTakımı",
    photo: PhotoSlider3,
  },
  {
    name: "Askılı Pijama Takımı",
    link: "AskılıPijamaTakımı",
    photo: PhotoSlider4,
  },
  {
    name: "Şortlu Pijama Takımı",
    link: "ŞortluPijamaTakımı",
    photo: PhotoSlider1,
  },
];

const PajamaTakımı2 = [
  {
    name: "Sabahlıklı Pijama Takımı",
    link: "SabahlıklıPijamaTakımı",
    photo: PhotoSlider2,
  },
  {
    name: "Kısa Kollu Pijama Takımı",
    link: "KısaKolluPijamaTakımı",
    photo: PhotoSlider3,
  },
  {
    name: "Büyük Beden Pijama Takımı",
    link: "BüyükBedenPijamaTakımı",
    photo: PhotoSlider4,
  },
  {
    name: "Uzun Kollu Pijama Takımı",
    link: "UzunKolluPijamaTakımı",
    photo: PhotoSlider1,
  },
];

const Erkek = [
  {
    name: "Erkek Polar Pijama Takımı",
    link: "ErkekPolarPijamaTakımı",
    photo: PhotoSlider1,
  },
  {
    name: "Erkek Uzun Kollu Pijama Takımı",
    link: "ErkekUzunKolluPijamaTakımı",
    photo: PhotoSlider2,
  },
  {
    name: "Erkek Kısa Kollu Pijama Takımı",
    link: "ErkekKısaKolluPijamaTakımı",
    photo: PhotoSlider3,
  },
  {
    name: "Erkek Şortlu Pijama Takımı",
    link: "ErkekŞortluPijamaTakımı",
    photo: PhotoSlider4,
  },
];

const ÇorapMenu = [
  { name: "Erkek Çorap", link: "ErkekÇorap", photo: PhotoSlider1 },
  { name: "Kadın Çorap", link: "KadınÇorap", photo: PhotoSlider2 },
];

function PcListMenu() {
  const isLargeScreen = useMediaQuery("(min-width:700px)");

  if (!isLargeScreen) {
    return null;
  } else {
    return (
      <Box
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          height: "50px",
          borderTop: "1px solid #ededed",
          my: 2,
          borderBottom: "1px solid #ededed",
          ".MuiContainer-root": {
            pl: 0,
            pr: 0,
          },
          textAlign: "center",

        }}
      >
        <Container
          sx={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "repeat(10, 1fr)",
            justifyItems: "center",
            gridTemplateRows: "",
          }}
        >
          {/* YILBAŞI⛄ frist one */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover .MuiBox-root": { display: "block" },
              mx: 2,
              width: "100px",
            }}
          >
            <Typography
              sx={{ fontSize: "13px", cursor: "pointer" }}
              variant="body1"
              color="inherit"
              className="borderAnimation"
            >
              YILBAŞI⛄
            </Typography>
          </Box>

          {/* Pajama Takimi */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover .MuiBox-root": { display: "block" },
              mx: 2,
              width: "100px",
            }}
          >
            <Typography
              sx={{ fontSize: "13px", cursor: "pointer" }}
              variant="body1"
              color="inherit"
              className="borderAnimation"
            >
              PajamaTakımı
            </Typography>
            <ExpandMore fontSize="small" sx={{ ml: 1 }} />
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                display: "none",
                zIndex: 20,
                width: "50%",
                transform: "translate(-10%)",
              }}
            >
              <Paper sx={{ my: 2 }}>
                <nav
                  aria-label="secondary mailbox folders"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 32,
                  }}
                >
                  <List>
                    {/* List Number 1 in the item */}

                    {PajamaTakımı.map((item) => {
                      return (
                        <ListItem key={item.name}>
                          <Link
                            to={item.link}
                            style={{
                              display: "flex",
                              textDecoration: "none",
                              color: "inherit",
                              margin: 5,
                            }}
                          >
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src={item.photo} />
                            </ListItemAvatar>
                            <ListItemText
                              className="borderAnimation"
                              primary={item.name}
                            />
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                  <List>
                    {/* List Number 2 in the item */}
                    {PajamaTakımı2.map((item) => {
                      return (
                        <ListItem key={item.name}>
                          <Link
                            to={item.link}
                            style={{
                              display: "flex",
                              textDecoration: "none",
                              color: "inherit",
                              margin: 5,
                            }}
                          >
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src={item.photo} />
                            </ListItemAvatar>
                            <ListItemText
                              className="borderAnimation"
                              primary={item.name}
                            />
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                </nav>
              </Paper>
            </Box>
          </Box>

          {/* Sabahlik */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover .MuiBox-root": { display: "block" },
              mx: 2,
              width: "100px",
            }}
          >
            <Typography
              sx={{ fontSize: "13px", cursor: "pointer" }}
              variant="body1"
              color="inherit"
              className="borderAnimation"
            >
              Sabahlık
            </Typography>
          </Box>
          {/* Tutlum */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover .MuiBox-root": { display: "block" },
              mx: 1,
              width: "100px",
            }}
          >
            <Typography
              sx={{ fontSize: "13px", cursor: "pointer" }}
              variant="body1"
              color="inherit"
              className="borderAnimation"
            >
              TULUM
            </Typography>
          </Box>

          {/* Gecelik */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover .MuiBox-root": { display: "block" },
              mx: 1,
              width: "100px",
            }}
          >
            <Typography
              sx={{ fontSize: "13px", cursor: "pointer" }}
              variant="body1"
              color="inherit"
              className="borderAnimation"
            >
              GECELİK
            </Typography>
          </Box>

          {/* Erkek */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover .MuiBox-root": { display: "block" },
              mx: 1,
              width: "100px",
            }}
          >
            <Typography
              sx={{ fontSize: "13px", cursor: "pointer" }}
              variant="body1"
              color="inherit"
              className="borderAnimation"
            >
              Erkek
            </Typography>
            <ExpandMore fontSize="small" sx={{ ml: 1 }} />
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                display: "none",
                zIndex: 20,
                width: "25%",
                transform: "translate(-50%)",
              }}
            >
              <Paper sx={{ my: 2 }}>
                <nav
                  aria-label="secondary mailbox folders"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "flex-start",
                    gap: 32,
                  }}
                >
                  <List>
                    {/* List Number 1 in the item */}

                    {Erkek.map((item) => {
                      return (
                        <ListItem key={item.name}>
                          <Link
                            to={item.link}
                            style={{
                              display: "flex",
                              textDecoration: "none",
                              color: "inherit",
                              margin: 5,
                            }}
                          >
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src={item.photo} />
                            </ListItemAvatar>
                            <ListItemText
                              className="borderAnimation"
                              primary={item.name}
                            />
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                  <List></List>
                </nav>
              </Paper>
            </Box>
          </Box>

          {/* Cocuk */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover .MuiBox-root": { display: "block" },
              mx: 0,
              width: "100px",
            }}
          >
            <Typography
              sx={{ fontSize: "13px", cursor: "pointer" }}
              variant="body1"
              color="inherit"
              className="borderAnimation"
            >
              Cocuk
            </Typography>
          </Box>

          {/* ÇorapMenu */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover .MuiBox-root": { display: "block" },
              mx: 1,
              width: "100px",
            }}
          >
            <Typography
              sx={{ fontSize: "13px", cursor: "pointer" }}
              variant="body1"
              color="inherit"
              className="borderAnimation"
            >
              Çorap
            </Typography>
            <ExpandMore fontSize="small" sx={{ ml: 1 }} />
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                display: "none",
                zIndex: 20,
                width: "20%",
                transform: "translate(-50%)",
              }}
            >
              <Paper sx={{ my: 2 }}>
                <nav
                  aria-label="secondary mailbox folders"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "flex-start",
                    gap: 32,
                  }}
                >
                  <List>
                    {/* List Number 1 in the item */}

                    {ÇorapMenu.map((item) => {
                      return (
                        <ListItem key={item.name}>
                          <Link
                            to={item.link}
                            style={{
                              display: "flex",
                              textDecoration: "none",
                              color: "inherit",
                              margin: 5,
                            }}
                          >
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src={item.photo} />
                            </ListItemAvatar>
                            <ListItemText
                              className="borderAnimation"
                              primary={item.name}
                            />
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                  <List></List>
                </nav>
              </Paper>
            </Box>
          </Box>

          {/* Yeni Gelenler */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover .MuiBox-root": { display: "block" },
              mx: 1,
              width: "100px",
            }}
          >
            <Typography
              sx={{ fontSize: "13px", cursor: "pointer" }}
              variant="body1"
              color="inherit"
              className="borderAnimation"
            >
              Yeni Gelenler
            </Typography>
          </Box>

          {/* ÇOK SATANLAR❤️ */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ":hover .MuiBox-root": { display: "block" },
              mx: 0,
              width: "100px",
            }}
          >
            <Typography
              sx={{ fontSize: "12px" , cursor: "pointer"}}
              variant="body1"
              color="inherit"
              className="borderAnimation"
            >
              ÇOK SATANLAR❤️
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default PcListMenu;
