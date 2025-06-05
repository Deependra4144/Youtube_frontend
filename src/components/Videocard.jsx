import React from 'react'

function Videocard() {
    return (
        <div className="rounded-lg border shadow-md hover:scale-105 transition-all duration-300 overflow-hidden">
            <img className="w-full rounded-lg" src="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg" alt="" />
            <div className="flex items-start gap-2">
                <img className="rounded-full w-9" src="https://yt3.googleusercontent.com/hwSmxY9VTk182w_IaiZb_tanNCFIaZXlePToJum6d1_ajGChKUIynvhXBwyo4Au23-2NfNLObw=s900-c-k-c0x00ffffff-no-rj" alt="" />

                <div>
                    <p>Title here Lorem, ipsum dolor sit amet Lorem sit amet. Lorem, ipsum dolor.</p>
                    <p className="text-gray-700">Chanal Name</p>
                    <p className="text-gray-700">views:22k . 1 year ago</p>
                </div>
            </div>
        </div>
    )
}

export default Videocard
