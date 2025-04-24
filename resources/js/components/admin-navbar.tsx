import { Link } from '@inertiajs/react';
import { Book, Clock, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const Navlist = [
    {
        title: 'Waiting List',
        path: '/admin',
        icon: Clock,
    },
    {
        title: 'Booking List',
        path: '/booking-list',
        icon: Book,
    },
];

export default function AdminNavbar() {
    const [isNav, setIsNav] = useState<boolean>(false);

    return (
        <>
            <div className={`fixed flex h-screen w-screen ${isNav ? '' : '-translate-x-full'} transition-all`}>
                <div className="h-screen w-64 border-r border-neutral-400 bg-neutral-900 pt-5">
                    <div className="mb-5">
                        <div className="mb-3 flex items-center justify-between px-3">
                            <div className="font-tarrget-italic text-lg">admin panel</div>
                            <X onClick={() => setIsNav(false)} className="cursor-pointer" />
                        </div>
                        <div className="px-3">
                            <div className="my-2 flex items-center justify-start">
                                <div className="h-[1px] w-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                    {Navlist.map((data, index) => (
                        <div key={`nav-item-${index}`} className="mb-3">
                            <div className="px-2">
                                <Link href={data.path}>
                                    <div className="flex w-full cursor-pointer gap-2 rounded border border-white px-3 py-3 text-neutral-50 transition-all hover:bg-white hover:text-neutral-950">
                                        <data.icon />
                                        {data.title}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div onClick={() => setIsNav(false)} className="h-full grow bg-neutral-900 opacity-55"></div>
            </div>
            <div className="flex w-full items-center justify-between border-b border-neutral-400 bg-neutral-900 px-5 py-3">
                <Menu onClick={() => setIsNav(!isNav)} className="size-7 cursor-pointer" />
                <div>
                    {/* <div className="font-tarrget-italic text-2xl">admin panel</div> */}
                    <Button variant={'destructive'}>
                        {' '}
                        <LogOut /> Logout
                    </Button>
                </div>
            </div>
        </>
    );
}
