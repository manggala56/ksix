import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <div className="relative flex h-screen w-screen items-center justify-center bg-gradient-to-b bg-[url('/images/background.jpg')] from-transparent to-black bg-cover bg-left-bottom">
                <div className="absolute h-screen w-screen bg-gradient-to-b from-black from-40% to-transparent"></div>
                <div className="relative z-10 w-full max-w-[30rem] rounded-lg border border-amber-300 bg-black px-12 pt-10 pb-10">
                    <div className="mb-6 flex flex-col items-center">
                        <img src="/images/logo-k16-no-bg.png" alt="Logo rental PS Nganjuk K16" className="mb-4 w-24" />
                        <h1 className="mb-2 text-xl font-semibold">Login untuk Booking</h1>
                        <div className="text-xs text-neutral-200">Masukan Email dan Password untuk Login</div>
                    </div>
                    <Head title="Log in" />
                    <div className="">
                        <form className="flex flex-col gap-6" onSubmit={submit}>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="email@example.com"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        {canResetPassword && (
                                            <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
                                                Forgot password?
                                            </TextLink>
                                        )}
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Password"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        checked={data.remember}
                                        onClick={() => setData('remember', !data.remember)}
                                        tabIndex={3}
                                    />
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>

                                <Button variant="primary" type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Log in
                                </Button>
                            </div>

                            <div className="text-muted-foreground text-center text-sm">
                                Don't have an account?{' '}
                                <TextLink href={route('register')} tabIndex={5}>
                                    Sign up
                                </TextLink>
                            </div>
                        </form>
                    </div>

                    {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
                </div>
            </div>
        </>
    );
}
