"use client"
const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}

export default function NavLinks() {
    const links = [
        { id: "services", label: "Our Services" },
        // { id: "partnership", label: "Our Partnership" },
    ]

    return (
        <div className="flex items-center gap-8">
            {links.map((link) => (
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
