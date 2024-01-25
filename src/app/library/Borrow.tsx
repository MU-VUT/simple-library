import { Box, Button, ButtonGroup, Tooltip } from "@mui/material";
import { BookType } from "../lib/definitions";
import fetchBorrowHanlder from "../api/postHandler";
import { useRouter } from "next/navigation";

export default function Borrow({ book }: { book: BookType }) {
  const router = useRouter();

  async function handleClick(borrow: boolean, book: BookType) {
    const { error } = await fetchBorrowHanlder(borrow, book);
    if (error) {
      window.alert(error);
    }
    router.refresh();
  }

  const BorrowButton = ({ availability }: { availability: number }) => {
    if (availability == 0) {
      return (
        <Tooltip placement="top" arrow title="Kniha již není dostupná">
          <span>
            <Button
              color="success"
              onClick={() => {
                handleClick(true, book);
              }}
              disabled
            >
              Výpujčka
            </Button>
          </span>
        </Tooltip>
      );
    } else {
      return (
        <Button
          color="success"
          onClick={() => {
            handleClick(true, book);
          }}
          disabled={book.availability == 0}
        >
          Výpůjčka
        </Button>
      );
    }
  };

  return (
    <Box mt={2}>
      <ButtonGroup color="secondary" variant="contained">
        <BorrowButton availability={book.availability} />
        <Button
          color="error"
          onClick={() => {
            handleClick(false, book);
          }}
        >
          Vrácení
        </Button>
      </ButtonGroup>
    </Box>
  );
}
