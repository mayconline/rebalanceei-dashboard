import { AppSideBar } from '@/components/shared';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui';
import { handleGetSidebarOpen } from '@/services/cookies';

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { defaultOpenSidebar } = await handleGetSidebarOpen();

  return (
    <SidebarProvider defaultOpen={defaultOpenSidebar}>
      <AppSideBar />

      <SidebarInset>
        <nav className="flex items-center justify-end">
          <SidebarTrigger className="md:hidden" />
        </nav>
        <section className="p-4">{children}</section>
      </SidebarInset>
    </SidebarProvider>
  );
}
