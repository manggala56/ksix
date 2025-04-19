import { Link } from '@inertiajs/react';
import { Book } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
    return (
        <>
            <div className="">
                <div className="flex items-center justify-center">
                    <img
                        src="/images/logo-k16-no-bg.png"
                        className="w-80 opacity-100 duration-1000 starting:-translate-y-20 starting:opacity-0"
                        alt=""
                    />
                </div>
            </div>
            <div className="mb-5">
                <div className="font-tarrget-italic text-center text-3xl opacity-100 duration-1000 starting:translate-x-20 starting:opacity-0">
                    rental PS K16 🎮
                </div>
                <div className="font-montserrat-regular mb-1 text-center text-sm text-neutral-300 duration-1000 starting:-translate-x-20 starting:opacity-0">
                    Kami memiliki banyak pilihan game yang bisa kalian pilih, Kami siap melayani 24 JAM Penuh!, segera kunjungi rental kami untuk
                    merasakan main PS yang seru, nyaman dan Murah!.
                </div>
            </div>
            <div className="mb-5 flex justify-center gap-3 duration-1000 starting:translate-y-20 starting:opacity-0">
                {/* <Button variant="secondary">
                    <Clock /> <div>Cek Billing</div>
                </Button> */}
                <Link href={route('booking')}>
                    <Button>
                        <Book />
                        Booking Sekarang
                    </Button>
                </Link>
            </div>
        </>
    );
}
