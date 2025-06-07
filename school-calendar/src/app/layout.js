import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: 'US School Calendar 2025-2026',
  description: 'Comprehensive US school calendar with holidays by state',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     <Head>
      <title>US School Calendar 2025-26 | Public School Holidays</title>
      <meta name="description" content="Official school holidays for 2025-26 by district and state. Easily view break dates and start/end schedules." />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://schoolcalendar.net/" />
    </Head>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
         <Footer />
      </body>
    </html>
  );
}
