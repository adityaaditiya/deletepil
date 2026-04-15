import { Head, Link, usePage } from "@inertiajs/react";
import {
    IconAward,
    IconCheck,
    IconClock,
    IconFlower,
    IconHeartHandshake,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandWhatsapp,
    IconMail,
    IconMapPin,
    IconPhone,
    IconShieldCheck,
    IconSparkles,
    IconStretching,
    IconYoga,
} from "@tabler/icons-react";
import Button from "@/Components/Landing/Button";
import Card from "@/Components/Landing/Card";
import SectionTitle from "@/Components/Landing/SectionTitle";
import Navbar from "@/Components/Landing/Navbar";
import { getImageUrl } from "@/Utils/imageUrl";
import SessionDetailCard from "@/Components/Landing/SessionDetailCard";

export default function Welcome({ currentKey = "home" }) {
    const { auth, trainers = [], membershipPlans = [], landingPageSetting = {}, studioSessions = [] } = usePage().props;

    const trustBadges = ["Certified Trainers", "Small Group", "Beginner Friendly"];
    const navItems = [
        { name: "Home", href: route("welcome"), key: "home" },
        { name: "Jadwal Sesi", href: route("jadwal-sesi"), key: "jadwal-sesi" },
        { name: "Contact", href: route("contact"), key: "contact" },
    ];

    // const navItems = [
    //     { name: "Home", key: "home" },
    //     { name: "Classes", key: "classes" },
    //     { name: "Schedule", key: "schedule" },
    //     { name: "Pricing", key: "pricing" },
    //     { name: "Trainer", key: "trainer" },
    //     { name: "Appointment", key: "appointment" },
    //     { name: "Contact", key: "contact" },
    // ];

    const benefits = [
        {
            icon: IconSparkles,
            title: "Postur Lebih Seimbang",
            desc: "Latihan terarah membantu alignment tubuh agar lebih tegap dan nyaman sepanjang hari.",
        },
        {
            icon: IconShieldCheck,
            title: "Core Lebih Kuat",
            desc: "Program kami menargetkan otot inti untuk mendukung stabilitas, keseimbangan, dan performa.",
        },
        {
            icon: IconStretching,
            title: "Fleksibilitas Meningkat",
            desc: "Gerakan mindful untuk membuka rentang gerak dengan aman, lembut, dan progresif.",
        },
        {
            icon: IconFlower,
            title: "Stress Relief",
            desc: "Rasakan sesi yang menenangkan dengan ritme napas, fokus, dan suasana studio yang hangat.",
        },
    ];

    const classTypes = [
        {
            title: "Reformer Pilates",
            desc: "Latihan dengan reformer machine untuk membangun kekuatan dan kontrol gerakan presisi.",
            duration: "55 menit",
            level: "All Levels",
        },
        {
            title: "Mat Pilates",
            desc: "Kelas dasar hingga intermediate yang berfokus pada teknik inti dan mobilitas tubuh.",
            duration: "50 menit",
            level: "Beginner - Intermediate",
        },
        {
            title: "Private Session",
            desc: "Pendampingan 1-on-1 dengan program personal sesuai tujuan kebugaran Anda.",
            duration: "60 menit",
            level: "Personalized",
        },
        {
            title: "Recovery & Stretch",
            desc: "Sesi pemulihan untuk melepas ketegangan otot dan memperbaiki kualitas gerak.",
            duration: "45 menit",
            level: "Beginner Friendly",
        },
    ];

    const scheduleRows = [
        { day: "Senin", morning: "07:00 Reformer", evening: "18:30 Mat Flow" },
        { day: "Selasa", morning: "08:00 Private", evening: "19:00 Recovery" },
        { day: "Rabu", morning: "07:30 Mat Core", evening: "18:30 Reformer" },
        { day: "Kamis", morning: "08:00 Recovery", evening: "19:00 Private" },
        { day: "Jumat", morning: "07:00 Reformer", evening: "18:00 Mat Basics" },
        { day: "Sabtu", morning: "09:00 Signature Class", evening: "16:30 Recovery" },
    ];
    const testimonials = [
        {
            quote: "Studio-nya tenang dan instruktur sangat detail. Postur saya jauh membaik dalam 6 minggu.",
            name: "Cecilia, 32",
        },
        {
            quote: "Saya pemula total, tapi kelasnya ramah dan progresnya terasa konsisten setiap minggu.",
            name: "Vina, 28",
        },
        {
            quote: "Program private session membantu recovery punggung saya lebih cepat dan aman.",
            name: "Monica, 37",
        },
        
    ];


        // Ganti bagian ini di Welcome.jsx
    const heroBackgroundImage = getImageUrl(
        landingPageSetting?.hero_background_image,
        "landing-page"
    ) || "https://images.unsplash.com/photo-1595079835353-fb3cf0f83f20?auto=format&fit=crop&w=1200&q=80";

    const classesBackgroundImage = getImageUrl(
        landingPageSetting?.classes_background_image,
        "landing-page"
    ) || "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80";

    const scheduleBackgroundImage = getImageUrl(
        landingPageSetting?.schedule_background_image,
        "landing-page"
) || "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80";

    const faqs = [
        {
            q: "Apakah cocok untuk pemula?",
            a: "Ya. Kami menyediakan kelas beginner friendly dengan instruktur bersertifikasi yang membimbing teknik dari dasar.",
        },
        {
            q: "Apa yang perlu dibawa saat kelas?",
            a: "Kenakan pakaian olahraga nyaman, kaus kaki grip, dan bawa botol minum. Mat disediakan oleh studio.",
        },
        {
            q: "Bagaimana kebijakan cancel atau refund?",
            a: "Pembatalan dapat dilakukan maksimal 1 Hari sebelum kelas. Lebih dari itu tidak dapat refund, paket lain mengikuti syarat member.",
        },
        {
            q: "Apakah ada kelas private?",
            a: "Tersedia private session 1-on-1 dengan program personal sesuai kebutuhan kebugaran atau pemulihan Anda.",
        },
    ];

    const contactInfo = {
    email: "oropadeltegal@gmail.com",
    address: "Jl. Layur No. 08, Tegalsari, Kec. Tegal Barat, Kota Tegal, Jawa Tengah 52111",
    hours: "Senin - Minggu, 06:00 - 21:00 WIB",
    instagramUrl: "https://www.instagram.com/oropilatesstudio/",
    tiktokUrl: "https://www.tiktok.com/@oropilatesstudio",
    whatsappUrl: "https://wa.me/6282326923196",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.267416072759!2d109.13153807480896!3d-6.858518693139926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb73855438ee5%3A0x9a72d2d730a422fc!2sOro%20Padel%20Tegal!5e0!3m2!1sid!2sid!4v1773433907949!5m2!1sid!2sid",
    };

    if (currentKey === "jadwal-sesi") {
        return (
            <>
                <Head title="Jadwal Sesi | ORO Pilates Studio" />
                <div className="min-h-screen bg-wellness-beige text-wellness-text">
                    <Navbar navItems={navItems} currentKey={currentKey} />
                    <section className="px-4 py-8 md:px-6">
                        <div className="mx-auto max-w-5xl">
                            <SectionTitle
                                // eyebrow="Jadwal Sesi"
                                title="Detail Sesi Pilates"
                                description="Lihat informasi lengkap sebelum bergabung ke sesi."
                            />
                            {studioSessions.length > 0 ? (
                                <div className="mt-10 grid gap-6">
                                    {studioSessions.map((session) => (
                                        <SessionDetailCard key={session.id} session={session} />
                                    ))}
                                </div>
                            ) : (
                                <Card className="mt-10">
                                    <p className="text-sm text-wellness-muted">Belum ada jadwal sesi yang tersedia saat ini.</p>
                                </Card>
                            )}
                        </div>
                    </section>
                </div>
            </>
        );
    }

    if (currentKey === "contact") {
        return (
            <>
                <Head title="Contact | ORO Pilates Studio" />
                <div className="min-h-screen bg-wellness-beige text-wellness-text">
                    <Navbar navItems={navItems} currentKey={currentKey} />
                    <section className="px-4 py-8 md:px-6">
                        <div className="mx-auto max-w-5xl">
                            <SectionTitle
                                // eyebrow="Jadwal Sesi"
                                title="Contact Us"
                                description="Hubungi kami untuk pertanyaan, konsultasi kelas, atau bantuan personal lainnya. Kami siap membantu Anda merasakan manfaat pilates dengan pengalaman terbaik."
                            />
                        
                        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] mt-10">
                            <div className="space-y-6">
                                <article className="overflow-hidden rounded-[32px] border border-primary-100 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
                                    <div className="rounded-3xl border border-primary-100 bg-white p-8 shadow-sm">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%)]" />
                                        <div className="relative">
                                            <p className="text-sm uppercase tracking-[0.28em] text-primary-600 font-semibold">Contact Experience</p>
                                            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Direct Assistances</h2>
                                            <p className="mt-4 max-w-2xl text-sm leading-relaxed  md:text-base">Hubungi Concierge kami untuk bantuan personal. Mulai dari konsultasi kelas, jadwal instruktur, hingga detail keanggotaan, kami hadir untuk memastikan pengalaman latihan terbaik Anda. </p>
                                            <div className="mt-6 flex flex-wrap gap-3">
                                                <a
                                                    href={contactInfo.whatsappUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
                                                >
                                                    <IconBrandWhatsapp size={20} /> Hubungi Kami
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="rounded-[32px] border border-primary-100 bg-white p-6 shadow-sm">
                                    <div className="mb-5 flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-600">Visit the studio</p>
                                            <h3 className="mt-2 text-xl font-semibold text-wellness-text">Our tranquil location</h3>
                                        </div>
                                        <div className="rounded-2xl bg-wellness-beige p-3 text-primary-600">
                                            <IconMapPin size={20} />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <iframe
                                                title="ORO Pilates Studio Location"
                                                src={contactInfo.mapsEmbedUrl}
                                                className="h-[360px] w-full rounded-[20px] border-0 grayscale-[0.15] contrast-125 saturate-[0.9]"
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </article>
                            </div>

                            <aside className="space-y-6">
                                <article className="rounded-[32px] border border-primary-100 bg-white p-6 shadow-sm lg:sticky lg:top-24">
                                    
                                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">Business Information</p>
                                    <div className="mt-4 rounded-[18px] border border-primary-100 bg-primary-50/60 p-5">
                                         
                                        <div className=" space-y-4 text-sm text-slate-700">
                                            <div className="flex items-start gap-3">
                                                <div className="rounded-2xl bg-white p-2.5 text-primary-700 shadow-sm"><IconMail size={18} /></div>
                                                <div>
                                                    <p className="font-semibold text-slate-900">Email</p>
                                                    <a href={`mailto:${contactInfo.email}`} className="text-wellness-muted transition hover:text-primary-700">{contactInfo.email}</a>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="rounded-2xl bg-white p-2.5 text-primary-700 shadow-sm"><IconMapPin size={18} /></div>
                                                <div>
                                                    <p className="font-semibold text-slate-900">Lokasi</p>
                                                    <p className="text-wellness-muted">{contactInfo.address}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="rounded-2xl bg-white p-2.5 text-primary-700 shadow-sm"><IconClock size={18} /></div>
                                                <div>
                                                    <p className="font-semibold text-slate-900">Jam Operasional</p>
                                                    <p className="text-wellness-muted">{contactInfo.hours}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">Connect</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">Connect dengan sosial media kami</h2>
                                    <p className="mt-3 text-sm leading-relaxed text-wellness-muted">Ikuti update class, wellness tips, dan promo terbaru melalui Instagram dan TikTok kami.</p>

                                    <div className="mt-6 grid gap-3">
                                        <a href={contactInfo.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-gradient-to-r from-pink-50 via-white to-orange-50 p-4 transition hover:border-primary-200 hover:shadow-sm">
                                            <div className="rounded-2xl bg-white p-3 text-pink-600 shadow-sm"><IconBrandInstagram size={24} /></div>
                                            <div>
                                                <p className="font-semibold text-slate-900">Instagram</p>
                                                <p className="text-sm text-wellness-muted">Lihat update studio & reels terbaru</p>
                                            </div>
                                        </a>
                                        <a href={contactInfo.tiktokUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-100 via-white to-cyan-50 p-4 transition hover:border-primary-200 hover:shadow-sm">
                                            <div className="rounded-2xl bg-white p-3 text-slate-900 shadow-sm"><IconBrandTiktok size={24} /></div>
                                            <div>
                                                <p className="font-semibold text-slate-900">TikTok</p>
                                                <p className="text-sm text-wellness-muted">Temukan video singkat tips gerakan</p>
                                            </div>
                                        </a>
                                    </div>

                                </article>
                            </aside>
                        </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }

    return (
        <>
            <Head title="Pilates Studio | Move Better. Feel Stronger." />

            <div className="min-h-screen bg-wellness-beige text-wellness-text">
                <div className="bg-primary-600 px-4 py-2 text-center text-xs font-medium text-white md:text-sm">
                    30% Off Class this week — Slot terbatas, reservasi sekarang.
                </div>

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
                                <Button as={Link} href={route("jadwal-sesi")}>Book A Class</Button>
                                <Button as={Link} href={route("contact")} variant="secondary">Lihat Penawaran!</Button>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">
                                {trustBadges.map((badge) => (
                                    <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-2 text-sm text-wellness-muted">
                                        <IconCheck size={14} className="text-primary-600" />
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden p-0">
                            <img
                                src={heroBackgroundImage}
                                alt="Pilates class"
                                className="h-full min-h-[420px] w-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="px-4 py-20 md:px-6">
                    <div className="mx-auto max-w-7xl">
                        <SectionTitle
                            eyebrow="Benefits"
                            title="Rasakan manfaat nyata di setiap sesi"
                            description="Program pilates kami dirancang untuk mendukung kualitas hidup yang lebih seimbang, kuat, dan mindful."
                        />
                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {benefits.map(({ icon: Icon, title, desc }) => (
                                <Card key={title}>
                                    <div className="mb-5 inline-flex rounded-2xl bg-primary-100 p-3 text-primary-600">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="text-lg font-semibold">{title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-wellness-muted">{desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Hapus px-4 dan md:px-6 di sini */}
                <section className="py-10"> 
                    <div className="relative h-[100vh] w-full">
                            <SectionTitle
                                eyebrow="Classes"
                                title="Pilihan kelas sesuai ritme Anda"
                                description="Mulai dari basic hingga sesi personal, semua kelas dipandu instruktur profesional bersertifikat."
                            />
                            <br />
                        <div className="relative h-[100vh] w-full">
                            {/* Gambar Background */}
                            <img 
                                src={classesBackgroundImage}
                                alt="Pilates class" 
                                className="absolute inset-0 h-full w-full object-cover" 
                            />
                        
                            {/* Overlay Konten */}
                            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 md:p-16">
                                
                                {/* Container untuk teks agar tetap rapi di tengah/kiri sesuai layout website */}
                                <div className="container mx-auto px-4 md:px-6">
                                    <div className="max-w-xl text-left">
                                        <h1 className="text-white text-xl md:text-4xl ">
                                            Latihan Pilates yang Menenangkan
                                        </h1>
                            
                                        <div className="mt-6 flex flex-col md:flex-row gap-3">
                                            <Button as={Link} href={route("jadwal-sesi")}>Lihat jadwal sesi</Button>
                                            <Link 
                                            href={route("contact")} 
                                            className="flex items-center justify-center inline-block border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-gray-500"
                                            >
                                            Hubungi Concierge kami 
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <br />
                <section className="py-20 mt-20">
                    <div className="relative h-[100vh] w-full">
                        <SectionTitle
                            eyebrow="Schedule"
                            title="Preview jadwal mingguan"
                            description="Atur waktu latihan Anda dengan jadwal yang fleksibel untuk pagi dan malam."
                        />
                        
                        {/* Hapus px-4 dan md:px-6 di sini */}
                        <section className="mt-18 bg-wellness-soft"> 
                            <div className="relative h-[100vh] w-full">
                                {/* Gambar Background */}
                                <img 
                                src={scheduleBackgroundImage}
                                alt="Pilates class" 
                                className="absolute inset-0 h-full w-full object-cover" 
                                />
                                
                                {/* Overlay Konten */}
                                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 md:p-16">
                                {/* Container untuk teks agar tetap rapi di tengah/kiri sesuai layout website */}
                                <div className="container mx-auto px-4 md:px-6">
                                    <div className="max-w-xl text-left">
                                    <h1 className="text-white text-xl md:text-2xl ">
                                        Jadwal mingguan yang fleksibel untuk pagi dan malam
                                    </h1>
                                    
                                    <div className="mt-6 flex flex-col md:flex-row gap-3">
                                        
                                        <Link 
                                            href={route("contact")} 
                                            className="inline-block border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-gray-500 text-center"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>              
                <br />
                <div className="mt-12"></div>
                <section className="px-4 py-20 md:px-6">
                    <div className="mx-auto max-w-7xl">
                        <SectionTitle
                            eyebrow="Trainers"
                            title="Dipandu instruktur berpengalaman"
                            description="Tim kami menghadirkan pendekatan personal agar setiap gerakan terasa aman, efektif, dan menyenangkan."
                        />
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {trainers.length > 0 ? (
                                trainers.map((trainer, index) => (
                                    <Card className="text-center" key={trainer.id || trainer.name || index}>
                                        <img
                                            src={getImageUrl(trainer.photo, "trainers") || `/assets/photo/photo${(index % 5) + 1}.png`}
                                            alt={trainer.name}
                                            className="mx-auto h-64 w-full rounded-2xl object-cover"
                                        />
                                        <h3 className="mt-5 text-xl font-semibold">{trainer.name}</h3>
                                        <p className="mt-2 text-sm text-wellness-muted">{trainer.expertise || "Trainer Pilates"}</p>
                                    </Card>
                                ))
                            ) : (
                                <Card className="text-center md:col-span-3">
                                    <p className="text-sm text-wellness-muted">Data trainer belum tersedia. Silakan tambahkan dari dashboard.</p>
                                </Card>
                            )}
                        </div>
                    </div>
                </section>

                <section className="bg-wellness-soft px-4 py-20 md:px-6">
                    <div className="mx-auto max-w-7xl">
                        <SectionTitle
                            eyebrow="Testimonials"
                            title="Apa kata member kami"
                            description="Cerita pengalaman nyata dari member yang merasakan perubahan tubuh dan kualitas hidup."
                        />
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {testimonials.map((item) => (
                                <Card key={item.name}>
                                    <p className="text-sm leading-relaxed text-wellness-muted">“{item.quote}”</p>
                                    <p className="mt-6 font-semibold">{item.name}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="faq" className="px-4 py-20 md:px-6">
                    <div className="mx-auto max-w-5xl">
                        <SectionTitle
                            eyebrow="FAQ"
                            title="Pertanyaan yang sering diajukan"
                            description="Jika Anda masih ragu memulai, temukan jawaban singkatnya di sini."
                        />
                        <div className="mt-10 space-y-4">
                            {faqs.map((item) => (
                                <details key={item.q} className="rounded-3xl border border-primary-100 bg-white p-6">
                                    <summary className="cursor-pointer list-none text-base font-semibold text-wellness-text">
                                        {item.q}
                                    </summary>
                                    <p className="mt-3 text-sm leading-relaxed text-wellness-muted">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="bg-primary-600 px-4 py-14 text-primary-50 md:px-6">
                    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
                        <div className="md:col-span-2">
                            <p className="text-xl font-semibold text-white">ORO Pilates Studio</p>
                            <p className="mt-4 max-w-md text-sm text-primary-100">
                                Studio pilates modern untuk Anda yang ingin bergerak lebih baik, merasa lebih kuat, dan hidup lebih mindful.
                            </p>
                            <div className="mt-5 space-y-2 text-sm text-primary-100">
                                <p className="flex items-center gap-2"><IconMapPin size={16} /> Jl. Layur No. 08, Kota Tegal</p>
                                <p className="flex items-center gap-2"><IconClock size={16} /> Senin - Sabtu, 07:00 - 20:00</p>
                                <p className="flex items-center gap-2"><IconPhone size={16} /> +62 823-2692-3196</p>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-white">Quick Links</p>
                            <ul className="mt-4 space-y-2 text-sm text-primary-100">
                                <div className="mt-6 flex flex-col md:flex-row gap-3 font-semibold">
                                    <li>
                                        <Link href={route("welcome")}>Home</Link>
                                    </li>
                                </div>
                                <div className="mt-6 flex flex-col md:flex-row gap-3 font-semibold">
                                    <li>
                                        <Link href={route("contact")}>Contact</Link>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-white">Follow Us</p>
                            <div className="mt-4 flex items-center gap-3">
                                <a href="#" className="rounded-xl border border-primary-400 p-2 hover:bg-primary-500">
                                    <IconBrandInstagram size={18} />
                                </a>
                                <a href="#" className="rounded-xl border border-primary-400 p-2 hover:bg-primary-500">
                                    <IconAward size={18} />
                                </a>
                                <a href="#" className="rounded-xl border border-primary-400 p-2 hover:bg-primary-500">
                                    <IconHeartHandshake size={18} />
                                </a>
                            </div>
                            <Button as={Link} href={route("jadwal-sesi")} className="mt-6 w-full bg-primary-500 text-white hover:bg-primary-700">
                                Book A Class
                            </Button>
                        </div>
                    </div>
                    <div className="mx-auto mt-10 max-w-7xl border-t border-primary-500 pt-6 text-center text-sm text-primary-100">
                        © {new Date().getFullYear()} ORO Pilates Studio. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}
