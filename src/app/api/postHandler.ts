// // https://dev.to/this-is-learning/readwrite-on-local-json-file-with-nextjs-part-51-8gg
// // https://www.freecodecamp.org/news/json-server-for-frontend-development/?fbclid=IwAR2sx5MaCUE0vuU_dmDppON9E7HhEA79ydtDw5gIah985gSj3WySSVOcoO0

import { BookType } from "../lib/definitions";

//  export default function postBorrowHandler(req: Request, res: Response) {
//    if (req.method === "GET") {
//      // Read the existing data from the JSON file
//      const jsonData = await fsPromises.readFile(dataFilePath);
//      const objectData = JSON.parse(jsonData);
//      res.status(200).json(objectData);
//    }
//  }

const url = "http://localhost:4000/books/";

export default async function fetchBorrowHanlder(
  borrow: boolean,
  book: BookType
) {
  if (borrow) {
    if (book.availability > 0) {
      book.availability--;
    } else {
      const error = "Kniha není dostupná";
      return { error };
    }
  } else {
    book.availability++;
  }
  const res = await fetch(url + book.title, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      author: book.author,
      country: book.country,
      imageLink: book.imageLink,
      language: book.language,
      link: book.link,
      pages: book.pages,
      title: book.title,
      year: book.year,
      availability: book.availability,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  } else {
    const data = await res.json();
    return data;
  }
}
