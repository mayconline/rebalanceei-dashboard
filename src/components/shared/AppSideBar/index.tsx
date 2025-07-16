import { MainNavbar } from '@/components/shared/AppSideBar/MainNavbar';
import { OtherNavbar } from '@/components/shared/AppSideBar/OtherNavbar';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from '@/components/ui';

export const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <MainNavbar />
        <OtherNavbar />
      </SidebarContent>
    </Sidebar>
  );
};
