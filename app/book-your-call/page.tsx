/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function BookYourCall() {
    const searchParams = useSearchParams()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        const paramName = searchParams.get("name") || ""
        const paramEmail = searchParams.get("email") || ""
        setName(paramName)
        setEmail(paramEmail)
    }, [searchParams])

    return (
        <main className="min-h-screen bg-background flex items-center justify-center px-4 pt-20">
            <div className="max-w-2xl w-full text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        Thanks, {name || "there"}! One Last Step...
                    </h1>
                    <p className="text-lg text-muted-foreground">Pick a time below that works for you. We&apos;re excited to chat!</p>
                </div>

                {/* Calendly Embed Placeholder */}
                <div className="rounded-lg bg-muted border border-border p-12 min-h-96 flex flex-col items-center justify-center text-center">
                    <p className="text-muted-foreground mb-4">Calendly calendar will be embedded here</p>
                    <p className="text-sm text-muted-foreground">
                        Pre-filled with: {name && email ? `${name} (${email})` : "Your info"}
                    </p>
                </div>

                <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                        Need to go back?{" "}
                        <Link href="/" className="text-primary hover:underline">
                            Return to home
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
