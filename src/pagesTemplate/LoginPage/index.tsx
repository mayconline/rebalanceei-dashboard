import Link from 'next/link';
import { Card, Paragraph, ParagraphAs, ParagraphSize } from '@/components/ui';
import { LoginForm } from '@/pagesTemplate/LoginPage/LoginForm';

export default function LoginPage() {
  return (
    <Card.Container className="w-full max-w-sm">
      <Card.Header>
        <Card.Title>
          <Paragraph as={ParagraphAs.H2}>Bem vindo de Volta</Paragraph>
        </Card.Title>
      </Card.Header>
      <Card.Content>
        <LoginForm />
      </Card.Content>
      <Card.Footer>
        <Card.Description>
          <Paragraph size={ParagraphSize.Small}>
            Não tem uma conta?{' '}
            <Link className="text-primary hover:underline" href="/signup">
              Cadastre-se aqui!
            </Link>
          </Paragraph>
        </Card.Description>
      </Card.Footer>
    </Card.Container>
  );
}
