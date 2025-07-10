import type { Metadata, Viewport } from 'next';
import { Titillium_Web } from 'next/font/google';
import './globals.css';
import { Notification } from '@/components/ui';
import { METADATA, VIEWPORT } from '@/constants';

const titillium = Titillium_Web({
  variable: '--font-titillium',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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
      <body className={`${titillium.variable} antialiased`}>
        {children}
        <Notification />
      </body>
    </html>
  );
}
