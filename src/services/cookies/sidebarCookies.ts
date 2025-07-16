'use server';

import { cookies } from 'next/headers';
import { SIDEBAR_COOKIE_NAME } from '@/constants';

const handleGetSidebarOpen = async () => {
  const defaultOpenSidebar =
    (await cookies()).get(SIDEBAR_COOKIE_NAME)?.value === 'true';

  return {
    defaultOpenSidebar,
  };
};

const handleSetSidebarOpen = async (openState: boolean) => {
  (await cookies()).set(SIDEBAR_COOKIE_NAME, String(openState));
};

export { handleGetSidebarOpen, handleSetSidebarOpen };
