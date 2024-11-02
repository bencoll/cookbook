import { Flowbite, ThemeModeScript } from 'flowbite-react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cookbook',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} container mx-auto h-screen`}>
        <Flowbite>{children}</Flowbite>
      </body>
    </html>
  );
}
