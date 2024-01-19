import StyledGrid from "./library/StyledGrid";

export function BookListSkeleton() {
  return (
    <div>
      <StyledGrid
        container
        sx={{
          height: 40,
        }}
      ></StyledGrid>
      <StyledGrid
        container
        sx={{
          height: 40,
        }}
      ></StyledGrid>
      <StyledGrid
        container
        sx={{
          height: 40,
        }}
      ></StyledGrid>
    </div>
  );
}
