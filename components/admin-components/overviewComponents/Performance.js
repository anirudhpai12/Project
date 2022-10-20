export default function Performance() {
    return(
        <div className="container rounded-xl px-6  h-full text-gray-100 ">
            <div className="flex flex-row w-full rounded-xl mb-3 mt-1 justify-between items-center">
                <h2 className="text-green-100 text-2xl font-bold ">Performance</h2>
                <button className="text-green-300 text-base pr-2 hover:text-green-100">View All</button>
            </div>
            <div className="overflow-x-auto rounded-md">
                <table className="min-w-full text-sm">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="w-24" />
                </colgroup>
                <thead className="bg-slate-900">
                    <tr className="text-left">
                        <th className="p-3">Share</th>
                        <th className="p-3">CMP</th>
                        <th className="p-3">Issued</th>
                        <th className="p-3">Buy At</th>
                        <th className="p-3">Target</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-opacity-20 border-slate-400 bg-slate-700">
                        <td className="p-3">
                            <p>JPPOWER</p>
                        </td>
                        <td className="p-3">
                            <p>7.65</p>
                        </td>
                        <td className="p-3">
                            <p>1/02/22</p>
                        </td>
                        <td className="p-3">
                            <p>6.4</p>
                        </td>
                        <td className="p-3">
                            <p>7.3</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-6 py-1 font-semibold rounded-md bg-slate-400 text-gray-900">
                            <span>Pending</span>
                            </span>
                        </td>
                    </tr>

                    <tr className="border-b border-opacity-20 border-slate-400 bg-slate-700">
                        <td className="p-3">
                            <p>JPPOWER</p>
                        </td>
                        <td className="p-3">
                            <p>7.65</p>
                        </td>
                        <td className="p-3">
                            <p>1/02/22</p>
                        </td>
                        <td className="p-3">
                            <p>6.4</p>
                        </td>
                        <td className="p-3">
                            <p>7.3</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-6 py-1 font-semibold rounded-md bg-slate-400 text-gray-900">
                            <span>Pending</span>
                            </span>
                        </td>
                    </tr>

                    <tr className="border-b border-opacity-20 border-slate-400 bg-slate-700">
                        <td className="p-3">
                            <p>JPPOWER</p>
                        </td>
                        <td className="p-3">
                            <p>7.65</p>
                        </td>
                        <td className="p-3">
                            <p>1/02/22</p>
                        </td>
                        <td className="p-3">
                            <p>6.4</p>
                        </td>
                        <td className="p-3">
                            <p>7.3</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-6 py-1 font-semibold rounded-md bg-green-400 text-gray-900">
                            <span>Gain</span>
                            </span>
                        </td>
                    </tr>

                    <tr className="border-b border-opacity-20 border-slate-400 bg-slate-700">
                        <td className="p-3">
                            <p>JPPOWER</p>
                        </td>
                        <td className="p-3">
                            <p>7.65</p>
                        </td>
                        <td className="p-3">
                            <p>1/02/22</p>
                        </td>
                        <td className="p-3">
                            <p>6.4</p>
                        </td>
                        <td className="p-3">
                            <p>7.3</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-6 py-1 font-semibold rounded-md bg-green-400 text-gray-900">
                            <span>Gain</span>
                            </span>
                        </td>
                    </tr>

                    <tr className="border-b border-opacity-20 border-slate-400 bg-slate-700">
                        <td className="p-3">
                            <p>JPPOWER</p>
                        </td>
                        <td className="p-3">
                            <p>7.65</p>
                        </td>
                        <td className="p-3">
                            <p>1/02/22</p>
                        </td>
                        <td className="p-3">
                            <p>6.4</p>
                        </td>
                        <td className="p-3">
                            <p>7.3</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-6 py-1 font-semibold rounded-md bg-red-400 text-gray-900">
                            <span>Loss</span>
                            </span>
                        </td>
                    </tr>

                    <tr className="border-b border-opacity-20 border-slate-400 bg-slate-700">
                        <td className="p-3">
                            <p>JPPOWER</p>
                        </td>
                        <td className="p-3">
                            <p>7.65</p>
                        </td>
                        <td className="p-3">
                            <p>1/02/22</p>
                        </td>
                        <td className="p-3">
                            <p>6.4</p>
                        </td>
                        <td className="p-3">
                            <p>7.3</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-6 py-1 font-semibold rounded-md bg-red-400 text-gray-900">
                            <span>Loss</span>
                            </span>
                        </td>
                    </tr>
                    
                </tbody>
                </table>
            </div>
        </div>

    )
}