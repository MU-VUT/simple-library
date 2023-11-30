"use client";

import Pagination from "@mui/material/Pagination";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function CustomPagination({
  totalPages,
  totalBooks,
}: {
  totalPages: number;
  totalBooks: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { replace } = useRouter();

  const handlePaginationChange = (e: any, pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <div
        style={{ justifyContent: "center", display: "flex", paddingTop: 20 }}
      >
        <span>Celkem {totalBooks} nalezených knih</span>
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePaginationChange}
        defaultPage={1}
        variant="outlined"
        shape="rounded"
        style={{
          justifyContent: "center",
          display: "flex",
          padding: "10px 0 30px 0",
        }}
      />
    </div>
  );
}
