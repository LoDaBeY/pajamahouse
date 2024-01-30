import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import CampaignSharpIcon from "@mui/icons-material/CampaignSharp";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import RedeemSharpIcon from "@mui/icons-material/RedeemSharp";

const NewIconsSectionItems = [
  {
    title: "Online Ödemelerde Kargo 29,99 TL",
    icon: (
      <CampaignSharpIcon
        sx={{ color: "white", borderRadius: "20px", fontSize: "30px" }}
      />
    ),
    Wishes: "Dilediğiniz her yerden güvenli alışveriş keyfini çıkarın",
  },
  {
    title: "Hızlı Teslimat ve Güvenilir Alışveriş",
    icon: (
      <CachedSharpIcon
        sx={{ color: "white", borderRadius: "20px", fontSize: "30px" }}
      />
    ),
    Wishes: "Alışverişin keyfini hızlı teslimat ve güvenilirlikle yaşayın",
  },
  {
    title: "Özel İndirimler ve Hediyeler",
    icon: (
      <RedeemSharpIcon
        sx={{ color: "white", borderRadius: "20px", fontSize: "30px" }}
      />
    ),
    Wishes:
      "Özel indirimler ve hediyelerle alışverişinizi daha ekonomik hale getirin",
  },
];

function IconsSeaction() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        my: 4,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {NewIconsSectionItems.map((item) => {
        return (
          <Box
            key={item.title}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            <IconButton
              sx={{
                bgcolor: theme.palette.mode === "light" ? "black" : "white",
                ".MuiSvgIcon-root": {
                  color: theme.palette.mode === "light" ? "white" : "black",
                },
                ":hover": {
                  bgcolor: theme.palette.mode === "light" ? "black" : "white",
                },
              }}
              aria-label=""
            >
              {item.icon}
            </IconButton>

            <Stack gap={1}>
              <Typography variant="body1" color="inherit">
                {item.title}
              </Typography>
              <Typography variant="caption" color="inherit">
                {item.Wishes}
              </Typography>
            </Stack>
          </Box>
        );
      })}
    </Container>
  );
}

export default IconsSeaction;
