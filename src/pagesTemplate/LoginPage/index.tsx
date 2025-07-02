import Link from 'next/link';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LoginForm } from '@/pagesTemplate/LoginPage/LoginForm';

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Bem vindo de Volta</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        <CardAction>
          <CardDescription>
            Não tem uma conta?{' '}
            <Link href="/signup" className="text-primary hover:underline">
              Cadastre-se aqui!
            </Link>
          </CardDescription>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
