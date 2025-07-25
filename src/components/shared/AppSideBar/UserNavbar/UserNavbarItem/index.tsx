import Link from 'next/link';
import { DropdownMenuItem, SidebarMenuButton } from '@/components/ui';

interface UserNavbarItemProps {
  href?: string | null;
  title: string;
  action?: string;
  icon: any;
  onLogout: () => void;
}

export const UserNavbarItem = ({
  href,
  title,
  action,
  icon: Icon,
  onLogout,
}: UserNavbarItemProps) => {
  return (
    <DropdownMenuItem key={title}>
      {!!href && (
        <SidebarMenuButton asChild>
          <Link href={href}>
            <Icon />
            <span>{title}</span>
          </Link>
        </SidebarMenuButton>
      )}

      {action === 'logout' && (
        <SidebarMenuButton onClick={onLogout}>
          <Icon />
          <span>{title}</span>
        </SidebarMenuButton>
      )}
    </DropdownMenuItem>
  );
};
