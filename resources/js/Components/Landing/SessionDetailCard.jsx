import React from "react";
import Card from "@/Components/Landing/Card";
import { getImageUrl } from "@/Utils/imageUrl";

export default function SessionDetailCard({ session }) {
   const imageUrl = getImageUrl(session.image, "sessions") || "/assets/thumbnail/image-1.png";

    return (
        <Card className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Bagian Gambar Header */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <img 
                    src={imageUrl} 
                    alt={session.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
                {/* Badge Level Sesi di atas gambar */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wide text-primary-700 shadow-sm backdrop-blur-sm">
                    {session.level}
                </div>
            </div>

            {/* Bagian Konten Kartu */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
                
                {/* Judul & Trainer */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{session.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary-600">
                        Instruktur: <span className="font-semibold text-gray-800">{session.trainer_name}</span>
                    </p>
                </div>

                {/* Grid Info Ringkas (Waktu, Kapasitas, Harga) */}
                <div className="mb-6 grid grid-cols-2 gap-4 rounded-2xl border border-gray-50 bg-gray-50/50 p-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Jadwal</span>
                        <span className="font-semibold text-gray-800">{session.date}</span>
                        <span className="text-sm text-gray-600">Pukul {session.time} ({session.duration} menit)</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Harga Sesi</span>
                        <span className="font-bold text-primary-700">{session.price}</span>
                        <span className="text-xs text-gray-500">{session.payment_methods}</span>
                    </div>
                    
                    <div className="col-span-2 mt-2 flex items-center justify-between border-t border-gray-200 pt-3">
                        <span className="text-sm text-gray-600">
                            Equipment: <br /><span className="font-medium text-gray-800">{session.equipment}</span>
                        </span>
                          {/* Indikator Slot */} 
                        <span className={`w-fit whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${session.remaining_slots <= 2 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                            Sisa {session.remaining_slots} / {session.capacity} Slot
                        </span>
                    </div>
                    
                    {/* Menambahkan inline-block w-32 text-center */}
                    
                </div>

                {/* Deskripsi Sesi */}
                <div className="mb-8 flex-1">
                    <p className="text-sm font-semibold text-gray-900">Tentang Sesi Ini</p>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                        {session.description}
                    </p>
                </div>

                {/* Tombol CTA */}
                <a
                    href={session.button_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-primary-500/30 transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                    {session.button_text || "Daftar Sekarang"}
                </a>
            </div>
        </Card>
    );
}