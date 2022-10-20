import Recommendations from "./overviewComponents/Recommendations"
import Profit from "./overviewComponents/Profit"
import TotalAmountCard from "./overviewComponents/TotalAmountCard"
import TotalInvestorsCard from "./overviewComponents/TotalInvestorsCard"
import Performance from "./overviewComponents/Performance"

export default function Overview() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-5 justify-center pt-4">
                <TotalAmountCard />
                <TotalInvestorsCard />
                <Profit />
            </div>
            <Performance />
            <Recommendations />
        </div>
    )
}