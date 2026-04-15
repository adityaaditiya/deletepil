import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { IconMenu2, IconYoga } from "@tabler/icons-react";
import Button from "@/Components/Landing/Button";

const defaultNavItems = [
    { name: "Home", href: route("welcome") },
    { name: "Contact", href: route("contact") },
];

export default function Navbar({ navItems = defaultNavItems, currentKey = null }) {
    const { auth } = usePage().props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-primary-100 bg-wellness-soft/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-md shadow-primary-700/20">
                        <IconYoga size={20} />
                    </div>
                    <div>
                        <p className="text-base font-semibold">ORO Pilates Studio</p>
                        <p className="text-xs text-wellness-muted">Wellness & Movement</p>
                    </div>
                </div>

                <div className="hidden items-center gap-7 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={item.name.toLowerCase() === currentKey ? "text-sm font-medium text-primary-600" : "text-sm text-wellness-muted transition hover:text-primary-600"}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {/* {auth?.user ? (
                        <Link href={route("dashboard")} className="hidden rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 md:inline-flex">
                            Dashboard
                        </Link>
                    ) : (
                        <Button as={Link} href={route("login")} className="hidden md:inline-flex">
                            Login / Register
                        </Button>
                    )} */}

                    <button
                        className="rounded-xl border border-primary-200 p-2.5 text-wellness-text md:hidden"
                        type="button"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        aria-label="Toggle mobile menu"
                    >
                        <IconMenu2 size={20} />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="border-t border-primary-100 bg-wellness-soft px-4 py-4 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm text-wellness-muted transition hover:text-primary-600">
                                {item.name}
                            </Link>
                        ))}

                        {/* {!auth?.user && (
                            <Button as={Link} href={route("login")} className="mt-2 w-full justify-center">
                                Login / Register
                            </Button>
                        )} */}
                    </div>
                </div>
            )}
        </nav>
    );
}
