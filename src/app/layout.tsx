import type { Metadata } from 'next';
import { Geist, Geist_Mono,Bitcount_Grid_Double } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/components/theme/theme-provider'
import Header from '@/app/components/layouts/header'
import {SideBar} from '@/app/components/layouts/side-bar'
import Img from '@/app/components/layouts/img'
import Create from '@/app/components/posts/create'
import Intro from "@/app/components/layouts/intro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bitCount = Bitcount_Grid_Double({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-bit-count',
})

export const metadata: Metadata = {
  title: "my-blog",
  description: "",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bitCount.variable} antialiased body`}
      >
      <div className='wrapper'>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <SideBar/>
              <Header/>
              <div className='main'>
                  <div className='w-full'>
                      {children}
                  </div>
              </div>
          </ThemeProvider>
      </div>
      </body>
    </html>
  );
}
