'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui';
import { SIDEBAR_ITEMS } from '@/constants';
import { useAuth, useGetUser } from '@/hooks';
import { UserNavbarItem } from './UserNavbarItem';
import { UserNavbarTrigger } from './UserNavbarTrigger';

export const UserNavbar = () => {
  const { handleLogout } = useAuth();
  const { user, isPending } = useGetUser();
  const { isMobile } = useSidebar();
  const { userNav } = SIDEBAR_ITEMS;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <UserNavbarTrigger
            avatar={null}
            email={user?.email}
            isLoading={isPending}
          />

          <DropdownMenuContent
            align="end"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            {userNav.items.map(({ href, title, action, icon: Icon }) => (
              <UserNavbarItem
                action={action}
                href={href}
                icon={Icon}
                key={title}
                onLogout={handleLogout}
                title={title}
              />
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
