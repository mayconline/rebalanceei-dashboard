import { Welcome } from '@/components/shared';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 md:flex-row-reverse">
      <Welcome />
      {children}
    </main>
  );
}
