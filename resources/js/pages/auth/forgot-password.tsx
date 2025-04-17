// Components
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <div className="relative flex h-screen w-screen items-center justify-center bg-[url('/images/background.jpg')] bg-cover bg-left-bottom">
                <div className="absolute z-0 h-screen w-screen bg-gradient-to-b from-black from-60% to-transparent"></div>
                <div className="relative z-10 w-full max-w-[25rem]">
                    <div className="mb-6 flex flex-col items-center">
                        <img src="/images/logo-k16-no-bg.png" alt="Logo rental PS Nganjuk K16" className="mb-4 w-24" />
                        <h1 className="mb-2 text-xl font-semibold">Pulihkan Password🔐</h1>
                        <div className="text-xs text-neutral-200">Masukan Email anda yang terdaftar untuk memulihkan password</div>
                    </div>
                    <Head title="Forgot password" />

                    {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}

                    <div className="space-y-6">
                        <form onSubmit={submit}>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    value={data.email}
                                    autoFocus
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="email@example.com"
                                />

                                <InputError message={errors.email} />
                            </div>

                            <div className="my-6 flex items-center justify-start">
                                <Button variant="primary" className="w-full" disabled={processing}>
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Kirim link reset Password
                                </Button>
                            </div>
                        </form>

                        <div className="text-muted-foreground space-x-1 text-center text-sm">
                            <span>Or, return to</span>
                            <TextLink href={route('login')}>log in</TextLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
