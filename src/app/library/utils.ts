import type { Book } from "../lib/definitions";

const ITEMS_PER_PAGE = 10;

const url = "http://localhost:4000/books";

export async function fetchBooksPages(query: string) {
  try {
    const data = await fetchFilteredBooks(query);
    var count = 0;
    data.forEach((element: Book[]): number => {
      count += element.length;
      return count;
    });
    return Math.ceil(count / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch number of books pages.");
  }
}

export async function fetchTotalBooks(query: string) {
  try {
    const data = await fetchFilteredBooks(query);
    var count = 0;
    data.forEach((element: Book[]): number => {
      count += element.length;
      return count;
    });
    return count;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of books.");
  }
}

export async function fetchFilteredBooks(query: string): Promise<Book[][]> {
  try {
    const res = await fetch(url, {
      cache: "no-store",
    });
    const data = await res.json();

    const values: string[] = query
      .toLowerCase()
      .split(/(\s+)/)
      .filter((e: string) => e.trim().length > 0);

    const filteredBooks = data.filter((book: Book) => {
      return (
        filterString(book.title.toLowerCase(), values) ||
        filterString(book.author.toLowerCase(), values) ||
        filterString(book.year.toString(), values)
      );
    });

    var arrayOfArrays = [];
    for (var i = 0; i < filteredBooks.length; i += ITEMS_PER_PAGE) {
      arrayOfArrays.push(filteredBooks.slice(i, i + ITEMS_PER_PAGE));
    }
    return arrayOfArrays;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered books.");
  }
}

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
