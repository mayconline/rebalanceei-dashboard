import Link from 'next/link';
import { Card, Paragraph, ParagraphAs, ParagraphSize } from '@/components/ui';
import { SignUpForm } from '@/pagesTemplate/SignUpPage/SignUpForm';

export default function SignUpPage() {
  return (
    <Card.Container className="w-full max-w-sm">
      <Card.Header>
        <Card.Title>
          <Paragraph as={ParagraphAs.H2}>Crie sua conta</Paragraph>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        <SignUpForm />
      </Card.Content>
      <Card.Footer>
        <Card.Description>
          <Paragraph size={ParagraphSize.Small}>
            Já possui uma conta?{' '}
            <Link className="text-primary hover:underline" href="/login">
              Faça login aqui!
            </Link>
          </Paragraph>
        </Card.Description>
      </Card.Footer>
    </Card.Container>
  );
}
