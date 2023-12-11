import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="max-w-screen-2xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;