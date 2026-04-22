import DashboardLayout from "@/Layouts/DashboardLayout";
import React from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Button from "@/Components/Dashboard/Button";
import Search from "@/Components/Dashboard/Search";
import Pagination from "@/Components/Dashboard/Pagination";
import Checkbox from "@/Components/Dashboard/Checkbox";
import { getImageUrl } from "@/Utils/imageUrl";
import { IconCirclePlus, IconPencilCog, IconTrash, IconUserStar } from "@tabler/icons-react";
import Swal from "sweetalert2";

function TrainerCard({ trainer, isSelected, onSelect, onDelete }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <img
                src={getImageUrl(trainer.photo, "trainers") || "/assets/photo/photo1.png"}
                alt={trainer.name}
                className="h-52 w-full object-cover"
            />

            <div className="space-y-2 p-4">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{trainer.name}</h3>
                    <Checkbox value={trainer.id} checked={isSelected} onChange={onSelect} />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{trainer.expertise || "Belum diisi"}</p>
                <div className="space-y-2 border-t border-gray-100 pt-2">
                                            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-wellness-muted whitespace-pre-line">
                                                {trainer.biodata || "Biodata trainer belum diisi."}
                                            </p>
                </div>
            </div>

            <div className="flex border-t border-slate-100 dark:border-slate-800">
                <Link
                    href={route("trainers.edit", trainer.id)}
                    className="flex flex-1 items-center justify-center gap-1.5 py-3 text-sm font-medium text-warning-600 transition-colors hover:bg-warning-50 dark:hover:bg-warning-950/50"
                >
                    <IconPencilCog size={16} /> Edit
                </Link>
                <div className="w-px bg-slate-100 dark:bg-slate-800" />
                <button
                    onClick={() => onDelete(trainer.id)}
                    className="flex flex-1 items-center justify-center gap-1.5 py-3 text-sm font-medium text-danger-600 transition-colors hover:bg-danger-50 dark:hover:bg-danger-950/50"
                >
                    <IconTrash size={16} /> Hapus
                </button>
            </div>
        </div>
    );
}

export default function Index() {
    const { trainers } = usePage().props;
    const { data, setData, delete: destroy } = useForm({ selectedTrainer: [] });

    const setSelectedTrainer = (e) => {
        let items = [...data.selectedTrainer];
        if (items.includes(e.target.value)) {
            items = items.filter((id) => id !== e.target.value);
        } else {
            items.push(e.target.value);
        }
        setData("selectedTrainer", items);
    };

    const deleteData = (id) => {
        Swal.fire({
            title: "Hapus Trainer?",
            text: "Data yang dihapus tidak dapat dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Ya, Hapus!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("trainers.destroy", [id]));
                setData("selectedTrainer", []);
            }
        });
    };

    return (
        <>
            <Head title="Trainer" />

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                        <IconUserStar size={28} className="text-primary-500" />
                        Trainer
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{trainers.total || 0} trainer terdaftar</p>
                </div>
                <div className="flex gap-2">
                    {data.selectedTrainer.length > 0 && (
                        <Button
                            type="bulk"
                            icon={<IconTrash size={18} />}
                            className="bg-danger-500 text-white hover:bg-danger-600"
                            label={`Hapus ${data.selectedTrainer.length}`}
                            onClick={() => deleteData(data.selectedTrainer)}
                        />
                    )}
                    <Button
                        type="link"
                        href={route("trainers.create")}
                        icon={<IconCirclePlus size={18} strokeWidth={1.5} />}
                        className="bg-primary-500 text-white shadow-lg shadow-primary-500/30 hover:bg-primary-600"
                        label="Tambah Trainer"
                    />
                </div>
            </div>

            <div className="mb-5 max-w-sm">
                <Search url={route("trainers.index")} placeholder="Cari trainer..." />
            </div>

            {trainers.data.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {trainers.data.map((trainer) => (
                            <TrainerCard
                                key={trainer.id}
                                trainer={trainer}
                                isSelected={data.selectedTrainer.includes(trainer.id.toString())}
                                onSelect={setSelectedTrainer}
                                onDelete={deleteData}
                            />
                        ))}
                    </div>

                    <Pagination links={trainers.links} align="end" />
                </>
            ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
                    Belum ada data trainer.
                </div>
            )}
        </>
    );
}

Index.layout = (page) => <DashboardLayout children={page} />;
