import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeSwitch } from '@/components/shared';
import { Toaster } from '@/components/ui/toaster';
import { METADATA, VIEWPORT } from '@/constants';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = METADATA;
export const viewport: Viewport = VIEWPORT;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeSwitch />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
