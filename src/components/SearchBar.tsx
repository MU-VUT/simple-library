import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import theme from "./ThemeRegistry/theme";
import InputAdornment from "@mui/material/InputAdornment";

const SearchBar = ({ handleFilter }: any) => (
  <form style={{ padding: 40, textAlign: "center" }}>
    <TextField
      id="search-bar"
      className="text"
      onChange={handleFilter}
      label="Hledat..."
      variant="outlined"
      placeholder="Název knihy, autora, vydání"
      fullWidth
      focused
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ fill: theme.palette.primary.main }} />
          </InputAdornment>
        ),
      }}
    />
  </form>
);

export default SearchBar;
