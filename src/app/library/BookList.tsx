import * as React from "react";
import { fetchFilteredBooks, getBlurData } from "./utils";
import { BookType } from "../lib/definitions";
import Book from "./Book";

export default async function BookList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const pagedBooks: BookType[][] = await fetchFilteredBooks(query);
  if (pagedBooks.length !== 0) {
    var blurDataArr: string[] = await Promise.all(
      pagedBooks[currentPage - 1].map(async (book: BookType) => {
        const imageUrl =
          "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" +
          book.imageLink;
        const { base64 } = await getBlurData(imageUrl);
        return base64;
      })
    );
  }

  return (
    <div>
      {pagedBooks[currentPage - 1]?.map((book: BookType, index) => (
        <Book key={book.title} book={book} blurData={blurDataArr[index]} />
      ))}
    </div>
  );
}
