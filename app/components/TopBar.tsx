export default function TopBar() {
    return (
        <div className="top-bar">
            <div className="max-w-[1280px] mx-auto px-12 flex items-center justify-between">
                <p className="text-sm">
                    <span className="text-yellow-300 font-semibold">Special Offer!</span>
                    {" "}&mdash; Get 20% Off On Vegetables
                </p>
                <div className="flex items-center gap-4 text-sm">
                    <span className="opacity-80">English</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-80">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
