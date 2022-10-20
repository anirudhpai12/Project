
import { BiUser } from "react-icons/bi"

export default function Listcard() {
    return(
        <div className="flex flex-col bg-slate-900 rounded-xl p-3 h-full px-5 gap-3">
            <div className="flex flex-row w-full h-1/6 rounded-xl justify-between items-center">
                <h2 className="text-green-100 text-2xl font-bold">Popular Shares</h2>
                <button className="text-green-300 text-base pr-2 hover:text-green-100">View All</button>
            </div>
            <div className="grid grid-cols-6 items-center gap-5 bg-gradient-to-b from-green-300 to-green-600 w-full h-1/6 rounded-xl p-2  justify-items-center">
                <div className="p-2 px-4 col-span-1 rounded-3xl bg-slate-900 text-green-100 text-center font-bold">1</div>
                <div className="col-span-3 text-slate-900 font-[500] text-xl">Policybazaar</div>
                <div className="col-span-2 text-slate-900 font-[500] text-2xl flex flex-row items-center gap-1">
                    <BiUser className="mt-1"/>
                    17
                </div>
            </div>
            <div className="grid grid-cols-6 items-center gap-5 p-2 justify-items-center bg-slate-800 w-full h-1/6 rounded-xl">
            <div className="p-2 px-4 col-span-1 rounded-3xl bg-green-300 text-slate-900 text-center font-bold">2</div>
                <div className="col-span-3 text-green-100 font-[500] text-xl">Zomato</div>
                <div className="col-span-2 text-green-100 text-2xl flex flex-row items-center gap-1">
                    <BiUser className="mt-1"/>
                    10
                </div>
            </div>
            <div className="grid grid-cols-6 items-center gap-5 p-2 justify-items-center bg-slate-800 w-full h-1/6 rounded-xl">
            <div className="p-2 px-4 col-span-1 rounded-3xl bg-green-300 text-slate-900 text-center font-bold">3</div>
                <div className="col-span-3 text-green-100 font-[500] text-xl">HDFC Bank</div>
                <div className="col-span-2 text-green-100 text-2xl flex flex-row items-center gap-1">
                    <BiUser className="mt-1"/>
                    6
                </div>
            </div>
            <div className="grid grid-cols-6 items-center gap-5 p-2 justify-items-center bg-slate-800 w-full h-1/6 rounded-xl">
            <div className="p-2 px-4 col-span-1 rounded-3xl bg-green-300 text-slate-900 text-center font-bold">4</div>
                <div className="col-span-3 text-green-100 font-[500] text-xl">Canara Bank</div>
                <div className="col-span-2 text-green-100 text-2xl flex flex-row items-center gap-1">
                    <BiUser className="mt-1"/>
                    4
                </div>
            </div>
        </div>
    )
}