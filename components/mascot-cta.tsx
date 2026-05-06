"use client"

import type { MouseEventHandler, ReactNode } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

type MascotCTAProps = {
    children: ReactNode
    href?: string
    id?: string
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
    className?: string
    wrapperClassName?: string
    reserveSpace?: boolean
    showArrow?: boolean
    disabled?: boolean
    ariaBusy?: boolean
}

export function MascotCTA({
    children,
    href,
    id,
    onClick,
    className,
    wrapperClassName,
    reserveSpace = false,
    showArrow = true,
    disabled = false,
    ariaBusy = false,
}: MascotCTAProps) {
    const content = (
        <>
            <span>{children}</span>
            {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden /> : null}
        </>
    )

    const buttonClassName = cn(
        "relative z-10 inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-7 font-sans text-sm font-extrabold text-white shadow-[0_0_22px_rgba(214,26,255,0.24)] transition-colors hover:bg-[#e143ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-70",
        className
    )

    const mascot = (
        <span className="pointer-events-none absolute bottom-[calc(100%-2px)] right-0 z-0 h-16 w-20 -translate-x-1/2 overflow-hidden">
            <Image
                src="/anim.png"
                alt=""
                width={128}
                height={128}
                sizes="128px"
                className="absolute bottom-[-5.2rem] left-1/2 h-auto w-90 -translate-x-1/2 scale-95 opacity-95 drop-shadow-[0_10px_16px_rgba(26,26,26,0.16)] transition-all duration-500 ease-out group-hover:bottom-[-1.9rem] group-hover:scale-100"
                aria-hidden
            />
        </span>
    )

    return (
        <span className={cn("inline-block", reserveSpace && "pt-14", wrapperClassName)}>
            <span className="group relative isolate inline-flex overflow-visible">
                {mascot}
                {href ? (
                    <a
                        id={id}
                        href={href}
                        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
                        className={buttonClassName}
                        aria-busy={ariaBusy}
                    >
                        {content}
                    </a>
                ) : (
                    <button
                        id={id}
                        type="button"
                        onClick={onClick as MouseEventHandler<HTMLButtonElement>}
                        disabled={disabled}
                        className={buttonClassName}
                        aria-busy={ariaBusy}
                    >
                        {content}
                    </button>
                )}
            </span>
        </span>
    )
}
