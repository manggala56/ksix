import { Link } from '@inertiajs/react';
import { Book, Clock, DollarSign, HomeIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const navList = [
    {
        title: 'Home',
        to: '#home',
        icon: HomeIcon,
    },
    {
        title: 'Billing',
        to: '#billing',
        icon: Clock,
    },
    {
        title: 'Price List',
        to: '#price',
        icon: DollarSign,
    },
];

export default function NavBar() {
    const [isNav, setIsNav] = useState(false);
    return (
        <>
            <div className="flex items-center justify-between bg-zinc-900 px-3 py-4">
                <div className="font-tarrget-engraved text-xl text-white">
                    <span className="text-yellow-400">KSIXTEEN</span> Rental PS
                </div>
                {/* <button
                    onClick={() => setIsNav(!isNav)}
                    className="font-montserrat-regular flex items-center gap-2 rounded border border-white px-3 py-1"
                >
                    {isNav ? (
                        <>
                            Tutup
                            <X className="size-8 text-white" />
                        </>
                    ) : (
                        <>
                            Menu
                            <Menu className="size-8 text-white" />
                        </>
                    )}
                </button> */}
                <Link href={route('booking')}>
                    <Button>
                        <Book />
                        <div>Booking</div>
                    </Button>
                </Link>
            </div>
            <div className={`${isNav ? 'h-[13rem]' : 'h-0'} overflow-hidden bg-zinc-900 px-3 transition-all duration-500`}>
                {/* {navList.map((data, index) => (
                    <button
                        key={`nav-item-${index}`}
                        className="mb-3 flex w-full gap-3 rounded px-2 py-2 transition-all hover:bg-yellow-400 hover:text-black"
                    >
                        <data.icon />
                        {data.title}
                    </button>
                ))} */}
                {/* <Link href={route('booking')}>
                    <button className="mb-3 flex w-full gap-3 rounded bg-white px-2 py-2 text-black transition-all hover:bg-neutral-400">
                        <Book />
                        Booking
                    </button>
                </Link> */}
            </div>
            <div className="w-fu h-[1px] bg-gradient-to-r from-yellow-400 to-amber-100"></div>
        </>
    );
}
