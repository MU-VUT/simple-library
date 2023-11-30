import { fetchFilteredBooks } from "./utils";
import StyledGrid from "../ui/library/StyledGrid";
import Grid from "@mui/material/Grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { Book } from "../lib/definitions";

const checkAvailability = (availability: number) => {
  if (availability > 0) {
    return <CheckCircleOutlineIcon style={{ fill: "green", fontSize: 16 }} />;
  } else {
    return <CancelIcon style={{ fill: "red", fontSize: 16 }} />;
  }
};

export default async function BookList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const pagedBooks: Book[][] = await fetchFilteredBooks(query);

  return (
    <div>
      {pagedBooks[currentPage - 1].map((book: any) => (
        <StyledGrid container key={book.title}>
          <Grid xs={6} md={4}>
            {book.title}
          </Grid>
          <Grid xs={6} md={4}>
            {book.author}
          </Grid>
          <Grid xs={4} md={2}>
            {book.pages}
          </Grid>
          <Grid xs={4} md={1}>
            {book.year}
          </Grid>
          <Grid xs={4} md={1}>
            {checkAvailability(book.availability)} {book.availability}x
          </Grid>
        </StyledGrid>
      ))}
    </div>
  );
}
