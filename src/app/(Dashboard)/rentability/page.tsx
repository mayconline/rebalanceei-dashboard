import { redirect } from 'next/navigation';
import { ROUTES_PATH } from '@/constants';

export default function RentabilityPage() {
  return redirect(ROUTES_PATH.RENTABILITY_WALLET);
}
