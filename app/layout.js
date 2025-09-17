import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./styles/globals.css";
import "./styles/dark.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Quique - NextJS",
  description: "Proyecto personal de Quique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable}`}>
      <body className="flex flex-col min-h-screen">
        <NavBar />
        
        <main className="flex-grow px-4 py-20">
          <div className="max-w-screen-sm w-full mx-auto">
            {children}
          </div>
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
