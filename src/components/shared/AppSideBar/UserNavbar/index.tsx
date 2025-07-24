'use client';

import Link from 'next/link';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui';
import { SIDEBAR_ITEMS } from '@/constants';
import { useAuth } from '@/hooks';

export const UserNavbar = () => {
  const { handleLogout } = useAuth();
  const { userNav } = SIDEBAR_ITEMS;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{userNav.label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {userNav.items.map(({ href, title, action, icon: Icon }) => (
            <SidebarMenuItem key={title}>
              {!!href && (
                <SidebarMenuButton asChild>
                  <Link href={href}>
                    <Icon />
                    <span>{title}</span>
                  </Link>
                </SidebarMenuButton>
              )}

              {action === 'logout' && (
                <SidebarMenuButton onClick={handleLogout}>
                  <Icon />
                  <span>{title}</span>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
