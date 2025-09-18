import bannerVideo from "../assets/videos/banner.mp4";

export const Banner = (props) => {
    return (
        <div className="w-full h-screen relative">
            <div className="h-full mx-auto p-3 flex justify-center items-center flex-col bg-linear-to-b from-black/30 to-black">
                <h1
                    className="text-4xl md:text-6xl lg:text-7xl text-center font-extrabold tracking-wide text-white leading-10 md:leading-20 lg:leading-30"
                >Live the Thrill of <span className="text-green-500">Football</span>
                </h1>
                <p className="wrap-break-word lg:max-w-3/4 xl:max-w-1/2 text-lg text-center md:text-xl text-gray-100">
                    Catch every goal, every tackle, every moment. Stay updated with live scores, match schedules, and real-time stats from leagues around the world.
                </p>
                <button 
                    className="mt-6 py-3 px-8 border border-green-500 text-green-500 rounded-4xl text-lg font-bold cursor-pointer">
                        Install Our App Now
                </button>
            </div>
            <video
                autoPlay
                loop
                muted
                className="w-full h-full absolute top-0 left-0 -z-10 object-cover object-center"
            >
                <source
                    src={bannerVideo}
                    type="video/mp4"
                />
            </video>
        </div>
    )
};