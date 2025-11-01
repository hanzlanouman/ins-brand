"use client"

import { useEffect, useState, useCallback } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function ThemeSwitcher() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch

    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), [])

    const isDark = resolvedTheme === "dark"

    const toggle = useCallback(() => {
        setTheme(isDark ? "light" : "dark")
    }, [isDark, setTheme])

    if (!mounted) {
        // keep layout stable
        return <div className="h-8 w-14" />
    }

    return (
        <button
            type="button"
            onClick={toggle}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    toggle()
                }
            }}
            role="switch"
            aria-checked={isDark}
            aria-label="Toggle theme"
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className={[
                // container (pill)
                "relative inline-flex h-8 w-14 items-center rounded-full",
                "border border-border/70",
                isDark ? "bg-neutral-900" : "bg-card",
                "transition-colors motion-reduce:transition-none",
                "shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
            ].join(" ")}
        >
            {/* Icons (faint background hints) */}
            <Sun
                className={[
                    "absolute left-2 h-4 w-4",
                    isDark ? "opacity-30" : "opacity-80 text-amber-500",
                    "transition-opacity motion-reduce:transition-none",
                ].join(" ")}
            />
            <Moon
                className={[
                    "absolute right-2 h-4 w-4",
                    isDark ? "opacity-80 text-indigo-300" : "opacity-30",
                    "transition-opacity motion-reduce:transition-none",
                ].join(" ")}
            />

            {/* Thumb */}
            <span
                className={[
                    "pointer-events-none",
                    "inline-flex h-6 w-6 items-center justify-center rounded-full",
                    "bg-foreground text-background",
                    "shadow-md",
                    "transform transition-transform motion-reduce:transition-none",
                    isDark ? "translate-x-7" : "translate-x-1",
                ].join(" ")}
            >
                {isDark ? (
                    <Moon className="h-3.5 w-3.5" />
                ) : (
                    <Sun className="h-3.5 w-3.5" />
                )}
            </span>
        </button>
    )
}
