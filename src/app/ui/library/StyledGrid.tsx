"use client";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.03)",
  padding: 10,
  marginBottom: 10,
  border: "1px solid rgba(0, 0, 0, 0.05)",
  borderRadius: 10,
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.2);",
    cursor: "pointer",
  },
}));

export default StyledGrid;
