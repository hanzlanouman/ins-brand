export default function GridBackground() {
    return (
        <>
            <div className="absolute inset-0 overflow-visible pointer-events-none">
                <div className="absolute inset-0 grid-background-centered" />
            </div>
        </>
    )
}
