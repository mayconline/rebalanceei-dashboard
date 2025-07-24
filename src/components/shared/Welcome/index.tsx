import Image from 'next/image';
import Logo from '@/assets/img/logo.svg';
import { Paragraph, ParagraphAs, ParagraphSize } from '@/components/ui';

export const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Image alt="Rebalanceei Logo" height={195} src={Logo} width={192} />
      <Paragraph
        className="text-title-primary opacity-50"
        size={ParagraphSize.MegaLarge}
      >
        Seja Bem Vindo
      </Paragraph>
      <Paragraph
        as={ParagraphAs.H1}
        className="font-bold text-title-primary"
        size={ParagraphSize.GigaLarge}
      >
        Rebalanceei
      </Paragraph>
    </section>
  );
};
