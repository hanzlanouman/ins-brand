"use client"

import Link from "next/link"

type BrandMarkProps = {
    href?: string
    theme?: "light" | "dark"
    size?: "sm" | "md" | "lg"
}

const sizeMap = {
    sm: "text-[1.85rem] sm:text-[1.95rem]",
    md: "text-[2.15rem] sm:text-[2.3rem]",
    lg: "text-[2.4rem] sm:text-[2.55rem]",
}

const dotMap = {
    sm: "h-[0.3em] w-[0.3em] rounded-[3px]",
    md: "h-[0.32em] w-[0.32em] rounded-[4px]",
    lg: "h-[0.34em] w-[0.34em] rounded-[4px]",
}

function BrandWord({ theme = "light", size = "md" }: { theme?: "light" | "dark"; size?: "sm" | "md" | "lg" }) {
    const textColor = theme === "dark" ? "text-white" : "text-foreground"

    return (
        <span
            className={`inline-flex items-end ${sizeMap[size]} font-[family:var(--font-brand)] font-extrabold leading-none tracking-[-0.08em] ${textColor}`}
        >
            <span>Arfah</span>
            <span
                aria-hidden
                className={`ml-1 mb-[0.12em] inline-block ${dotMap[size]} bg-primary shadow-[0_0_20px_rgba(214,26,255,0.28)]`}
            />
        </span>
    )
}

export default function BrandMark({ href = "/", theme = "light", size = "md" }: BrandMarkProps) {
    return (
        <Link href={href} className="inline-flex items-center">
            <BrandWord theme={theme} size={size} />
        </Link>
    )
}

