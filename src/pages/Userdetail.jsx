import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadUser, updateAvatar } from "../features/auth/authSlice"
import Input from "../components/common/Input.jsx"
import toast from "react-hot-toast"


function Userdetail() {
    let { user, loading, error } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleAvatarChange = (e) => {
        let file = e.target.files[0]

        if (file) {
            console.log(file)
            dispatch(updateAvatar(file))
        }
    }

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    useEffect(() => {
        dispatch(loadUser())
        // console.log(user)
    }, [])


    if (loading) {
        return (
            <div className="h-screen grid place-content-center">
                <p className="text-2xl font-bold text-center">Loading.....</p>
            </div>
        )
    }
    if (!user) {
        return (
            <div className="h-screen grid place-content-center">
                <p className="text-2xl font-bold text-center">Please login first</p>
            </div>

        )
    }
    return (
        <div className="w-full bg-gray-100">
            <div className="bg-white md:ps-20 py-6 space-y-4">

                <div className="flex gap-4 items-start">
                    <div className="relative group w-20 h-20 md:w-44 md:h-44">
                        <label htmlFor="avatar-upload" className="cursor-pointer">
                            <img
                                src={user?.data?.avatar}
                                alt="User Avatar"
                                className="w-full h-full rounded-full object-cover border-2 border-indigo-500"
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm md:text-base font-medium">Change Avatar</span>
                            </div>
                        </label>


                        <input
                            id="avatar-upload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                                // handle file upload here
                                // console.log(e.target.files[0]);
                                handleAvatarChange(e)
                            }}
                        />
                    </div>


                    <div className="flex pt-3 flex-col space-y-10">
                        <div>
                            <h2 className="md:text-3xl font-bold text-gray-900 capitalize">{user?.data?.fullname}</h2>
                            <p className="text-sm text-gray-500">@{user?.data?.username}</p>
                            <p className="text-sm text-gray-500">{user?.data?.email}</p>
                        </div>
                        <button className=" bg-red-600 text-white font-semibold rounded py-1 hover:scale-105 transition-all duration-300">Update Profile</button>
                    </div>
                </div>


                <div className="border-t pt-4">
                    <h3 className="text-md font-semibold text-gray-700">Other Info</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li><span className="font-medium">Created At: </span> {new Date(user.data.createdAt).toLocaleString()}</li>
                        <li><span className="font-medium">Last Updated: </span> {new Date(user.data.updatedAt).toLocaleString()}</li>
                        <li><span className="font-medium">Watch History:</span> {user.data.watchHistory.length}</li>
                    </ul>
                </div>


            </div>
        </div>

    )
}

export default Userdetail
