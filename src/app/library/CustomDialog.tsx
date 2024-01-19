"use client";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { BookType } from "../lib/definitions";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import CustomImage from "../ui/library/CustomImage";
import Box from "@mui/material/Box";
import { Button, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import * as isoFunc from "iso-3166-1-alpha-2";

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
  const checkAvailability = (availability: number) => {
    if (availability > 0) {
      return <CheckCircleOutlineIcon style={{ fill: "green", fontSize: 20 }} />;
    } else {
      return <CancelIcon style={{ fill: "red", fontSize: 20 }} />;
    }
  };

  const getFlag = (iso: string | null) => {
    if (iso) {
      return (
        <Image
          src={
            "http://purecatamphetamine.github.io/country-flag-icons/3x2/" +
            iso +
            ".svg"
          }
          alt=" "
          width={20}
          height={16}
        />
      );
    }
  };

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
      <DialogContent dividers style={{ minWidth: 500 }}>
        <Grid container spacing={3}>
          <Grid xs={6}>
            {/* <Suspense fallback={<p>Loading...</p>}> */}
            <CustomImage url={url} alt={book.title} base64={blurData} />
            {/* </Suspense> */}
          </Grid>
          <Grid xs={6}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption">Autor</Typography>
              <Typography>{book.author}</Typography>
            </Box>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Box>
                <Typography variant="caption">Počet stran</Typography>
                <Typography>{book.pages}</Typography>
              </Box>
              <Box>
                <Typography variant="caption">Rok vydání</Typography>
                <Typography>{book.year}</Typography>
              </Box>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ mb: 2 }}
              alignItems="center"
            >
              <Box>
                <Typography variant="caption">Jazyk</Typography>
                <Typography>{book.language}</Typography>
              </Box>
              <Box>
                <Stack direction="row" spacing={1}>
                  <Typography variant="caption">Země vydání</Typography>
                  {getFlag(isoFunc.getCode(book.country))}
                </Stack>
                <Typography>{book.country.replaceAll("/", " / ")}</Typography>
              </Box>
            </Stack>
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption">Dostupnost</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                {checkAvailability(book.availability)}
                <Typography>{book.availability} ks</Typography>
              </Stack>
            </Box>
            <Button
              variant="contained"
              onClick={() => {
                window.open(book.link, "_blank");
              }}
            >
              Více info
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </BootstrapDialog>
  );
}
