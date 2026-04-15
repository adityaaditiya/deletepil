import { usePage } from "@inertiajs/react";
import { IconHome2, IconUsers, IconPhoto, IconUserStar, IconCalendarEvent } from "@tabler/icons-react";
import hasAnyPermission from "./Permission";

function Menu() {
    const { url } = usePage();

    return [
        {
            title: "Pilates Studio Control",
            details: [
                {
                    title: "Kelola Menu Studio",
                    href: route("studio-pages.index"),
                    active: url.startsWith("/dashboard/studio-pages"),
                    icon: <IconHome2 size={20} strokeWidth={1.5} />,
                    permissions: hasAnyPermission(["studio-pages-access"]),
                },
                {
                    title: "Kelola Jadwal Sesi",
                    href: route("studio-sessions.index"),
                    active: url.startsWith("/dashboard/studio-sessions"),
                    icon: <IconCalendarEvent size={20} strokeWidth={1.5} />,
                    permissions: hasAnyPermission(["studio-pages-access"]),
                },
            ],
        },
        {
            title: "User Management",
            details: [
                {
                    title: "Pengguna",
                    href: route("users.index"),
                    active: url.startsWith("/dashboard/users"),
                    icon: <IconUsers size={20} strokeWidth={1.5} />,
                    permissions: hasAnyPermission(["users-access"]),
                },
                {
                    title: "Trainer",
                    href: route("trainers.index"),
                    active: url.startsWith("/dashboard/trainers"),
                    icon: <IconUserStar size={20} strokeWidth={1.5} />,
                    permissions: hasAnyPermission(["trainers-access"]),
                },
            ],
        },
        {
            title: "Setting",
            details: [
                {
                    title: "Kelola Gambar Landing Page",
                    href: route("settings.landing-page.edit"),
                    active: url === "/dashboard/settings/landing-page",
                    icon: <IconPhoto size={20} strokeWidth={1.5} />,
                    permissions: hasAnyPermission(["landing-page-settings-access"]),
                },
            ],
        },
    ];
}

export { Menu };
