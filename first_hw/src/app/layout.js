import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

      <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <main className="flex-grow p-4 container mx-auto">
      {children}</main><Footer />
    </div>
      </body>
    
    </html>
  );
}
