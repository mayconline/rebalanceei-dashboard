'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui';
import { SIDEBAR_ITEMS } from '@/constants';

export const MainNavbar = () => {
  const pathname = usePathname();
  const { mainNav } = SIDEBAR_ITEMS;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{mainNav.label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {mainNav.items.map(({ href, title, icon: Icon, childrens }) => (
            <SidebarMenuItem key={title}>
              <SidebarMenuButton
                asChild
                isActive={pathname === href}
                tooltip={title}
              >
                <Link href={href}>
                  <Icon />
                  <span>{title}</span>
                </Link>
              </SidebarMenuButton>

              {childrens?.length && (
                <SidebarMenuSub>
                  {childrens.map(
                    ({ href: subRef, title: subTitle, icon: SubIcon }) => (
                      <SidebarMenuSubItem key={subTitle}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === subRef}
                        >
                          <Link href={subRef}>
                            <SubIcon />
                            <span>{subTitle}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    )
                  )}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
