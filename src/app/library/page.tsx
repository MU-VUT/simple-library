// Search bar
// List - Název knihy, Autor, Rok vydání, Dostupnost
// Pagination (max. XX na stránku)
"use client";

import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";
import fetchedData from "../../data";
import Container from "@mui/material/Container";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";

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

export default function Page() {
  const [filteredBooks, setFilteredBooks] = useState(data);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    const filtered = data.filter(({ title, author, year }) =>
      (title.toLowerCase() + author.toLowerCase() + year.toString()).includes(
        value
      )
    );
    setFilteredBooks(filtered);
  };

  const checkAvailability = (availability: number) => {
    if (availability > 0) {
      return <CheckCircleOutlineIcon style={{ fill: "green", fontSize: 16 }} />;
    } else {
      return <CancelIcon style={{ fill: "red", fontSize: 16 }} />;
    }
  };

  return (
    <div>
      <SearchBar handleFilter={handleFilter} />
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
        {filteredBooks.map((book) => (
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
      </Container>
    </div>
  );
}
