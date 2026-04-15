import { Head, Link } from "@inertiajs/react";
import {
    IconBrandInstagram,
    IconClock,
    IconMapPin,
    IconPhone,
    IconSparkles,
    IconShieldCheck,
    IconStretching,
    IconFlower,
} from "@tabler/icons-react";
import Button from "@/Components/Landing/Button";
import Card from "@/Components/Landing/Card";
import SectionTitle from "@/Components/Landing/SectionTitle";
import Navbar from "@/Components/Landing/Navbar";

export default function Welcome({ currentKey = "home" }) {
    const navItems = [
        { name: "Home", href: route("welcome") },
        { name: "Contact", href: route("contact") },
    ];

    const benefits = [
        { icon: IconSparkles, title: "Postur Lebih Seimbang", desc: "Latihan terarah membantu alignment tubuh agar lebih tegap dan nyaman sepanjang hari." },
        { icon: IconShieldCheck, title: "Core Lebih Kuat", desc: "Program kami menargetkan otot inti untuk mendukung stabilitas, keseimbangan, dan performa." },
        { icon: IconStretching, title: "Fleksibilitas Meningkat", desc: "Gerakan mindful untuk membuka rentang gerak dengan aman, lembut, dan progresif." },
        { icon: IconFlower, title: "Stress Relief", desc: "Rasakan sesi yang menenangkan dengan ritme napas, fokus, dan suasana studio yang hangat." },
    ];

    return (
        <>
            <Head title="Pilates Studio | Move Better. Feel Stronger." />
            <div className="min-h-screen bg-wellness-beige text-wellness-text">
                <Navbar navItems={navItems} currentKey={currentKey} />

                <section className="bg-gradient-to-br from-wellness-beige via-wellness-soft to-wellness-greige px-4 pb-20 pt-16 md:px-6 md:pt-20">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-600">Pilates Studio Premium</p>
                            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">Move Better. Feel Stronger.</h1>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-wellness-muted md:text-lg">
                                Tingkatkan postur, kekuatan core, dan mobilitas melalui kelas pilates yang personal, elegan, dan menenangkan.
                            </p>
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Button as={Link} href={route("contact")}>Hubungi Kami</Button>
                                <Button as={Link} href={route("login")} variant="secondary">Login / Register</Button>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80" alt="Pilates class" className="h-full min-h-[420px] w-full object-cover" />
                    </div>
                </section>

                <section className="px-4 py-20 md:px-6">
                    <div className="mx-auto max-w-7xl">
                        <SectionTitle eyebrow="Benefits" title="Rasakan manfaat nyata di setiap sesi" description="Program pilates kami dirancang untuk mendukung kualitas hidup yang lebih seimbang, kuat, dan mindful." />
                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {benefits.map(({ icon: Icon, title, desc }) => (
                                <Card key={title}>
                                    <div className="mb-5 inline-flex rounded-2xl bg-primary-100 p-3 text-primary-600"><Icon size={22} /></div>
                                    <h3 className="text-lg font-semibold">{title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-wellness-muted">{desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="bg-wellness-soft px-4 py-20 md:px-6">
                    <div className="mx-auto max-w-5xl">
                        <SectionTitle eyebrow="Contact" title="Hubungi ORO Pilates Studio" description="Untuk pertanyaan kelas, jadwal, atau membership, silakan hubungi kami." />
                        <Card className="mt-8">
                            <div className="space-y-3 text-sm text-wellness-muted">
                                <p className="flex items-center gap-2"><IconMapPin size={16} /> Jl. Layur No. 08, Kota Tegal</p>
                                <p className="flex items-center gap-2"><IconClock size={16} /> Senin - Sabtu, 07:00 - 20:00</p>
                                <p className="flex items-center gap-2"><IconPhone size={16} /> +62 823-2692-3196</p>
                            </div>
                        </Card>
                    </div>
                </section>

                <footer className="bg-primary-600 px-4 py-10 text-primary-50 md:px-6">
                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
                        <p className="text-sm">© {new Date().getFullYear()} ORO Pilates Studio. All rights reserved.</p>
                        <a href="#" className="rounded-xl border border-primary-400 p-2 hover:bg-primary-500"><IconBrandInstagram size={18} /></a>
                    </div>
                </footer>
            </div>
        </>
    );
}
