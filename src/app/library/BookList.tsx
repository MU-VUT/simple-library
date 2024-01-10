import * as React from "react";
import { fetchFilteredBooks } from "./utils";
import { BookType } from "../lib/definitions";
import Book from "./Book";
import CustomDialog from "./CustomDialog";
// TODO: Dialog okno s detaily knihy (název, autor, obrázek se suspense(fetch z githubu), počet stran, rok vydání, jazyk, země, link, dostupnost)
// https://mui.com/material-ui/react-dialog/

export default async function BookList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const pagedBooks: BookType[][] = await fetchFilteredBooks(query);

  return (
    <div>
      {pagedBooks[currentPage - 1]?.map((book: BookType) => (
        <Book key={book.title} book={book} />
      ))}
    </div>
  );
}
