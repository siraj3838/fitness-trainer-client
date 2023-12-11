
const Exclusive = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-5 lg:px-0 mt-10 opacity-80">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-5xl font-extrabold">
                        NEW EXCLUSIVE <br />
                        WORKOUTS
                    </h3>
                    <progress className="progress progress-error w-28"></progress>
                </div>
                <div className="lg:pr-16">
                    <div className="flex justify-center -space-x-14">
                        <div className="mix-blend-multiply bg-lime-700 -mt-10 -mr-20 h-28 w-28 rounded-full"></div>
                        <div className="mix-blend-multiply z-10 bg-red-700 h-28 w-28 rounded-full"></div>
                        <div className="mix-blend-multiply z-10 bg-blue-700 h-28 w-28 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;