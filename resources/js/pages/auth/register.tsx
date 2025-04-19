import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type RegisterForm = {
    name: string;
    phone: string;
    password: string;
    password_confirmation: string;
    role: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        phone: '',
        password: '',
        password_confirmation: '',
        role:'allrole'
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <div className="relative flex h-screen w-screen items-center justify-center bg-[url('/images/background.jpg')] bg-cover bg-left-bottom">
                <div className="absolute h-screen w-screen bg-gradient-to-b from-black from-40% to-transparent"></div>
                <div className="relative z-10 mx-5 w-full max-w-[30rem] rounded-lg border border-amber-300 bg-black px-12 pt-10 pb-10 transition-all duration-750 starting:-translate-y-24 starting:opacity-0">
                    <div className="w-full max-w-[25rem]">
                        <div className="mb-6 flex flex-col items-center">
                            <img src="/images/logo-k16-no-bg.png" alt="Logo rental PS Nganjuk K16" className="mb-4 w-24" />
                            <h1 className="mb-2 text-xl font-semibold">Jadilah Keluarga🤝</h1>
                            <div className="text-xs text-neutral-200">Lengkapi semua data dibawah untuk mendaftar</div>
                        </div>
                        <Head title="Register" />
                        <form className="flex flex-col gap-6" onSubmit={submit}>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        disabled={processing}
                                        placeholder="Nama Lengkap"
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="phone">No. HP</Label>
                                    <Input
                                        id="phone"
                                        type="number"
                                        required
                                        tabIndex={2}
                                        autoComplete="phone"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        disabled={processing}
                                        placeholder="089624..."
                                    />
                                    <InputError message={errors.phone} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        disabled={processing}
                                        placeholder="Password"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password_confirmation">Confirm password</Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        disabled={processing}
                                        placeholder="Confirm password"
                                    />
                                    <InputError message={errors.password_confirmation} />

                                </div>

                                <div className="flex items-center space-x-3">
                                    <Checkbox id="remember" name="remember" tabIndex={3} />
                                    <Label htmlFor="remember">
                                        Saya Setuju Dengan{' '}
                                        <TextLink href={route('login')} tabIndex={5}>
                                            Syarat dan Ketentuan
                                        </TextLink>
                                    </Label>
                                </div>
                                <Button variant="primary" type="submit" className="mt-2 w-full" tabIndex={6} disabled={processing}>
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Daftar Akun
                                </Button>
                            </div>

                            <div className="text-muted-foreground text-center text-sm">
                                Already have an account?{' '}
                                <TextLink href={route('login')} tabIndex={7}>
                                    Log in
                                </TextLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
