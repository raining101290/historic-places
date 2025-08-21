import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Historical Places',
  description: 'Explore and mark historical places as visited',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <header className="sticky top-0 z-10 backdrop-blur bg-white/60 border-b border-gray-200 shadow-sm">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <h1 className="text-xl font-semibold italic">Historical Places</h1>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-6">
            {children}
          </main>
          <footer className="backdrop-blur bg-white/60 border-t border-gray-200">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600">
              &copy; {new Date().getFullYear()} Fun Project.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
