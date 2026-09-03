import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Aadhar Interlocks | Premium Interlocking Pavers in Kerala",
  description: "Manufacturer of high-density concrete interlocking pavers, drive-way blocks, and designer patio tiles in Areacode, Malappuram, Kerala.",
  keywords: "Interlock tiles Malappuram, Aadhar Interlock Areacode, Best interlocking bricks Kerala",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased font-sans scroll-smooth`}
    >
      <body className={`min-h-full flex flex-col bg-slate-50 text-slate-900 ${poppins.className}`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
