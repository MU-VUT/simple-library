"use client";

import * as React from "react";
import StyledGrid from "../ui/library/StyledGrid";
import Grid from "@mui/material/Unstable_Grid2";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import CustomDialog from "./CustomDialog";
import { BookType } from "../lib/definitions";

export default function Book({
  book,
  blurData,
}: {
  book: BookType;
  blurData: string;
}) {
  const [open, setOpen] = React.useState(false);

  const checkAvailability = (availability: number) => {
    if (availability > 0) {
      return <CheckCircleOutlineIcon style={{ fill: "green", fontSize: 16 }} />;
    } else {
      return <CancelIcon style={{ fill: "red", fontSize: 16 }} />;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <StyledGrid container key={book.title} onClick={handleClickOpen}>
        <Grid xs={6} md={5}>
          {book.title}
        </Grid>
        <Grid xs={6} md={5}>
          {book.author}
        </Grid>
        <Grid xs={6} md={1}>
          {book.year}
        </Grid>
        <Grid xs={6} md={1}>
          {checkAvailability(book.availability)} {book.availability}x
        </Grid>
      </StyledGrid>
      <CustomDialog
        open={open}
        handleClose={handleClose}
        book={book}
        blurData={blurData}
      />
    </React.Fragment>
  );
}
