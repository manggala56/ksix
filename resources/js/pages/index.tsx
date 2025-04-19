import HeroSection from '@/components/hero-section';
import NavBar from '@/components/navbar';
import { Head } from '@inertiajs/react';

export default function IndexLanding() {
    return (
        <>
            <Head title="Selamat Datang" />
            <NavBar />
            <div className="px-5 pt-10 pb-3">
                <div className="mb-20">
                    <HeroSection />
                </div>
            </div>
        </>
    );
}
