import React, { useMemo, useState } from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Input from "@/Components/Dashboard/Input";
import Textarea from "@/Components/Dashboard/TextArea";
import { IconCalendarEvent, IconDeviceFloppy, IconEdit } from "@tabler/icons-react";
import { getImageUrl } from "@/Utils/imageUrl";
import toast from "react-hot-toast";

const initialForm = {
    image: null,
    title: "",
    trainer_name: "",
    date: "",
    time: "",
    duration: "",
    capacity: "",
    remaining_slots: "",
    level: "",
    equipment: "",
    price: "",
    payment_methods: "",
    description: "",
    button_text: "",
    button_url: "",
};

function SessionForm({ title, data, setData, errors, processing, onSubmit, previewImage, submitLabel }) {
    return (
        <form onSubmit={onSubmit} className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h2>

            <div>
                <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Preview Gambar</p>
                <div className="mb-4 h-56 w-full max-w-sm overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                    <img src={previewImage} alt="Preview sesi" className="h-full w-full object-cover" />
                </div>
                <Input type="file" accept="image/*" onChange={(e) => setData("image", e.target.files?.[0] ?? null)} errors={errors.image} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Input label="Judul" value={data.title} onChange={(e) => setData("title", e.target.value)} errors={errors.title} />
                <Input label="Nama Trainer" value={data.trainer_name} onChange={(e) => setData("trainer_name", e.target.value)} errors={errors.trainer_name} />
                <Input label="Tanggal" value={data.date} onChange={(e) => setData("date", e.target.value)} errors={errors.date} />
                <Input label="Jam" value={data.time} onChange={(e) => setData("time", e.target.value)} errors={errors.time} />
                <Input label="Durasi" value={data.duration} onChange={(e) => setData("duration", e.target.value)} errors={errors.duration} />
                <Input label="Kapasitas" value={data.capacity} onChange={(e) => setData("capacity", e.target.value)} errors={errors.capacity} />
                <Input label="Sisa Slot" value={data.remaining_slots} onChange={(e) => setData("remaining_slots", e.target.value)} errors={errors.remaining_slots} />
                <Input label="Level" value={data.level} onChange={(e) => setData("level", e.target.value)} errors={errors.level} />
                <Input label="Perlengkapan" value={data.equipment} onChange={(e) => setData("equipment", e.target.value)} errors={errors.equipment} />
                <Input label="Harga" value={data.price} onChange={(e) => setData("price", e.target.value)} errors={errors.price} />
                <Input label="Metode Pembayaran" value={data.payment_methods} onChange={(e) => setData("payment_methods", e.target.value)} errors={errors.payment_methods} />
                <Input label="Teks Tombol" value={data.button_text} onChange={(e) => setData("button_text", e.target.value)} errors={errors.button_text} />
                <Input label="URL Tombol" value={data.button_url} onChange={(e) => setData("button_url", e.target.value)} errors={errors.button_url} />
            </div>

            <Textarea
                label="Deskripsi"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                errors={errors.description}
                rows={4}
            />

            <button
                type="submit"
                disabled={processing}
                className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-600 disabled:opacity-50"
            >
                <IconDeviceFloppy size={18} />
                {processing ? "Menyimpan..." : submitLabel}
            </button>
        </form>
    );
}

export default function Index() {
    const { studioSessions } = usePage().props;
    const [editingSession, setEditingSession] = useState(null);

    const createForm = useForm(initialForm);
    const editForm = useForm({ ...initialForm, _method: "PUT" });

    const createPreview = useMemo(() => {
        if (createForm.data.image instanceof File) return URL.createObjectURL(createForm.data.image);
        return "/assets/thumbnail/image-1.png";
    }, [createForm.data.image]);

    const editPreview = useMemo(() => {
        if (editForm.data.image instanceof File) return URL.createObjectURL(editForm.data.image);
        return getImageUrl(editingSession?.image, "sessions") || "/assets/thumbnail/image-1.png";
    }, [editForm.data.image, editingSession]);

    const onCreate = (e) => {
        e.preventDefault();
        createForm.post(route("studio-sessions.store"), {
            forceFormData: true,
            onSuccess: () => {
                toast.success("Jadwal sesi berhasil ditambahkan");
                createForm.reset();
            },
            onError: () => toast.error("Gagal menyimpan jadwal sesi"),
        });
    };

    const startEdit = (session) => {
        setEditingSession(session);
        editForm.setData({
            ...initialForm,
            _method: "PUT",
            ...session,
            image: null,
        });
    };

    const onUpdate = (e) => {
        e.preventDefault();
        editForm.post(route("studio-sessions.update", editingSession.id), {
            forceFormData: true,
            onSuccess: () => {
                toast.success("Jadwal sesi berhasil diperbarui");
                setEditingSession(null);
            },
            onError: () => toast.error("Gagal memperbarui jadwal sesi"),
        });
    };

    return (
        <>
            <Head title="Kelola Jadwal Sesi" />

            <div className="mb-6">
                <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                    <IconCalendarEvent size={28} className="text-primary-500" />
                    Kelola Jadwal Sesi
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Kelola data detail sesi pilates dari dashboard.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <SessionForm
                    title="Tambah Jadwal Sesi"
                    data={createForm.data}
                    setData={createForm.setData}
                    errors={createForm.errors}
                    processing={createForm.processing}
                    onSubmit={onCreate}
                    previewImage={createPreview}
                    submitLabel="Simpan"
                />

                {editingSession ? (
                    <SessionForm
                        title={`Edit Jadwal: ${editingSession.title}`}
                        data={editForm.data}
                        setData={editForm.setData}
                        errors={editForm.errors}
                        processing={editForm.processing}
                        onSubmit={onUpdate}
                        previewImage={editPreview}
                        submitLabel="Simpan Perubahan"
                    />
                ) : (
                    <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
                        Pilih data sesi di bawah untuk mulai edit.
                    </div>
                )}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
                {studioSessions.map((session) => (
                    <div key={session.id} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                        <img
                            src={getImageUrl(session.image, "sessions") || "/assets/thumbnail/image-1.png"}
                            alt={session.title}
                            className="h-44 w-full rounded-xl object-cover"
                        />
                        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{session.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{session.date} • {session.time}</p>
                        <button
                            onClick={() => startEdit(session)}
                            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-warning-500 px-4 py-2 text-sm font-medium text-white hover:bg-warning-600"
                        >
                            <IconEdit size={16} /> Edit
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

Index.layout = (page) => <DashboardLayout children={page} />;
