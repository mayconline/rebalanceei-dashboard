import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { TOKENS } from '@/constants';
import type { TokenProps } from '@/types';

const handleGetAuthToken = () => {
  const accessToken = getCookie(TOKENS.ACCESS_TOKEN);
  const refreshToken = getCookie(TOKENS.REFRESH_TOKEN);

  return {
    accessToken,
    refreshToken,
  };
};

const handleSetAuthToken = ({ accessToken, refreshToken }: TokenProps) => {
  setCookie(TOKENS.ACCESS_TOKEN, accessToken);
  setCookie(TOKENS.REFRESH_TOKEN, refreshToken);
};

const handleDeleteAuthToken = () => {
  deleteCookie(TOKENS.ACCESS_TOKEN);
  deleteCookie(TOKENS.REFRESH_TOKEN);
};

export { handleGetAuthToken, handleSetAuthToken, handleDeleteAuthToken };
