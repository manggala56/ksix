// import BillingSection from '@/components/billing-section';
import HeroSection from '@/components/hero-section';
import NavBar from '@/components/navbar';
import StatusSection from '@/components/status-section';
import { Head } from '@inertiajs/react';

export default function IndexLanding() {
    return (
        <>
            <Head title="Selamat Datang" />
            <NavBar />
            <div className="pt-10 pb-3">
                <div className="mb-20 px-5">
                    <HeroSection />
                </div>
                <div className="mb-20 px-5">
                    <StatusSection />
                </div>
                {/* <div className="mb-20 bg-neutral-800 px-5 py-20">
                    <BillingSection />
                </div> */}
            </div>
        </>
    );
}
