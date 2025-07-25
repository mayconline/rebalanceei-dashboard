import { EllipsisVerticalIcon } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenuTrigger,
  Paragraph,
  ParagraphSize,
  SidebarMenuButton,
  SidebarMenuSkeleton,
} from '@/components/ui';

interface UserNavbarTriggerProps {
  email?: string;
  avatar?: string | null;
  isLoading?: boolean;
}

export const UserNavbarTrigger = ({
  email,
  avatar,
  isLoading,
}: UserNavbarTriggerProps) => {
  return isLoading ? (
    <SidebarMenuSkeleton showIcon />
  ) : (
    <DropdownMenuTrigger asChild>
      <SidebarMenuButton
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        size="lg"
      >
        <Avatar className="in-data-[state=expanded]:size-6 transition-[width,height] duration-200 ease-in-out">
          {avatar && <AvatarImage alt={email} src={avatar} />}
          <AvatarFallback>{email?.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="ms-1 grid flex-1 text-left text-sm leading-tight">
          <Paragraph className="truncate" size={ParagraphSize.Small}>
            {email}
          </Paragraph>
        </div>
        <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-accent/50 in-[[data-slot=dropdown-menu-trigger]:hover]:bg-transparent">
          <EllipsisVerticalIcon className="size-5 opacity-40" size={20} />
        </div>
      </SidebarMenuButton>
    </DropdownMenuTrigger>
  );
};
