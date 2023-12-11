
const Trainer = () => {
    return (
        <div className="mb-10">
            <div className="divider py-4"></div>
            <div className="flex justify-center mb-7">
                <div>
                    <h2 className="text-5xl font-bold opacity-80">EXPERT
                        <br />TRAINERS</h2>
                    <div>
                        <progress className="progress progress-error w-28 ml-2 my-5"></progress>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-lg mx-auto">
                <div className="border-r-4 pr-3 border-[#f35151]">
                    <img className="w-full h-[400px]" src="https://i.ibb.co/nDpV3Yb/Screenshot-2023-12-09-235005.png" alt="" />
                    <h3 className="text-xl font-bold uppercase mt-2">jenifer Wing</h3>
                </div>
                <div className="border-r-4 pr-3 border-[#f35151]">
                    <img className="w-full h-[400px]" src="https://i.ibb.co/9THvwd9/Screenshot-2023-12-09-234535.png" alt="" />
                    <h3 className="text-xl font-bold uppercase mt-2">Julien Sara</h3>
                </div>
                <div>
                    <img className="w-full h-[400px]" src="https://i.ibb.co/HYyfgj8/Screenshot-2023-12-09-234416.png" alt="" />
                    <h3 className="text-xl font-bold uppercase mt-2">Lisa Weifen</h3>
                </div>
            </div>
            <div className="divider py-4"></div>
        </div>
    );
};

export default Trainer;