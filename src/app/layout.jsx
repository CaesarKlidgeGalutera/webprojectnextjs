import '@styles/globals.css'
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web App",
  description: "First Project in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-7xl min-h-screen my-0 mx-auto py-0 px-16 flex flex-col justify-between">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
