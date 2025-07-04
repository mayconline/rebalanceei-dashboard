import Image from 'next/image';
import Logo from '@/assets/img/logo.svg';
import { Paragraph, ParagraphAs, ParagraphSize } from '@/components/ui';

export const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Image src={Logo} alt="Rebalanceei Logo" width={192} height={195} />
      <Paragraph
        size={ParagraphSize.MegaLarge}
        className="text-title-primary opacity-50"
      >
        Seja Bem Vindo
      </Paragraph>
      <Paragraph
        as={ParagraphAs.H1}
        size={ParagraphSize.GigaLarge}
        className="font-bold text-title-primary"
      >
        Rebalanceei
      </Paragraph>
    </section>
  );
};
