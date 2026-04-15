"use client"

import { useRef, useState } from "react"

type CTAProps = {
    children?: string
    onClick?: () => void | Promise<void>
    href?: string
    id?: string
}

export function PrimaryCTA({
    children = "BOOK A STRATEGY CALL",
    onClick,
    href,
    id,
}: CTAProps) {
    const [busy, setBusy] = useState(false)
    const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

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
        "inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xs border border-primary/55 bg-primary px-6 py-4 text-[14px] font-extrabold text-white uppercase tracking-wider shadow-[0_0_22px_rgba(214,26,255,0.28)] transition-colors duration-200 hover:bg-[#e143ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-70"

    const content = (
        <>
            <span>{children}</span>
            {busy ? (
                <Spinner />
            ) : (
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                </svg>
            )}
        </>
    )

    if (href) {
        return (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <a id={id} ref={btnRef as any} href={href} onClick={handleClick} className={className} aria-busy={busy}>
                {content}
            </a>
        )
    }

    return (
        <button
            id={id}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={btnRef as any}
            type="button"
            onClick={handleClick}
            disabled={busy}
            className={className}
            data-staxly-event="hero_primary_cta_click"
            aria-busy={busy}
        >
            {content}
        </button>
    )
}
