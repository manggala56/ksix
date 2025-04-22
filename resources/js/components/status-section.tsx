import { Dot } from 'lucide-react';

export default function StatusSection() {
    return (
        <>
            <div className="flex flex-col items-center justify-center overflow-hidden">
                <div className="mb-3">
                    <div className="font-tarrget-italic text-center text-3xl opacity-100 duration-1000 starting:translate-x-20 starting:opacity-0">
                        status booking 📕
                    </div>
                    <div className="font-montserrat-regular mb-1 text-center text-sm text-neutral-300 duration-1000 starting:-translate-x-20 starting:opacity-0">
                        Cek disini untuk melihat status pesanan booking kalian, tunggu hingga booking di balas admin baru bisa memesan lagi.
                    </div>
                </div>
                <div className="w-full max-w-[30rem] rounded-md border border-neutral-200 px-3 py-3">
                    <div className="mb-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-xs text-neutral-300">Ruangan</div>
                                <div className="font-montserrat-regular text-lg font-semibold">Luxury</div>
                            </div>
                            <div className="text-end">
                                <div className="text-xs text-neutral-300">Seri PS</div>
                                <div className="font-gyrochrome text-md">PS3</div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-1">
                        <div className="text-xs text-neutral-300">Tanggal dan Waktu</div>
                        <div className="font-montserrat-regular text-lg font-semibold">10/05/2025 - 20:00</div>
                    </div>
                    <div className="mb-3">
                        <div className="text-xs text-neutral-300">Catatan mu ke Operator</div>
                        <div className="line-clamp-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id, vitae, minima unde nesciunt aperiam ex perferendis
                            provident, illum eligendi mollitia ad accusamus laboriosam impedit corrupti! Veniam vitae non ipsam?
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="flex items-center text-xs text-neutral-300">
                            Status <Dot className="stroke-3" />
                        </div>
                        <div className="font-montserrat-regular text-lg font-semibold text-amber-400">Menunggu</div>
                    </div>
                </div>
            </div>
        </>
    );
}
