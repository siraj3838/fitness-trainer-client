import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Trainer = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const noneUsers = () => {
        toast.error('Please Login Dear')
        navigate('/login')
    }
    return (
        <div className="mt-24">
            <Helmet>
                <title>GYMSTER || Trainer</title>
            </Helmet>
            <div className="flex justify-center">
                {
                    user ? <Link to={'/beTrainerPage'}>
                        <button className="bg-[#2c6be0ec] hover:bg-[#245dc7] font-semibold hover:scale-110 duration-600 transition-all py-2 px-2 rounded-lg text-white ">Be a Trainer page</button>
                    </Link>
                    :
                    <button onClick={noneUsers} className="bg-[#2c6be0ec] hover:bg-[#245dc7] font-semibold hover:scale-110 duration-600 transition-all py-2 px-2 rounded-lg text-white ">Be a Trainer page</button>
                }
            </div>
        </div>
    );
};

export default Trainer;