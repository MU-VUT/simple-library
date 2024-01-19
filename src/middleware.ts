export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/admin-panel", "/admin-panel/borrow", "/admin-panel/edit-library"],
};
