// Search bar
// List - Název knihy, Autor, Rok vydání, Dostupnost
// Pagination (max. XX na stránku)
"use client";

import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";
import data from "../../data";
import Container from "@mui/material/Container";

export default function Page() {
  const [filteredBooks, setFilteredBooks] = useState(data);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const filtered = data.filter(
      ({ title, author, year }) =>
        title.toLowerCase().includes(value) ||
        author.toLowerCase().includes(value) ||
        year.toString().includes(value)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <SearchBar handleFilter={handleFilter} />
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            paddingBottom: 20,
            fontSize: 20,
          }}
        >
          <span>Název knihy:</span>
          <span>Autor:</span>
          <span>Počet stran:</span>
          <span>Roky vydání:</span>
        </div>
        {filteredBooks.map((book) => (
          <div
            key={book.title}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
            }}
          >
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.pages}</span>
            <span>{book.year}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
