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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            paddingBottom: 20,
            fontSize: 20,
          }}
        >
          <span>Název knihy:</span>
          <span>Autor:</span>
          <span>Počet stran:</span>
          <span>Roky vydání:</span>
          <span>Dostupnost:</span>
        </div>
        <SearchBooks query={query} />
      </Container>
    </div>
  );
}
