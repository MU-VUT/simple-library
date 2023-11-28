import fetchedData from "../../data";

export default function fetchPages(data: {}[]) {
  return Math.ceil(Object.keys(data).length / 10);
}
