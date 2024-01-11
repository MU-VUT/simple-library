"use client";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { BookType } from "../lib/definitions";
import { Suspense } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { BookImageSkeleton } from "../ui/skeletons";
import CustomImage from "../ui/library/CustomImage";

// TO-DO
// - UI of component
// - Skeletons for loading - Suspense not working!!!

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
}));

export default function CustomDialog({
  open,
  handleClose,
  book,
  blurData,
}: {
  open: boolean;
  handleClose: { (): any };
  book: BookType;
  blurData: string;
}) {
  const url =
    "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" +
    book.imageLink;

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          pr: 8,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
        id="customized-dialog-title"
      >
        {book.title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.primary.main,
          backgroundColor: (theme) => theme.palette.background.default,
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.2);",
            cursor: "pointer",
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers style={{ minWidth: 400 }}>
        <Grid container>
          <Grid xs={6} md={6}>
            {/* <Suspense fallback={<p>Loading...</p>}> */}
            <CustomImage url={url} alt={book.title} base64={blurData} />
            {/* </Suspense> */}
          </Grid>
          <Grid xs={6} md={6}>
            <Typography gutterBottom>{book.author}</Typography>
            <Typography gutterBottom>{book.pages}</Typography>
            <Typography gutterBottom>{book.availability}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </BootstrapDialog>
  );
}
