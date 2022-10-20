import { useState } from "react"
import RecommendationCards from "./RecommendationCard"
import sharesData from "./Sharesdata"

const Recommendations = () => {

  const [shares, setShares] = useState(sharesData)

  return (
    <>
      <div className="bg-transparent">
      <div className="relative px-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <h2 className="text-slate-200 text-2xl font-bold my-6">Recent Recommendations</h2>
        <RecommendationCards shares={shares} />
      </div>
    </div>
    </>
  )
}

export default Recommendations