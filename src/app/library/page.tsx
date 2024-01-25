import SearchBar from "@/app/ui/library/SearchBar";
import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import CustomPagination from "../ui/library/CustomPagination";
import { fetchBooksPages, fetchTotalBooks } from "./utils";
import BookList from "./BookList";
import { BookListSkeleton } from "../ui/skeletons";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchBooksPages(query);
  const totalBooks = await fetchTotalBooks(query);

  return (
    <div>
      <SearchBar />
      <Container>
        <Suspense key={query + currentPage} fallback={<BookListSkeleton />}>
          <BookList query={query} currentPage={currentPage} />
        </Suspense>
        <CustomPagination totalPages={totalPages} totalBooks={totalBooks} />
      </Container>
    </div>
  );
}
