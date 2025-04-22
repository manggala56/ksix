
import { Button } from '@/components/ui/button';
import { DateTimePicker } from '@/components/ui/date-time-picker';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Head, Link,useForm } from '@inertiajs/react';
import { ArrowLeft, Book } from 'lucide-react';
import { useState } from 'react';
// import { useState } from 'react';

export default function BookingPage() {
    // const [date12, setDate12] = useState<Date | undefined>(undefined);
    // const [date24, setDate24] = useState<Date | undefined>(undefined);
    const [date, setDate] = useState<Date | undefined>(undefined);

    const { data, setData, post, processing, errors } = useForm({
        room_type: '',
        ps_series: '',
        booking_time: '',
        notes: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('bookings.store'), {
            preserveScroll: true,
            onSuccess: () => {
                // Handle success (e.g., show notification)
            },
            onError: () => {
                // Handle errors
            }
        });
    };
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

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Label>Ruangan</Label>
                            <Select
                                value={data.room_type}
                                onValueChange={(value) => setData('room_type', value)}
                            >
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
                            {errors.room_type && <p className="text-sm text-red-500">{errors.room_type}</p>}
                        </div>

                        <div className="mb-3">
                            <Label>Pilih Seri PS</Label>
                            <Select
                                value={data.ps_series}
                                onValueChange={(value) => setData('ps_series', value)}
                            >
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
                            {errors.ps_series && <p className="text-sm text-red-500">{errors.ps_series}</p>}
                        </div>

                        <div className="mb-3 flex flex-col gap-2">
                            <Label>Tanggal Dan Waktu</Label>
                            <DateTimePicker
                                value={date}
                                onChange={(newDate) => {
                                    setDate(newDate);
                                    setData('booking_time', newDate?.toISOString() || '');
                                }}
                            />
                            {errors.booking_time && <p className="text-sm text-red-500">{errors.booking_time}</p>}
                        </div>

                        <div className="mb-5">
                            <Label>Catatan Ke Operator</Label>
                            <Textarea
                                rows={5}
                                value={data.notes}
                                onChange={(e) => setData('notes', e.target.value)}
                            />
                            {errors.notes && <p className="text-sm text-red-500">{errors.notes}</p>}
                        </div>

                        <Button
                            variant={'primary'}
                            className="w-full"
                            type="submit"
                            disabled={processing}
                        >
                            <Book /> {processing ? 'Memproses...' : 'Booking'}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
