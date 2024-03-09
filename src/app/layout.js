import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to my site",
  description: "Personal website of Brandon Phillips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-12">
          <a href={'/school'}>Home</a>
        </div>
        {children}
      </body>
    </html>
  );
}
