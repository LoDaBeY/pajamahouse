import { Box, Container, Stack, Typography } from "@mui/material";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const footerItems = [
  {
    BigTitle: "KADIN EV GİYİM",
    littleTitles: [
      { title: "Pijama Takımı", link: "Pijama-Takımı" },
      { title: "Peluş Pijama Takımı", link: "Peluş-Pijama-Takımı" },
      { title: "Tulum Pijama", link: "Tulum-Pijama" },
      { title: "Sabahlık", link: "Sabahlık" },
      { title: "Yeni Gelenler", link: "Yeni-Gelenler" },
    ],
  },
  {
    BigTitle: "KURUMSAL",
    littleTitles: [
      { title: "Hakkımızda", link: "hakkimizda" },
      { title: "Teslimat Koşulları", link: "teslimat-kosullari" },
      { title: "İptal & İade & Değişim", link: "iptal-iade-degisim" },
      { title: "Gizlilik ve Güvenlik", link: "gizlilik-ve-guvenlik" },
      { title: "Üyelik Sözleşmesi", link: "uyelik-sozlesmesi" },
      { title: "Satış Sözleşmesi", link: "satis-sozlesmesi" },
      { title: "Blog", link: "blog" },
    ],
  },
  {
    BigTitle: "YARDIM",
    littleTitles: [
      { title: "İletişim", link: "iletisim" },
      { title: "Yeni Ürünler", link: "yeni-urunler" },
      { title: "İndirimdekiler", link: "indirimdekiler" },
      { title: "Müşteri Hizmetleri", link: "musteri-hizmetleri" },
      { title: "Sepetim", link: "sepetim" },
    ],
  },
  {
    BigTitle: "ÜYE",
    littleTitles: [
      { title: "Yeni Üyelik", link: "yeni-uyelik" },
      { title: "Üye Girişi", link: "uye-girisi" },
    ],
  },
];

function Footer() {
  const theme = useTheme();
  return (
    <Box sx={{}}>
      <Container
        sx={{
          my: 5,
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            alignItems: "center",
          },
        }}
      >
        <Stack
          sx={{
            width: "300px",
            gap: 2,
            alignItems: { xs: "center", sm: "center", md: "flex-start" },
            mb: { xs: 3, sm: 3, md: 0 },
            mr: { xs: 0, md: 3 },
          }}
        >
          <Link to={"/"}>
            <img
              style={{ width: "230px" }}
              src="https://www.pijamaevi.com/Data/EditorFiles/pijamaevi/logo.svg"
              alt="PijamaeviFooter"
            />
          </Link>
          <Typography
            sx={{ textAlign: { xs: "center", sm: "center", md: "inherit" } }}
            variant="body2"
            color="inherit"
          >
            {" "}
            Sosyal medyaya özel indirim ve kampanyalardan ilk sen haberdar ol,
            fırsatları yakala!
          </Typography>

          <Stack alignItems={"center"} direction={"row"} gap={2}>
            <Link to={""}>
              <FacebookSharpIcon fontSize="large" color="primary" />
            </Link>
            <Link to={""}>
              <InstagramIcon fontSize="large" color="error" />
            </Link>{" "}
            <Link to={""}>
              <WhatsAppIcon fontSize="large" color="success" />
            </Link>
            <Link to={""}>
              <LinkedInIcon fontSize="large" color="info" />
            </Link>{" "}
          </Stack>
        </Stack>

        <Box
          sx={{
            maxWidth: "100%",
            flexGrow: 1,
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {footerItems.map((item, index) => (
            <Stack key={index} gap={2}>
              <Typography variant="h6" color="inherit" fontWeight={"700"}>
                {item.BigTitle}
              </Typography>

              <Stack>
                {item.littleTitles.map((littleTitle, innerIndex) => (
                  <Link
                    key={innerIndex}
                    style={{
                      textDecoration: "none",
                      color: theme.palette.mode === "light" ? "black" : "white",
                    }}
                    to={littleTitle.link}
                  >
                    <Typography variant="caption" color="inherit">
                      {littleTitle.title}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Stack>
          ))}
        </Box>
      </Container>

      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          py: 1,
          bgcolor: theme.palette.neutral.main,
        }}
      >
        <Typography variant="caption" color="inherit">
          Copyright © 2024
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.mode === "light" ? "Highlight" : "orange",
              margin: 3,
            }}
            to={"https://khaled-ghonim-trans-portfolio.web.app/"}
          >
            KhaledGhonim.com
          </Link>
          tüm hakları saklıdır.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
