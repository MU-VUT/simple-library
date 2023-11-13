interface Books {
  title: string;
  author: string;
  pages: number;
  year: number;
}

const data: Books[] = [
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    pages: 209,
    year: 1958,
  },
  {
    title: "Fairy tales",
    author: "Hans Christian Andersen",
    pages: 784,
    year: 1836,
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    pages: 928,
    year: 1315,
  },
  {
    title: "The Epic Of Gilgamesh",
    author: "Unknown",
    pages: 160,
    year: -1700,
  },
];

export default data;
