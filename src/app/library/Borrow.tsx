import { Box, Button, ButtonGroup } from "@mui/material";
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

  return (
    <Box mt={2}>
      <ButtonGroup color="secondary" variant="contained">
        <Button
          color="success"
          onClick={() => {
            handleClick(true, book);
          }}
        >
          Výpujčka
        </Button>
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
