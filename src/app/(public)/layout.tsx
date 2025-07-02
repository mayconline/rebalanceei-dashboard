import { Welcome } from '@/components/shared';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-8">
      <Welcome />
      {children}
    </main>
  );
}
