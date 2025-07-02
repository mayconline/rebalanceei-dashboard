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
import { SignUpForm } from '@/pagesTemplate/SignUpPage/SignUpForm';

export default function SignUpPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Criar Conta</CardTitle>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter>
        <CardAction>
          <CardDescription>
            Já possui uma conta?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Faça login aqui!
            </Link>
          </CardDescription>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
