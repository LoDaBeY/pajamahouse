import { Search } from "@mui/icons-material";
import { Box, Button, Container, InputBase, styled } from "@mui/material";
import React from "react";
const SearchInput = styled(InputBase)({
  flex: 1,
  marginLeft: "8px",
});
function SearchBar() {
  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <SearchInput
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <Button variant="outlined" startIcon={<Search />}>
          Search
        </Button>
      </Box>
    </Container>
  );
}

export default SearchBar;
