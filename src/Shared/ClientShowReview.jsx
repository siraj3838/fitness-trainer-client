
const ClientShowReview = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-5 lg:px-0 flex justify-between mb-32 items-center gap-10">
            <div className="w-2/5 border-t-8 py-2 border-[#f35151]">
                <img className="h-[530px]" src="https://i.ibb.co/s5jyC23/Screenshot-2023-12-08-013055.png" alt="" />
            </div>
            <div className="w-3/5">
                <h2 className="text-5xl font-bold opacity-80">WHAT <br />CLIENTS SAY</h2>
                <div>
                    <progress className="progress progress-error w-28 ml-2 my-5"></progress>
                </div>
            </div>
        </div>
    );
};

export default ClientShowReview;