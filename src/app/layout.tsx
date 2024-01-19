import NavBar from "@/components/NavBar";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import Logout from "./admin-panel/logout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple library app",
  description: "Library app for small school library",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <NavBar sessionActive={session ? true : false} />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
