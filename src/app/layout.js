import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  keywords: "Interlock tiles Malappuram, Aadhar Interlock Areacode, Best interlocking bricks Kerala, Paving Blocks, Concrete Tiles",
  openGraph: {
    title: "Aadhar Interlocks | Premium Interlocking Pavers",
    description: "Discover high-density concrete interlocking pavers and designer patio tiles by Aadhar Interlocks.",
    url: "https://aadharinterlocks.com", // Replace with real URL later
    siteName: "Aadhar Interlocks",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Aadhar Interlocks Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadhar Interlocks | Premium Pavers",
    description: "Kerala's strongest interlocking bricks and paver blocks.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
