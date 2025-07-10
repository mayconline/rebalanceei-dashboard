import { ThemeSwitch } from '@/components/shared';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-row gap-4 bg-background-secondary">
      <aside className="border-sidebar-custom-border-primary border-r bg-sidebar-custom-primary px-4 py-2">
        Sidebar
        <ThemeSwitch />
      </aside>
      <section className="h-screen w-full overflow-auto bg-background-secondary px-4 py-2">
        {children}
      </section>
    </main>
  );
}
