// import axios from 'axios';
import React from 'react'

function History() {
    // const arr = axios.get('/history')
    // console.log(arr.data?.watchHistory)
    const historyItems = [
        {
            id: 1,
            thumbnail: "https://picsum.photos/180/101",
            title: "Building a Full-Stack Application with React",
            channelName: "Tech Academy",
            views: "125K",
            timestamp: "2 days ago",
            duration: "15:24"
        },
        {
            id: 2,
            thumbnail: "https://picsum.photos/180/102",
            title: "Top 10 Programming Best Practices You Should Know",
            channelName: "Code Masters",
            views: "89K",
            timestamp: "3 days ago",
            duration: "8:15"
        },
        {
            id: 3,
            thumbnail: "https://picsum.photos/180/103",
            title: "Learn CSS Grid in 20 Minutes",
            channelName: "Web Design Pro",
            views: "256K",
            timestamp: "1 week ago",
            duration: "20:30"
        },
    ];

    return (
        <div className="bg-[#f9f9f9] min-h-screen p-5">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-2xl mb-5 text-[#0f0f0f]">Watch history</h1>

                <div className="flex flex-col gap-4">
                    {historyItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex p-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            {/* Thumbnail Container */}
                            <div className="relative mr-4">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-[180px] h-[101px] rounded-lg object-cover"
                                />
                                <span className="absolute bottom-1 right-1 bg-black/80 text-white px-1.5 py-0.5 rounded text-xs">
                                    {item.duration}
                                </span>
                            </div>

                            {/* Video Info */}
                            <div className="flex-1">
                                <h3 className="text-base font-medium mb-2 text-[#0f0f0f]">
                                    {item.title}
                                </h3>
                                <div className="text-sm text-[#606060]">
                                    <span>{item.channelName}</span>
                                    <span className="mx-1">•</span>
                                    <span>{item.views} views</span>
                                    <span className="mx-1">•</span>
                                    <span>{item.timestamp}</span>
                                </div>
                            </div>

                            {/* More Options Button */}
                            <button
                                className="p-2 rounded-full hover:bg-gray-100"
                            >
                                <svg className="w-6 h-6 fill-[#606060]" viewBox="0 0 24 24">
                                    <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm0-6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm0-6c.83 0 1.5.67 1.5 1.5S12.83 7.5 12 7.5 10.5 6.83 10.5 6 11.17 4.5 12 4.5z" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default History
