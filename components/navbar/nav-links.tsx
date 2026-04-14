"use client"
const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}

export default function NavLinks() {
    const links = [
        { id: "services", label: "Services" },
        { id: "about", label: "About" },
        { id: "process", label: "Process" },
        { id: "pricing", label: "Packages" },
        { id: "faq", label: "FAQ" },
    ]

    return (
        <div className="flex items-center gap-8">
            {links?.map((link) => (
                <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    //add an animated underline on hover

                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                >
                    {link.label}
                </button>
            ))}
        </div>
    )
}
