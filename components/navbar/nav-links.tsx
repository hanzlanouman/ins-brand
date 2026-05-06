"use client"
const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}

export default function NavLinks() {
    const links = [
        // { id: "process", label: "How It Works" },
        // { id: "proof", label: "Proof" },
        { id: "pricing", label: "Pricing" },
        { id: "faq", label: "FAQ" },
    ]

    return (
        <div className="flex items-center gap-8">
            {links?.map((link) => (
                <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    //add an animated underline on hover

                    className="text-foreground hover:text-primary transition-colors font-medium text-sm hover:cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-left after:transition-transform"
                >
                    {link.label}
                </button>
            ))}
        </div>
    )
}
