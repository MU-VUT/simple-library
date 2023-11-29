"use client";

import fetchedData from "../data";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import fetchPages from "@/app/library/fetchPages";
import Pagination from "@mui/material/Pagination";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface Books {
  title: string;
  author: string;
  pages: number;
  year: number;
  availability: number;
}

const data: Books[] = fetchedData.map(
  ({ title, author, pages, year, availability }) => ({
    title,
    author,
    pages,
    year,
    availability,
  })
);

export default function SearchBooks({ query }: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePaginationChange = (e: any, pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const checkAvailability = (availability: number) => {
    if (availability > 0) {
      return <CheckCircleOutlineIcon style={{ fill: "green", fontSize: 16 }} />;
    } else {
      return <CancelIcon style={{ fill: "red", fontSize: 16 }} />;
    }
  };

  const values: string[] = query
    .toLowerCase()
    .split(/(\s+)/)
    .filter((e: string) => e.trim().length > 0);

  const filterString = (data: string, values: string[]) => {
    var result = true;
    for (let i = 0; i < values.length; i++) {
      if (data.includes(values[i])) {
        result = true;
      } else {
        result = false;
      }
    }
    return result;
  };

  const filteredBooks: Books[] = data.filter((book) => {
    return (
      filterString(book.title.toLowerCase(), values) ||
      filterString(book.author.toLowerCase(), values) ||
      filterString(book.year.toString(), values)
    );
  });

  const setPagedBooks = (filteredBooks: Books[]) => {
    var size = 10;
    var arrayOfArrays = [];
    for (var i = 0; i < filteredBooks.length; i += size) {
      arrayOfArrays.push(filteredBooks.slice(i, i + size));
    }
    return arrayOfArrays;
  };

  const pagedBooks = setPagedBooks(filteredBooks);

  return (
    <>
      <div>
        {pagedBooks[
          searchParams.get("page") ? Number(searchParams.get("page")) - 1 : 0
        ].map((book) => (
          <div
            key={book.title}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            }}
          >
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.pages}</span>
            <span>{book.year}</span>
            <span>
              {checkAvailability(book.availability)} {book.availability}x
            </span>
          </div>
        ))}
      </div>
      <Pagination
        count={fetchPages(filteredBooks)}
        page={searchParams.get("page") ? Number(searchParams.get("page")) : 1}
        onChange={handlePaginationChange}
        defaultPage={1}
        variant="outlined"
        shape="rounded"
        style={{ justifyContent: "center", display: "flex", padding: 40 }}
      />
    </>
  );
}
