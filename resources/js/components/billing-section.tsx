import { CheckCircle2 } from 'lucide-react';

export default function BillingSection() {
    return (
        <>
            <div className="mb-3">
                <div className="mb-5">
                    <div className="font-tarrget-italic text-center text-3xl">Cek Billing ⏰</div>
                    <div className="font-montserrat-regular mb-1 text-center text-sm text-neutral-300">
                        Kami memiliki banyak pilihan game yang bisa kalian pilih, Kami siap melayani 24 JAM Penuh!, segera kunjungi rental kami untuk
                        merasakan main PS yang seru, nyaman dan Murah!.
                    </div>
                </div>
                <div className="mb-10">
                    <div className="font-montserrat-regular flex justify-center gap-3">
                        <div className="rounded-lg border border-white px-5 py-2">Reguler</div>
                        <div className="rounded-lg border border-white px-5 py-2">VIP</div>
                        <div className="rounded-lg border border-white px-5 py-2">Luxury</div>
                    </div>
                </div>
                <div className="mb-16">
                    <div className="mb-5">
                        <div className="font-tarrget-italic text-center text-2xl">reguler</div>
                    </div>
                    <div className="mb-5">
                        <div className="grid gap-5">
                            <div className="flex flex-col items-center rounded-lg border border-amber-400 bg-zinc-950 px-3 py-10">
                                <div className="mb-12">
                                    <div className="flex items-center justify-center gap-2 text-4xl text-green-400">
                                        <div className="font-montserrat-regular">Kosong</div>
                                        <CheckCircle2 className="size-10" />
                                    </div>
                                </div>
                                <div className="font-gyrochrome flex gap-3 text-xl">
                                    <div>No 3</div>
                                    <div>|</div>
                                    <div>PS3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-28">
                    <div className="mb-12">
                        <div className="font-tarrget-italic text-center text-2xl">vip</div>
                    </div>
                    <div className="mb-5">
                        <div className="grid gap-32">
                            <div className="relative">
                                <div className="absolute -top-[9rem] h-full w-full">
                                    <div className="flex items-center justify-center">
                                        <img src="/images/gold-frame-2.png" className="w-[30rem]" alt="" />
                                    </div>
                                </div>
                                <div className="relative flex flex-col items-center rounded-lg border bg-cover px-3 py-5">
                                    <div className="mb-12">
                                        <div className="flex items-center justify-center gap-2 text-4xl text-green-400">
                                            <div className="font-montserrat-regular">Kosong</div>
                                            <CheckCircle2 className="size-10" />
                                        </div>
                                    </div>
                                    <div className="font-gyrochrome flex gap-3 text-xl">
                                        <div>No 3</div>
                                        <div>|</div>
                                        <div>PS3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-16">
                    <div className="mb-16">
                        <div className="font-tarrget-italic text-center text-2xl">Luxury</div>
                    </div>
                    <div className="mb-5">
                        <div className="grid gap-32">
                            <div className="relative">
                                <div className="absolute -top-[9rem] h-full w-full">
                                    <div className="flex items-center justify-center">
                                        <img src="/images/gold-frame-1.png" className="w-[30rem] rotate-90" alt="" />
                                    </div>
                                </div>
                                <div className="relative flex flex-col items-center rounded-lg border bg-cover px-3 py-5">
                                    <div className="mb-12">
                                        <div className="flex items-center justify-center gap-2 text-4xl text-green-400">
                                            <div className="font-montserrat-regular">Kosong</div>
                                            <CheckCircle2 className="size-10" />
                                        </div>
                                    </div>
                                    <div className="font-gyrochrome flex gap-3 text-xl">
                                        <div>No 3</div>
                                        <div>|</div>
                                        <div>PS3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
