/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
// Import the OFFICIAL cal.com React component
import Cal from "@calcom/embed-react"

export default function BookYourCall() {
    const searchParams = useSearchParams()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    // This is our new 15-minute strategy call link
    // CRITICAL: This is just the "path", not the full URL
    // PLEASE ask Arfah to create this 15-minute event in her cal.com
    const CAL_LINK_PATH = "arfahali/30min"

    useEffect(() => {
        const paramName = searchParams.get("name") || ""
        const paramEmail = searchParams.get("email") || ""
        setName(paramName)
        setEmail(paramEmail)
    }, [searchParams])

    return (
        <main className="min-h-screen bg-background flex items-center justify-center px-4 pt-20">
            <div className="max-w-4xl w-full text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        Thanks, {name || "there"}! One Last Step...
                    </h1>
                    <p className="text-lg text-muted-foreground">Pick a time below that works for you. We&apos;re excited to chat!</p>
                </div>

                {/* HERE IS THE REAL FIX:
                  We are swapping the <iframe> for the official <Cal /> component.
                  This will feel 100% native.
                */}
                <Cal
                    calLink={CAL_LINK_PATH}
                    style={{
                        width: "100%", minHeight: "700px", overflow: "hidden", border: "none",
                    }}
                    // The config prop is how we pass all our data and theme!
                    config={{
                        name: name,
                        email: email,
                        theme: "dark",
                        layout: "month_view",
                    }}
                />

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

