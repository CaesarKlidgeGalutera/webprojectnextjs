import "./globals.css";
import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";

export const metadata = {
  title: "Web App",
  description: "First Project in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
