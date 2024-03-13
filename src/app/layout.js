import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "brandonphillips.cloud",
  description: "Personal website of Brandon Phillips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-800 p-12">
          <a href='/school'>Home</a>
        </div>
        {children}
      </body>
    </html>
  );
}
