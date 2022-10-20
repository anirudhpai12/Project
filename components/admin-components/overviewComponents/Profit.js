export default function Profit() {
    return (
        <>
            <div className="relative flex flex-col p-4 px-6 overflow-hidden rounded-lg w-2/5 shadow-lg shadow-indigo-700 bg-slate-700 gap-2">
                <div className="relative p-4 overflow-hidden rounded-lg shadow-sm shadow-indigo-700 bg-slate-900 flex justify-between">
                    <h2 className="text-slate-200 text-lg">Total Profit</h2>
                    <h2 className="text-transparent text-4xl font-bold bg-clip-text bg-gradient-to-r from-green-300 to-blue-500 ">2000/-</h2>
                </div>
                <div className="relative p-4 overflow-hidden rounded-lg shadow-sm shadow-indigo-700 bg-slate-900 flex justify-between">
                    <h2 className="text-slate-200 text-lg">Total Revenue</h2>
                    <h2 className="text-transparent text-4xl font-bold bg-clip-text bg-gradient-to-r from-green-300 to-blue-500 ">400/-</h2>
                </div>
            </div>
        </>
    )
}