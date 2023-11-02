import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Home() {
  return (
    <Container sx={{ marginTop: 15 }}>
      <Typography variant="h1" align="center" sx={{ margin: 5 }}>
        Simple library
      </Typography>
      <Typography variant="h3" align="center">
        Evidence knih jednoduše
      </Typography>
    </Container>
  );
}
