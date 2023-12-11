import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Link } from "react-router-dom"

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}


const HomeBanner = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )
    return (
        <div className='mt-[64px]'>
            <div className="max-w-screen-2xl mx-auto">

                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide3">
                        <div className="hero h-[550px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/VM4LyM5/360-F-572910874-gjy-Ce-Tn-Htx-FMIu-PFcf-E0djzn-BMgs-U4-Bf.jpg)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="absolute lg:left-16 text-center text-neutral-content">
                                <div className="max-w-md opacity-80">
                                    <h1 className="mb-5 text-5xl font-bold "><span className="text-red-600">GYMSTER</span> Training Center</h1>
                                    <p className="mb-5 text-slate-300">Physical exercise is definitely needed to maintain good health. In our center you will find the best trainers who will give you mental confidence to take care of your body. <br />
                                    </p>

                                    <span className="mr-3 text-lg text-gray-400">Join our team <span className="text-red-600 ml-1">Click </span> Here--------------></span>
                                    <Link to={'/login'}>
                                        <button className="bg-[#f35151] px-4 py-1 rounded hover:scale-110 transition-all">Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1">
                        <div className="hero h-[550px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/S6gtVf1/360-F-414020916-hrb-XZVSg-F6-Nbinm-Qs1-Cr-ZTVTRl-DEyeq-V.jpg)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="absolute lg:left-32 text-center text-neutral-content">
                                <div className="max-w-md opacity-80">
                                    <h1 className="mb-5 text-5xl text-left font-bold uppercase">Time To Put <br />
                                        <span className="text-blue-600">Fitness</span> <br /> First</h1>
                                    <span className="mr-3 text-lg text-gray-400">Are You Ready <span className="text-red-600 ml-1">Click </span> Here--------------></span>
                                    <Link to={'/login'}>
                                        <button className="bg-[#f35151] px-4 py-1 rounded hover:scale-110 transition-all">Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <div className="hero h-[550px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/KsSgCY0/240-F-392723523-r-G9-Nhy-Ol-Ket7lypv-SFAr-GJh4-Zy-IIy-MTg.jpg)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="absolute lg:right-80 text-center text-neutral-content">
                                <div className="max-w-md opacity-80">
                                    <h1 className="mb-5 text-5xl text-right font-bold uppercase"> Reach <br />
                                        <span className="space-y-5">Your</span> <br /> <span className="text-blue-600">Goals</span></h1>
                                    <Link to={'/login'}>
                                        <button className="bg-[#f35151] px-4 py-1 rounded hover:scale-110 transition-all">Get Started</button>
                                    </Link>
                                    <span className="mr-3 text-lg text-gray-400"> <span className="text-red-600 ml-1"> -------Click here</span> Are You Ready</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide6">
                        <div className="hero h-[550px] relative" style={{ backgroundImage: 'url(https://i.ibb.co/Trm0QBB/h3-bg.jpg)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="absolute lg:left-20 text-center text-neutral-content">
                                <div className="max-w-md opacity-80">
                                    <h1 className="mb-5 text-5xl text-left font-bold uppercase"> Get Your <br />
                                        <span className="space-y-5 text-blue-600">Body</span> <br /> in shape</h1>
                                    <span className="mr-3 text-lg text-gray-400">Are You Ready <span className="text-red-600 ml-1">Click </span> Here--------------></span>
                                    <Link to={'/login'}>
                                        <button className="bg-[#f35151] px-4 py-1 rounded hover:scale-110 transition-all">Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <div className="hero h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/hFRgTtR/fitness-center-banner.jpg)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="text-center text-neutral-content">
                                <div className="max-w-md opacity-80">
                                    <h1 className="mb-5 text-5xl font-bold uppercase"> <span className="text-red-500">WORLD</span> CLASS<br />
                                        <span className="space-y-5">FACILITIES</span></h1>
                                    <span className="mr-3 text-lg text-gray-300">Are You Ready <span className="text-red-600 ml-1">Click </span> Here--------------></span>
                                    <Link to={'/login'}>
                                        <button className="bg-[#f35151] px-4 py-1 rounded hover:scale-110 transition-all">Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="flex justify-end">
                    <div className="max-w-sm px-5 mt-3">
                        <div ref={thumbnailRef} className="keen-slider thumbnail">
                            <div className="keen-slider__slide number-slide3">
                                <img className="h-16 w-20" src="https://i.ibb.co/VM4LyM5/360-F-572910874-gjy-Ce-Tn-Htx-FMIu-PFcf-E0djzn-BMgs-U4-Bf.jpg" alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide1">
                                <img className="h-16 w-20" src="https://i.ibb.co/S6gtVf1/360-F-414020916-hrb-XZVSg-F6-Nbinm-Qs1-Cr-ZTVTRl-DEyeq-V.jpg" alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide2">
                                <img className="h-16 w-20" src="https://i.ibb.co/KsSgCY0/240-F-392723523-r-G9-Nhy-Ol-Ket7lypv-SFAr-GJh4-Zy-IIy-MTg.jpg" alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide6">
                                <img className="h-16 w-20" src="https://i.ibb.co/Trm0QBB/h3-bg.jpg" alt="" />
                            </div>
                            <div className="keen-slider__slide number-slide4">
                                <img className="h-16 w-20" src="https://i.ibb.co/hFRgTtR/fitness-center-banner.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider py-4"></div>
            </div>
        </div>
    );
};

export default HomeBanner;