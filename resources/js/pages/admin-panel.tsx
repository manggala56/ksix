import InputError from '@/components/input-error';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@/components/modal';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@radix-ui/react-dropdown-menu';
import { ArrowLeft, Check, Dot, Edit, X } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

export const dataStructure = [
    {
        id: 2213,
        room: 'Luxury',
        series: 'PS3',
        datetime: '10/05/2025 - 20:00',
        customer_note:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam architecto eum mollitia optio nisi iure voluptatum? Aliquid et labore quia cumque eaque provident, eos, tenetur blanditiis, dignissimos doloribus sequi.',
    },
    {
        id: 2214,
        room: 'Luxury',
        series: 'PS3',
        datetime: '10/05/2025 - 20:00',
        customer_note:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam architecto eum mollitia optio nisi iure voluptatum? Aliquid et labore quia cumque eaque provident, eos, tenetur blanditiis, dignissimos doloribus sequi.',
    },
];

type BookingForm = {
    answer: string;
    note_to_customer: string;
};

export default function AdminPanelPage() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const { data, setData, post, processing, errors, reset } = useForm<Required<BookingForm>>({
        answer: '',
        note_to_customer: '',
    });

    //Function asign data ke modal yang terpanggil
    function asignData() {}

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Modal status={showModal} setter={setShowModal}>
                <form onSubmit={submit}>
                    <div className="mb-2 flex justify-between">
                        <ModalHeader>Edit Booking</ModalHeader>
                        <X className="cursor-pointer" onClick={() => setShowModal(false)} />
                    </div>
                    <div className="mb-3">
                        <div className="h-[1px] w-full bg-white"></div>
                    </div>
                    <ModalBody>
                        <div className="mb-3">
                            <div className="mb-3">
                                <Label>Nama Customer</Label>
                                <div className="font-montserrat-regular text-xl font-semibold text-white">Faturahmansyah</div>
                            </div>

                            <div className="mb-3">
                                <Label>Catatan Customer</Label>
                                <Textarea
                                    value={
                                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam architecto eum mollitia optio nisi iure voluptatum? Aliquid et labore quia cumque eaque provident, eos, tenetur blanditiis, dignissimos doloribus sequi.'
                                    }
                                    readOnly
                                />
                            </div>

                            <div className="mb-3">
                                <Label>Beri Jawaban</Label>
                                <Select>
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
                                    id="note_to_customer"
                                    name="note_to_customer"
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
                                <Button onClick={() => setShowModal(false)} variant={'secondary'}>
                                    Cancel
                                </Button>
                                <Button variant={'primary'}>
                                    <Check /> Simpan
                                </Button>
                            </div>
                        </div>
                    </ModalFooter>
                </form>
            </Modal>
            <Head title="Admin Panel" />
            <div className="px-5 py-3">
                <div className="mb-5">
                    <div className="flex items-center justify-between pe-3">
                        <Link href={'/'}>
                            <Button variant={'outline'}>
                                <ArrowLeft /> Kembali
                            </Button>
                        </Link>
                        <div className="font-tarrget-italic text-2xl">admin panel</div>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="font-montserrat-regular mb-1 flex">
                        Booking Masuk <Dot className="stroke-[5px] text-red-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                        {dataStructure.map((data, index) => (
                            <div key={data.id} className="rounded-md border border-neutral-200 px-3 py-3">
                                <div className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-neutral-300">Ruangan</div>
                                            <div className="font-montserrat-regular text-lg font-semibold">{data.room}</div>
                                        </div>
                                        <div className="text-end">
                                            <div className="text-xs text-neutral-300">Seri PS</div>
                                            <div className="font-gyrochrome text-md">{data.series}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <div className="text-xs text-neutral-300">Tanggal dan Waktu</div>
                                    <div className="font-montserrat-regular text-lg font-semibold">{data.datetime}</div>
                                </div>
                                <div className="mb-2">
                                    <div className="text-xs text-neutral-300">Catatan Customer</div>
                                    <div className="line-clamp-2">{data.customer_note}</div>
                                </div>
                                <div>
                                    <Button onClick={() => setShowModal(!showModal)} className="w-full" variant="primary">
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
