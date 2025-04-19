import { Button } from '@/components/ui/button';
import { DateTimePicker } from '@/components/ui/date-time-picker';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Book } from 'lucide-react';
import { useState } from 'react';

export default function BookingPage() {
    const [date12, setDate12] = useState<Date | undefined>(undefined);
    const [date24, setDate24] = useState<Date | undefined>(undefined);
    return (
        <>
            <Head title="Booking Nomor" />
            <div className="flex h-screen w-screen justify-center px-5 py-3 lg:items-center">
                <div className="w-full max-w-[30rem]">
                    <div className="mb-3">
                        <Link href={'/'}>
                            <Button variant={'outline'}>
                                <ArrowLeft /> Kembali
                            </Button>
                        </Link>
                    </div>
                    <div className="mb-5">
                        <div className="font-montserrat-regular text-2xl">Booking Nomor</div>
                        <div className="font-montserrat-regular text-xs text-neutral-300">Lengkapi Data dibawah untuk Melakukan Booking</div>
                    </div>

                    <div className="mb-3">
                        <Label>Ruangan</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih Tipe Ruangan" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="reguler">Reguler</SelectItem>
                                    <SelectItem value="vip">VIP</SelectItem>
                                    <SelectItem value="luxury">Luxury</SelectItem>
                                    <SelectItem value="premiere">Premiere</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="mb-3">
                        <Label>Pilih Seri PS</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih Seri PS" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="ps3">PS 3</SelectItem>
                                    <SelectItem value="ps4">PS 4</SelectItem>
                                    <SelectItem value="ps5">PS 5</SelectItem>
                                    <SelectItem value="netflix">Netflix</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="mb-3 flex flex-col gap-2">
                        <Label>Tanggal Dan Waktu</Label>
                        <DateTimePicker />
                    </div>

                    <div className="mb-5">
                        <Label>Catatan Ke Operator</Label>
                        <Textarea rows={5} />
                    </div>

                    <Button variant={'primary'} className="w-full">
                        <Book /> Booking
                    </Button>
                </div>
            </div>
        </>
    );
}
