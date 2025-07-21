'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import { Card, Paragraph, ParagraphAs } from '@/components/ui';

import { CreateWalletForm } from '@/modalTemplate/WalletModal/CreateWalletForm';
import { UpdateWalletForm } from '@/modalTemplate/WalletModal/UpdateWalletForm';

export default function WalletModal() {
  const params = useParams();
  const isEditMode = useMemo(() => Boolean(params?._id), [params?._id]);

  return (
    <Card.Container className="w-full max-w-sm">
      <Card.Header>
        <Card.Title>
          <Paragraph as={ParagraphAs.H2}>
            {isEditMode ? 'Alterar Carteira' : 'Criar Nova Carteira'}
          </Paragraph>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        {isEditMode ? <UpdateWalletForm /> : <CreateWalletForm />}
      </Card.Content>
    </Card.Container>
  );
}
