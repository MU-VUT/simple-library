"use client";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../../components/ThemeRegistry/theme";
import InputAdornment from "@mui/material/InputAdornment";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const [debouncedFilter] = useDebouncedCallback(handleFilter, 300);

  return (
    <form style={{ padding: 40, textAlign: "center" }}>
      <TextField
        id="search-bar"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          debouncedFilter(e.target.value);
        }}
        label="Hledat..."
        variant="outlined"
        placeholder="Název knihy, autora, rok vydání"
        fullWidth
        focused
        defaultValue={searchParams.get("query")?.toString()}
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
}
