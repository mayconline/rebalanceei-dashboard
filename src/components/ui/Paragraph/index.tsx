import type { ComponentProps, ReactNode } from 'react';
import { mergeClass } from '@/utils';

export enum ParagraphAs {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  P = 'p',
}

export enum ParagraphSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  SemiLarge = 'semi-large',
  ExtraLarge = 'extra-large',
  MegaLarge = 'mega-large',
  GigaLarge = 'giga-large',
}

interface ParagraphProps extends ComponentProps<'p'> {
  children: ReactNode;
  className?: string;
  size?: ParagraphSize;
  as?: ParagraphAs;
}

export const Paragraph = ({
  children,
  className,
  size = ParagraphSize.Medium,
  as = ParagraphAs.P,
  ...props
}: ParagraphProps) => {
  const Component = as;

  const ParagraphClassesSize = {
    [ParagraphSize.Small]: 'text-sm',
    [ParagraphSize.Medium]: 'text-base',
    [ParagraphSize.Large]: 'text-lg',
    [ParagraphSize.SemiLarge]: 'text-xl',
    [ParagraphSize.ExtraLarge]: 'text-2xl',
    [ParagraphSize.MegaLarge]: 'text-3xl',
    [ParagraphSize.GigaLarge]: 'text-5xl',
  };

  return (
    <Component
      className={mergeClass(ParagraphClassesSize[size], className)}
      title={children as string}
      {...props}
    >
      {children}
    </Component>
  );
};
