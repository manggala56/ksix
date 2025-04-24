import AdminNavbar from '@/components/admin-navbar';
import InputError from '@/components/input-error';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@/components/modal';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Check, Dot, Edit, X } from 'lucide-react';
import { FormEventHandler, useState, useEffect } from 'react';

type Booking = {
    id: number;
    room: string;
    series: string;
    datetime: string;
    customer_note: string;
    customer_name?: string;
    phone : string;
};

type BookingForm = {
    answer: string;
    note_to_customer: string;
};

export default function AdminPanelPage({ bookings: initialBookings }: { bookings: Booking[] }) {
    const [bookings, setBookings] = useState<Booking[]>(initialBookings);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm<Required<BookingForm>>({
        answer: '',
        note_to_customer: '',
    });

    useEffect(() => {
        window.Echo.channel('bookings')
            .listen('NewBookingCreated', (e: { booking: Booking }) => {
                setBookings(prev => [
                    e.booking,
                    ...prev
                ]);
            });

        return () => {
            window.Echo.leaveChannel('bookings');
        };
    }, []);

    function handleEditBooking(booking: Booking) {
        setSelectedBooking(booking);
        reset();
        setShowModal(true);
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (!selectedBooking) return;

        post(`/admin/${selectedBooking.id}/update`, {
            onSuccess: () => {
                setShowModal(false);
            }
        });
    };

    return (
        <>
            <Modal status={showModal} setter={setShowModal}>
                <form onSubmit={submit}>
                    <div className="mb-2 flex justify-between">
                        <ModalHeader>Edit Booking</ModalHeader>
                        <X
                            className="cursor-pointer"
                            onClick={() => setShowModal(false)}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="h-[1px] w-full bg-white"></div>
                    </div>
                    <ModalBody>
                        <div className="mb-3">
                            <div className="mb-3">
                                <Label>Nama Customer</Label>
                                <div className="font-montserrat-regular text-xl font-semibold text-white">
                                    {selectedBooking?.customer_name || 'Customer'}
                                </div>
                            </div>

                            <div className="mb-3">
                                <Label>Catatan Customer</Label>
                                <Textarea
                                    value={selectedBooking?.customer_note || ''}
                                    readOnly
                                />
                            </div>

                            <div className="mb-3">
                                <Label>Beri Jawaban</Label>
                                <Select
                                    value={data.answer}
                                    onValueChange={(value) => setData('answer', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Jawaban" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="decline">Tolak</SelectItem>
                                            <SelectItem value="accept">ACC</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.answer} />
                            </div>

                            <div className="mb-3">
                                <Label>Catatan Ke Customer</Label>
                                <Textarea
                                    value={data.note_to_customer}
                                    onChange={(e) => setData('note_to_customer', e.target.value)}
                                    placeholder="Sorry bro wes kebek..."
                                />
                                <InputError message={errors.note_to_customer} />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="mb-3">
                            <div className="flex justify-end gap-3">
                                <Button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    variant={'secondary'}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant={'primary'}
                                    disabled={processing}
                                >
                                    <Check /> Simpan
                                </Button>
                            </div>
                        </div>
                    </ModalFooter>
                </form>
            </Modal>

            <Head title="Admin Panel" />
            <AdminNavbar/>
            <div className="px-5 py-3">
                <div className="mb-5">
                    <div className="flex items-center justify-between pe-3">
                        <Link href={'/'}>
                            <Button variant={'outline'}>
                                <ArrowLeft /> Kembali
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="font-montserrat-regular mb-1 flex">
                        Booking Masuk <Dot className="stroke-[5px] text-red-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                        {bookings.map((booking) => (
                            <div key={booking.id} className="rounded-md border border-neutral-200 px-3 py-3">
                                <div className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-neutral-300">Nama Customer</div>
                                            <div className="font-montserrat-regular text-md font-semibold">
                                                {booking.customer_name} ({booking.phone})
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-neutral-300">Ruangan</div>
                                            <div className="font-montserrat-regular text-lg font-semibold">
                                                {booking.room}
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <div className="text-xs text-neutral-300">Seri PS</div>
                                            <div className="font-gyrochrome text-md">
                                                {booking.series}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-1">
                                    <div className="text-xs text-neutral-300">Tanggal dan Waktu</div>
                                    <div className="font-montserrat-regular text-lg font-semibold">
                                        {booking.datetime}
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="text-xs text-neutral-300">Catatan Customer</div>
                                    <div className="line-clamp-2">
                                        {booking.customer_note}
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        onClick={() => handleEditBooking(booking)}
                                        className="w-full"
                                        variant="primary"
                                    >
                                        <Edit /> Jawab
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}