import SidebarTemp from "./SidebarTemp"

const Sidebarlayout = () => {
    return (
        <div className="flex flex-row border-1 border-dashed">
            <SidebarTemp />
            <div className="bg-slate-200 flex-1 text-white w-screen"></div>
        </div>
    )
}

export default Sidebarlayout