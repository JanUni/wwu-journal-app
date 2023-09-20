import NavMenu from "@/components/nav-menu/nav-menu.component";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fancy Journal App",
  description: "Developed for Education Purposes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
