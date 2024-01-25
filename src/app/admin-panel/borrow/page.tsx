import SearchBar from "@/app/ui/library/SearchBar";
import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import CustomPagination from "../../ui/library/CustomPagination";
import { fetchBooksPages, fetchTotalBooks } from "../../library/utils";
import BookList from "../../library/BookList";
import { BookListSkeleton } from "../../ui/skeletons";
import { Typography, Box } from "@mui/material";

export default async function BorrowBookPage({
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
      <Box mt={2} mb={2} display="flex" justifyContent="center">
        <Typography variant="h4">Panel pro výpůjčení/vrácení knihy</Typography>
      </Box>
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
