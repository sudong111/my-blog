import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/components/theme/theme-provider'
import Header from '@/app/components/layouts/header'
import {SideBar} from '@/app/components/layouts/side-bar'
import Img from '@/app/components/layouts/img'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "my-blog",
  description: "",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased body`}
      >
      <div className='wrapper'>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <SideBar/>
              <Img/>
              <div className='main'>
                  <Header/>
                  <div className='page'>
                      {children}
                  </div>
              </div>
          </ThemeProvider>
      </div>
      </body>
    </html>
  );
}
