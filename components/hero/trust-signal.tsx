export default function TrustSignal() {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-foreground/15 bg-foreground/3">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-primary text-xs">
                            ★
                        </span>
                    ))}
                </div>
                <span className="text-xs font-medium text-foreground/70">10+ Happy Clients</span>
            </div>
        </div>
    )
}
