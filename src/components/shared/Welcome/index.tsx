import Image from 'next/image';
import Logo from '@/assets/img/logo.svg';

export const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Image src={Logo} alt="Rebalanceei Logo" width={192} height={195} />
      <span className="text-3xl text-title-primary opacity-50">
        Seja Bem Vindo
      </span>
      <h1 className="font-bold text-title-primary text-5xl">Rebalanceei</h1>
    </section>
  );
};
