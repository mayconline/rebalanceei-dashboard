'use client';

import { type ComponentProps, useEffect, useState } from 'react';
import { Input } from '@/components/ui';
import { formatMoney } from '@/utils/formatMoney';

export interface CurrencyInputProps
  extends Omit<ComponentProps<'input'>, 'onChange' | 'value'> {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export const CurrencyInput = ({
  value,
  onChange,
  className,
  ...props
}: CurrencyInputProps) => {
  const [masked, setMasked] = useState('');

  useEffect(() => {
    setMasked(value ? formatMoney(value) : '');
  }, [value]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/\D/g, '');
    const num = raw ? Number(raw) / 100 : 0;
    setMasked(raw ? formatMoney(num) : '');
    onChange(num);
  }

  return (
    <Input
      className={className}
      inputMode="numeric"
      onChange={handleChange}
      type="text"
      value={masked}
      {...props}
    />
  );
};
