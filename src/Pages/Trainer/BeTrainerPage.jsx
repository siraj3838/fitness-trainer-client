import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxios from "../../Hook/useAxios";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const BeTrainerPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { user } = useContext(AuthContext)
    const myAxios = useAxios();
    // const navigate = useNavigate();


    const onSubmit = async (data) => {
        console.log(data)
        // reset();
        const imageFile = { image: data.image[0] }
        const resImage = await myAxios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        const socialIconsImage = { socialIcons: data.socialIcons[0] }
        const resImageSocial = await myAxios.post(image_hosting_api, socialIconsImage, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        if (resImage.data.success && resImageSocial.data.success) {

        }
    }
    return (
        <div className="mt-24">
            <Helmet>
                <title>GYMSTER || Be Trainer</title>
            </Helmet>

            <div className="flex">
                <div className="w-2/5">
                    <img className="w-4/5 h-[500px] ml-6" src="https://i.ibb.co/mqDQpK4/Screenshot-2023-12-10-002023.png" alt="" />
                </div>
                <div className="w-3/5 text-gray-400">
                    <h3 className="text-accent text-center text-3xl font-bold my-5">Trainer Qualification</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className=" font-medium px-6">

                        <div className="grid lg:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Full Name</span>
                                </label>
                                <input type="text" {...register("fullName")} defaultValue={user?.displayName} readOnly className="input input-bordered bg-transparent border-2 border-base-300" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Email</span>
                                </label>
                                <input type="email" {...register("email")} defaultValue={user?.email} readOnly className="input input-bordered bg-transparent border-2 border-base-300" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Age</span>
                                </label>
                                <input type="text" {...register("age", { required: true})} placeholder=" Enter Your Age" className="input input-bordered bg-transparent border-2 border-base-300" />
                                {errors.age?.type === "required" &&
                                    <p className="text-red-600">age is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Photo</span>
                                </label>
                                <input  {...register('image', { required: true })}
                                    type="file" className="file-input w-full bg-transparent border-2 border-base-300" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Skills</span>
                                </label>
                                <input type="text" {...register("skills", { required: true})} placeholder=" Type Your skills" className="input input-bordered bg-transparent border-2 border-base-300" />
                                {errors.skills?.type === "required" &&
                                    <p className="text-red-600">Skills is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Available Time in a week</span>
                                </label>
                                <input type="text" {...register("weekTime", { required: true})} placeholder=" Type Your Available Time in a week" className="input input-bordered bg-transparent border-2 border-base-300" />
                                {errors.weekTime?.type === "required" &&
                                    <p className="text-red-600">Available Time is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Available time in a day</span>
                                </label>
                                <input type="text" {...register("dayTime", { required: true})} placeholder=" Type Your Available time in a day" className="input input-bordered bg-transparent border-2 border-base-300" />
                                {errors.skills?.type === "required" &&
                                    <p className="text-red-600">Available Time is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-lg">Social icons</span>
                                </label>
                                <input  {...register('socialIcons', { required: true })}
                                    type="file" className="file-input w-full bg-transparent border-2 border-base-300" />
                                {errors.photoURL && <span className="text-red-600">Social Icons is required</span>}
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="bg-[#2c6be0ec] hover:bg-[#245dc7] text-xl font-semibold hover:scale-110 duration-600 transition-all py-2 rounded-lg text-white">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BeTrainerPage;