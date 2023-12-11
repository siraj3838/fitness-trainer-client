
const ClassesBanner = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
            <div className="flex justify-center">
                <div>
                    <h3 className="text-5xl font-extrabold text-center opacity-80">UNLIMITED <br /> CLASSES</h3>
                    <progress className="progress progress-error w-28 ml-16 my-5"></progress>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
                <div className="relative group overflow-hidden">
                    <img className="object-cover h-full w-full group-hover:scale-110 transition duration-300" src="https://i.ibb.co/6HzHVj0/classes-7-600x600.jpg" alt="" />
                    <div className="bg-black text-gray-300 absolute bottom-0 px-4 py-2 space-y-3">
                        <h2 className="uppercase font-bold text-xl">belly dancing class</h2>
                        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum illum</p>
                        <button className="bg-blue-600 py-1 w-full rounded hover:scale-110 transition-all">Details</button>
                    </div>
                </div>
                <div className="relative group overflow-hidden">
                    <img className="object-cover h-full w-full group-hover:scale-110 transition duration-300" src="https://i.ibb.co/bg7bvLB/classes-99-600x600.jpg" alt="" />
                    <div className="bg-black text-gray-300 absolute bottom-0 px-4 py-2 space-y-3">
                        <h2 className="uppercase font-bold text-xl">belly dancing class</h2>
                        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum illum</p>
                        <button className="bg-blue-600 py-1 w-full rounded hover:scale-110 transition-all">Details</button>
                    </div>
                </div>
                <div className="relative group overflow-hidden">
                    <img className="object-cover h-full w-full group-hover:scale-110 transition duration-300" src="https://i.ibb.co/bNstvcp/classes-88-600x600.jpg" alt="" />
                    <div className="bg-black text-gray-300 absolute bottom-0 px-4 py-2 space-y-3">
                        <h2 className="uppercase font-bold text-xl">belly dancing class</h2>
                        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum illum</p>
                        <button className="bg-blue-600 py-1 w-full rounded hover:scale-110 transition-all">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesBanner;