export default function totalInvestorsCard() {
    return (
        <>
            <a
            className="relative block p-8 overflow-hidden rounded-lg w-1/4  shadow-lg shadow-indigo-700 bg-slate-900"
            href=""
            >
                <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
                <div className="justify-between sm:flex">
                    <div>
                    <h5 className="text-lg text-slate-100">
                        Total Investors
                    </h5>
                    </div>
                </div>
                <div className="mt-4 sm:pr-8">
                    <h2 className="text-4xl font-bold text-slate-100">
                        36
                    </h2>
                </div>
            </a>
        </>
    )
}