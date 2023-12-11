
const HomeCard = () => {
    return (
        <div>
            <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-14">
                <div className="border-r-2">
                    <div>
                        <h4 className="text-2xl font-bold">GROUP FITNESS</h4>
                        <p className="text-gray-400 mt-2 mb-7 lg:pr-5">From humble beginnings, we have evolved in a world leading fit-out specialist, renowned for delivering exquisite interiors for the world’s <br /> top brands.</p>
                    </div>
                    <div className="w-3/4">
                        <img className="w-full hover:scale-110 transition-all" src="https://i.ibb.co/LY4ZqLy/image1-h1.jpg" alt="" />
                    </div>
                </div>
                <div className="border-r-2">
                    <div className="flex justify-center">
                        <img className="w-3/4 hover:scale-110 transition-all" src="https://i.ibb.co/QPvHk43/image2-h1.jpg" alt="" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-center mt-7">PERSONAL TRAINER</h4>
                        <p className="text-gray-400 mt-2 mb-7 lg:px-10">We are the big thinkers who see things differently. A team of restless minds who use their skills and knowledge to propel new discoveries.</p>
                    </div>
                </div>
                <div className="">
                    <div>
                        <h4 className="text-2xl font-bold">COMMUNITIES</h4>
                        <p className="text-gray-400 mt-2 mb-7 lg:pr-[69px]">When it comes to dynamic problem solvers, we are the best. United in our passion for delivering unrivalled quality and client experience together.</p>
                    </div>
                    <div className="w-3/4">
                        <img className="w-full hover:scale-110 transition-all" src="https://i.ibb.co/dJGHt5j/image3-h1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="divider py-4"></div>
        </div>
    );
};

export default HomeCard;