import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hook/useAxios";

const ClientsForm = () => {
    const myAxios = useAxios();
    const {data, refetch} = useQuery({
        queryKey: ['vai'],
        queryFn: async ()=> {
            const res = await myAxios.get('/users')
            refetch();
            return res.data;
        }
    })
    return (
        <div className="relative">
            <div className="bg-slate-800 flex items-center py-14">
                <div className="w-1/2">
                    <img className="w-4/5 h-[560px] ml-20" src="https://i.ibb.co/k0YBccj/Screenshot-2023-12-10-004610.png" alt="" />
                </div>
                <div className="w-1/2 text-gray-400">
                    <form className="w-1/2">
                        <h3 className="text-2xl font-bold my-8">Client Review</h3>
                        <input className="w-full py-1 px-3 bg-transparent border" type="text" name="clientName" placeholder="Full Name" />
                        <br />
                        <br />
                        <input className="w-full py-1 px-3 bg-transparent border" type="text" name="clientEmail" placeholder="Email" />
                        <br />
                        <br />
                        <input className="w-full py-1 px-3 bg-transparent border" type="text" name="clientLocation" placeholder="From" />
                        <br />
                        <br />
                        <textarea className="w-full py-1 px-3 bg-transparent border" placeholder="Said Something" name="clientMessage" id="" cols="30" rows="6"></textarea>
                        <button className="bg-[#f35151] w-full my-3 py-1 text-white">Send</button>
                    </form>
                </div>
                <div className="bg-[#f35151] -top-28 right-0 py-10 px-5 w-5/6 absolute text-white">
                    <div className="grid md:grid-cols-5 text-center">
                        <div className="flex justify-center items-center border-r-2">
                            <div>
                                <h2 className="text-6xl font-extrabold">98%</h2>
                                <h5 className="text-xl font-bold">SATISFIED CLIENTS</h5>
                            </div>
                        </div>
                        <div className="flex justify-center items-center border-r-2">
                            <div>
                                <h2 className="text-6xl font-extrabold">948</h2>
                                <h5 className="text-xl font-bold">PIECES OF EQUIPMENT</h5>
                            </div>
                        </div>
                        <div className="flex justify-center items-center border-r-2">
                            <div>
                                <h2 className="text-6xl font-extrabold">275</h2>
                                <h5 className="text-xl font-bold">EXPERT TRAINERS</h5>
                            </div>
                        </div>
                        <div className="flex justify-center items-center border-r-2">
                            <div>
                                <h2 className="text-6xl font-extrabold">{data ? data?.length : 0}</h2>
                                <h5 className="text-xl font-bold">CLUB MEMBERS</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsForm;