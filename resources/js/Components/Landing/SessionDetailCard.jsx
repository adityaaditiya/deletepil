import React from "react";
import Card from "@/Components/Landing/Card";
import { getImageUrl } from "@/Utils/imageUrl";

export default function SessionDetailCard({ session }) {
    const imageUrl = getImageUrl(session.image, "sessions") || "/assets/thumbnail/image-1.png";

    return (
        <Card className="overflow-hidden">
            <img src={imageUrl} alt={session.title} className="h-72 w-full rounded-2xl object-cover" />
            <div className="mt-6 grid gap-4 text-sm text-wellness-muted md:grid-cols-2">
                <p><span className="font-semibold text-wellness-text">Judul Sesi:</span> {session.title}</p>
                <p><span className="font-semibold text-wellness-text">Trainer:</span> {session.trainer_name}</p>
                <p><span className="font-semibold text-wellness-text">Tanggal Sesi:</span> {session.date}</p>
                <p><span className="font-semibold text-wellness-text">Jam Sesi:</span> {session.time}</p>
                <p><span className="font-semibold text-wellness-text">Durasi:</span> {session.duration}</p>
                <p><span className="font-semibold text-wellness-text">Kapasitas Peserta:</span> {session.capacity}</p>
                <p><span className="font-semibold text-wellness-text">Sisa Peserta:</span> {session.remaining_slots}</p>
                <p><span className="font-semibold text-wellness-text">Level Sesi:</span> {session.level}</p>
                <p><span className="font-semibold text-wellness-text">Perlengkapan:</span> {session.equipment}</p>
                <p><span className="font-semibold text-wellness-text">Harga per Sesi:</span> {session.price}</p>
                <p><span className="font-semibold text-wellness-text">Metode Pembayaran:</span> {session.payment_methods}</p>
            </div>
            <div className="mt-6 rounded-2xl bg-wellness-soft p-4">
                <p className="text-sm font-semibold text-wellness-text">Tentang Sesi</p>
                <p className="mt-2 text-sm leading-relaxed text-wellness-muted">{session.description}</p>
            </div>
            <a
                href={session.button_url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700"
            >
                {session.button_text}
            </a>
        </Card>
    );
}
