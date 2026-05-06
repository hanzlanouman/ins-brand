"use client"

import { useState } from "react"

import { MascotCTA } from "@/components/mascot-cta"

type CTAProps = {
    children?: string
    onClick?: () => void | Promise<void>
    href?: string
    id?: string
}

export function PrimaryCTA({
    children = "Book a Free Strategy Call",
    onClick,
    href,
    id,
}: CTAProps) {
    const [busy, setBusy] = useState(false)

    const handleClick = async () => {
        if (busy) return
        try {
            setBusy(true)
            await onClick?.()
        } finally {
            setBusy(false)
        }
    }

    const Spinner = () => (
        <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" className="opacity-30" />
            <path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" strokeWidth="3" className="opacity-90" />
        </svg>
    )

    const className =
        "inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border border-primary/55 bg-primary/85 px-4 py-2 text-[14px] font-medium text-white tracking-wider shadow-[0_0_22px_rgba(214,26,255,0.28)] transition-colors duration-200 hover:bg-[#e143ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-70"

    const content = (
        <>
            <span>{children}</span>
            {busy ? <Spinner /> : null}
        </>
    )

    if (href) {
        return (
            <MascotCTA id={id} href={href} onClick={handleClick} className={className} showArrow={false} ariaBusy={busy}>
                {content}
            </MascotCTA>
        )
    }

    return (
        <MascotCTA
            id={id}
            onClick={handleClick}
            disabled={busy}
            className={className}
            showArrow={false}
            ariaBusy={busy}
        >
            {content}
        </MascotCTA>
    )
}
