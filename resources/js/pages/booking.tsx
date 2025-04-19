import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Head } from '@inertiajs/react';
import { ArrowLeft, Book } from 'lucide-react';

export default function BookingPage() {
    return (
        <>
            <Head title="Booking Nomor" />
            <div className="flex h-screen w-screen justify-center px-5 py-3 lg:items-center">
                <div className="w-full max-w-[30rem]">
                    <div className="mb-3">
                        <Button variant={'outline'}>
                            <ArrowLeft /> Kembali
                        </Button>
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

                    <div className="mb-3">
                        <Label>Nomor Tempat</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih Nomer Tempat" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="2">Nomor 2</SelectItem>
                                    <SelectItem value="3">Nomor 3</SelectItem>
                                    <SelectItem value="4">Nomor 4</SelectItem>
                                    <SelectItem value="5">Nomor 5</SelectItem>
                                    <SelectItem value="6">Nomor 6</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="mb-3">
                        <Label>Tipe Main</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih Tipe Main" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="open">Open</SelectItem>
                                    <SelectItem value="reguler">Reguler</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="mb-5">
                        <Label htmlFor="clocktime">Berapa Jam</Label>
                        <Input placeholder="Masukan Jam jika bermain reguler" id="clocktime" />
                    </div>

                    <Button className="w-full">
                        <Book /> Booking
                    </Button>
                </div>
            </div>
        </>
    );
}
