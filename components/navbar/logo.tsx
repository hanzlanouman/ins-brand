"use client"

import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2">
            {/* Light theme */}
            <Image
                src="/logo/logo-light.png"
                alt="Staxly Logo"
                width={160}
                height={50}
                priority
                className="object-contain logo-light"
            />
            {/* Dark theme */}
            <Image
                src="/logo/logo-dark.png"
                alt="Staxly Logo"
                width={160}
                height={50}
                priority
                className="object-contain logo-dark"
            />
        </Link>
    )
}
