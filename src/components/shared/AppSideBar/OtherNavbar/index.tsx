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
import { useTheme } from '@/hooks';

export const OtherNavbar = () => {
  const { handleToggleTheme } = useTheme();
  const { otherNav } = SIDEBAR_ITEMS;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{otherNav.label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {otherNav.items.map(({ href, title, action, icon: Icon }) => (
            <SidebarMenuItem key={title}>
              {!!href && (
                <SidebarMenuButton asChild tooltip={title}>
                  <Link href={href}>
                    <Icon />
                    <span>{title}</span>
                  </Link>
                </SidebarMenuButton>
              )}

              {action === 'toggleTheme' && (
                <SidebarMenuButton onClick={handleToggleTheme} tooltip={title}>
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
