import React, { useMemo } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Input from "@/Components/Dashboard/Input";
import Textarea from "@/Components/Dashboard/TextArea";
import { IconArrowLeft, IconDeviceFloppy, IconUserStar } from "@tabler/icons-react";
import toast from "react-hot-toast";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        expertise: "",
        biodata: "",
        photo: null,
    });

    const previewImage = useMemo(() => {
        if (data.photo instanceof File) return URL.createObjectURL(data.photo);
        return "/assets/photo/photo1.png";
    }, [data.photo]);

    const submit = (e) => {
        e.preventDefault();
        post(route("trainers.store"), {
            forceFormData: true,
            onSuccess: () => toast.success("Trainer berhasil ditambahkan"),
            onError: () => toast.error("Gagal menyimpan trainer"),
        });
    };

    return (
        <>
            <Head title="Tambah Trainer" />

            <div className="mb-6">
                <Link href={route("trainers.index")} className="mb-3 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600">
                    <IconArrowLeft size={16} /> Kembali ke Trainer
                </Link>
                <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                    <IconUserStar size={28} className="text-primary-500" />
                    Tambah Trainer
                </h1>
            </div>

            <form onSubmit={submit} className="max-w-3xl space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            type="text"
                            label="Nama Trainer"
                            placeholder="Masukkan nama"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            errors={errors.name}
                        />
                        <Input
                            type="text"
                            label="Keahlian"
                            placeholder="Contoh: Pilates Specialist"
                            value={data.expertise}
                            onChange={(e) => setData("expertise", e.target.value)}
                            errors={errors.expertise}
                        />
                    </div>
                    <div className="mt-4">
                        <Textarea
                            label="Profile Biodata Trainer"
                            placeholder="Masukkan biodata singkat trainer"
                            value={data.biodata}
                            onChange={(e) => setData("biodata", e.target.value)}
                            errors={errors.biodata}
                            rows={4}
                        />
                    </div>
                    <div className="mt-5">
                        <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Foto Trainer</p>
                        <div className="mb-4 h-56 w-full max-w-xs overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                            <img src={previewImage} alt="Preview trainer" className="h-full w-full object-cover" />
                        </div>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData("photo", e.target.files?.[0] ?? null)}
                            errors={errors.photo}
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <Link
                        href={route("trainers.index")}
                        className="rounded-xl border border-slate-200 px-5 py-2.5 font-medium text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
                    >
                        Batal
                    </Link>
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-600 disabled:opacity-50"
                    >
                        <IconDeviceFloppy size={18} />
                        {processing ? "Menyimpan..." : "Simpan"}
                    </button>
                </div>
            </form>
        </>
    );
}

Create.layout = (page) => <DashboardLayout children={page} />;
