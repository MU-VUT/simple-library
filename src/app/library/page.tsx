// Search bar
// List - Název knihy, Autor, Rok vydání, Dostupnost
// Pagination (max. XX na stránku)

import SearchBar from "@/components/SearchBar";
import React, { Suspense, useState } from "react";
import Container from "@mui/material/Container";
import SearchBooks from "@/components/SearchBooks";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <SearchBar />
      <Container>
        <SearchBooks query={query} />
      </Container>
    </div>
  );
}
