import AdminNavbar from '@/components/admin-navbar';
import { Button } from '@/components/ui/button';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Dot } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

type Booking = {
    id: number;
    room: string;
    series: string;
    datetime: string;
    customer_note: string;
    customer_name?: string;
    phone: string;
};

type BookingForm = {
    answer: string;
    note_to_customer: string;
};

const mySwal = withReactContent(Swal);

const handleAttendance = (bookingId: number) => {
    mySwal
        .fire({
            title: 'Simpan Perubahan?',
            text: 'Perubahan ini tidak akan bisa diurungkan!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Simpan',
        })
        .then((result) => {
            if (result.isConfirmed) {
                // Add your delete logic here using the bookingId
                // Example: post(`/admin/${bookingId}/delete`)
                mySwal.fire({
                    title: 'Tersimpan!',
                    text: 'Data kehadiran di simpan',
                    icon: 'success',
                });
            }
        });
};

export default function BookingList({ bookings: initialBookings }: { bookings: Booking[] }) {
    const [bookings, setBookings] = useState<Booking[]>(initialBookings);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm<Required<BookingForm>>({
        answer: '',
        note_to_customer: '',
    });

    useEffect(() => {
        window.Echo.channel('bookings').listen('NewBookingCreated', (e: { booking: Booking }) => {
            setBookings((prev) => [e.booking, ...prev]);
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
            },
        });
    };

    return (
        <>
            <Head title="Admin Panel" />
            <AdminNavbar />
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
                                            <div className="font-montserrat-regular text-lg font-semibold">{booking.room}</div>
                                        </div>
                                        <div className="text-end">
                                            <div className="text-xs text-neutral-300">Seri PS</div>
                                            <div className="font-gyrochrome text-md">{booking.series}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-1">
                                    <div className="text-xs text-neutral-300">Tanggal dan Waktu</div>
                                    <div className="font-montserrat-regular text-lg font-semibold">{booking.datetime}</div>
                                </div>
                                <div className="mb-2">
                                    <div className="text-xs text-neutral-300">Catatan Customer</div>
                                    <div className="line-clamp-2">{booking.customer_note}</div>
                                </div>
                                <div className="flex gap-2">
                                    <Button onClick={() => handleAttendance(booking.id)} variant="secondary">
                                        Tidak Hadir
                                    </Button>
                                    <Button onClick={() => handleAttendance(booking.id)} variant="primary" className="w-full">
                                        Hadir
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
