import Link from "next/link"

const links = [
    { href: "/#focus-areas", label: "Focus" },
    { href: "/#resources", label: "Resources" },
    { href: "/services", label: "Work With Me" },
]

export default function NavLinks() {
    return (
        <div className="flex items-center gap-8">
            {links?.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium text-sm hover:cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-left after:transition-transform"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    )
}
