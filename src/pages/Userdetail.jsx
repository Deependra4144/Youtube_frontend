import { useSelector } from "react-redux"


function Userdetail() {
    let { user } = useSelector(state => state.auth)
    console.log(user)
    return (
        <div className="w-full bg-gray-100">
            <div className="bg-white md:ps-20 py-6 space-y-4">

                <div className="flex gap-4 items-start">
                    <img
                        src={user.data.avatar}
                        alt="User Avatar"
                        className="w-20 h-20 md:w-44 md:h-44 rounded-full object-cover border-2 border-indigo-500"
                    />
                    <div className="flex pt-3 flex-col space-y-1">
                        <h2 className="md:text-3xl font-bold text-gray-900 capitalize">{user.data.fullname}</h2>
                        <p className="text-sm text-gray-500">@{user.data.username}</p>
                        <p className="text-sm text-gray-500">{user.data.email}</p>
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
