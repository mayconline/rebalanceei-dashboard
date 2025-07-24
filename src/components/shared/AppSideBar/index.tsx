import { MainNavbar } from '@/components/shared/AppSideBar/MainNavbar';
import { OtherNavbar } from '@/components/shared/AppSideBar/OtherNavbar';
import { WalletSwitcher } from '@/components/shared/AppSideBar/WalletSwitcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui';

export const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTrigger />
        <SidebarSeparator />
        <WalletSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <MainNavbar />
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <OtherNavbar />
      </SidebarFooter>
    </Sidebar>
  );
};
