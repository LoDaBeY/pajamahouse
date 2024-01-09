import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  InputBase,
  styled,
  useTheme,
} from "@mui/material";
import { Form } from "react-router-dom";
const SearchInput = styled(InputBase)({
  flex: 1,
  marginLeft: "8px",
});
function SearchBar() {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          p: "5px",
          border: "1px solid #eeeeee",
          borderRadius: "10px",
        }}
      >
        <Form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <SearchInput
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <Button
            type="submit"
            sx={{
              bgcolor: "#e35252",
              color: theme.palette.mode === "light" ? "whitesmoke" : "white",
              ":hover": { bgcolor: "#e35252" },
            }}
            variant="contained"
            startIcon={<Search />}
          >
            Search
          </Button>
        </Form>
      </Box>
    </Container>
  );
}

export default SearchBar;
