import { ThemeSwitch, Welcome } from '@/components/shared';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <ThemeSwitch />
      <Welcome />
      {children}
    </main>
  );
}
