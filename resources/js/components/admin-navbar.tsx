import { Book, Clock, LogOut, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "@inertiajs/react";

const Navlist = [
    {
        title: "Waiting List",
        path: "/waiting-list",
        icon: Clock
    },
    {
        title: "Booking List",
        path: "/booking-list",
        icon: Book
    },
]

export default function AdminNavbar() {
    const [isNav, setIsNav] = useState<boolean>(false);

    return <>
        <div className={`fixed w-screen h-screen flex ${isNav ? "" : "-translate-x-full"} transition-all`}>
            <div className="w-64 border-r border-neutral-400 bg-neutral-900 h-screen pt-5">
                <div className="mb-5">
                    <div className="flex mb-3 justify-between items-center px-3">
                        <div className="font-tarrget-italic text-lg">admin panel</div>
                        <X onClick={() => setIsNav(false)} className="cursor-pointer"/>
                    </div>
                    <div className="px-3">
                        <div className="flex justify-start items-center my-2">
                            <div className="w-full h-[1px] bg-white"></div>
                        </div>
                    </div>
                </div>
                {
                    Navlist.map((data, index) => (
                        <div key={`nav-item-${index}`} className="mb-3">
                            <div className="px-2">
                                <Link href={data.path}>
                                    <div className="border border-white hover:bg-white hover:text-neutral-950 transition-all cursor-pointer flex gap-2 rounded w-full text-neutral-50 py-3 px-3">
                                        <data.icon />
                                        {data.title}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="bg-neutral-900 opacity-55 h-full grow"></div>
        </div>
        <div className="w-full bg-neutral-900 py-3 px-5 flex justify-between items-center border-b border-neutral-400">
            <Menu onClick={() => setIsNav(!isNav)} className="size-7 cursor-pointer" />
            <div>
            {/* <div className="font-tarrget-italic text-2xl">admin panel</div> */}
                <Button variant={'destructive'}> <LogOut/> Logout</Button>
            </div>
        </div>
    </>
}