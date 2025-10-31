"use client"

import { useRef, useState } from "react"

type CTAProps = {
    children?: string
    onClick?: () => void | Promise<void>
    href?: string
    id?: string
}

export function PrimaryCTA({
    children = "Book Your Free Strategy Call",
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

    const base =
        "group relative inline-flex items-center justify-center rounded-full cursor-pointer  text-sm font-semibold" +
        " focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-all " +
        " [--shine:linear-gradient(100deg,transparent,rgba(255,255,255,.35),transparent)] " +
        " [--shadow:0_10px_30px_-10px_#03ef62] " +
        " [--inner:inset_0_1px_0_0_rgba(255,255,255,.35)] dark:[--inner:inset_0_1px_0_0_rgba(0,0,0,.25)] " +
        " shadow-[var(--shadow)]" +
        " "

    const surface =
        // filled primary pill with subtle vertical gradient and inner highlight
        "relative w-full rounded-full ring-1 ring-black/5 dark:ring-white/10 " +
        " bg-primary py-4 px-6 text-white dark:bg-primary dark:text-black " +
        " [background-image:linear-gradient(to_bottom,rgba(255,255,255,.12),transparent)] " +
        " before:absolute before:inset-0 before:rounded-full before:pointer-events-none " +
        " before:[box-shadow:var(--inner)]"

    const content =
        "relative z-10 flex items-center gap-2 whitespace-nowrap transition-transform duration-300 " +
        " "

    const arrow =
        "h-4 w-4 transition-transform duration-300 " +
        (busy ? "opacity-0" : "opacity-100")

    const Shine = () => (
        <span
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
            <span
                className="absolute left-[-30%] top-0 h-full w-[35%] -skew-x-12 opacity-0
                   bg-[image:var(--shine)] transition-all duration-700
                   group-hover:opacity-100 "
            />
        </span>
    )



    const Spinner = () => (
        <svg
            className="absolute right-4 h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" className="opacity-30" />
            <path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" strokeWidth="3" className="opacity-90" />
        </svg>
    )

    const Inner = (
        <>
            {/* ripple target */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full" />
            <span className={surface}>
                <span className={content}>
                    {children}
                    <svg className={arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14" />
                        <path d="M13 5l7 7-7 7" />
                    </svg>
                </span>
                {busy && <Spinner />}
                <Shine />
            </span>

            {/* subtle soft outer ring */}
            <span
                aria-hidden
                className="absolute inset-0 rounded-full ring-4 ring-primary/10 dark:ring-primary/10"
            />
        </>
    )

    if (href) {
        return (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <a id={id} ref={btnRef as any} href={href} onClick={handleClick} className={base} aria-busy={busy}>
                {Inner}
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
            className={base}
            aria-busy={busy}
            onMouseDown={(e) => {
                // click ripple
                const host = (e.currentTarget.firstChild as HTMLElement) // ripple container
                if (!host) return
                const r = document.createElement("span")
                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                r.className =
                    "pointer-events-none absolute aspect-square w-0 rounded-full bg-white/25 dark:bg-black/20 " +
                    " motion-safe:animate-ripple"
                r.style.left = `${x}px`
                r.style.top = `${y}px`
                host.appendChild(r)
                r.addEventListener("animationend", () => r.remove())
            }}
        >
            {Inner}
        </button>
    )
}
