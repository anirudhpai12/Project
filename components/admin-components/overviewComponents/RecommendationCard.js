import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
};

const RecommendationCards = ({ shares }) => {

    return(
        <div className="relative " >
            <Slider {...settings} className="w-full">
            { shares.map((share) => ( 
                <div>
                    <div className="justify-between mx-2 overflow-hidden text-left transition-shadow duration-200 bg-slate-900 rounded shadow-xl group hover:shadow-2xl">
                    <div className="p-5">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-slate-600">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                        </div>
                        <p className="mb-2 font-bold text-slate-50">{share.name}</p>
                        <p className="text-sm leading-5 text-slate-200">
                        {share.description}
                        </p>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    )
}

export default RecommendationCards