import * as React from "react";
import { fetchFilteredBooks, getBlurData } from "./utils";
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
  var blurDataArr: string[] = await Promise.all(
    pagedBooks[currentPage - 1]?.map(async (book: BookType) => {
      const imageUrl =
        "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" +
        book.imageLink;
      const { base64 } = await getBlurData(imageUrl);
      return base64;
    })
  );

  console.log(blurDataArr);

  return (
    <div>
      {pagedBooks[currentPage - 1]?.map((book: BookType, index) => (
        <Book key={book.title} book={book} blurData={blurDataArr[index]} />
      ))}
    </div>
  );
}
