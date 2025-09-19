import bannerVideo from "../assets/videos/banner.mp4";

const Banner = (props) => {
    return (
        <div className="w-full h-screen relative">
            <div className="h-full mx-auto p-3 flex justify-center items-center flex-col bg-linear-to-b from-black/30 to-black relative z-10">
                <h1
                    className="text-4xl md:text-6xl lg:text-7xl text-center font-extrabold tracking-wide text-white leading-10 md:leading-20 lg:leading-30"
                >Live the Thrill of <span className="text-green-500">Football</span>
                </h1>
                <p className="wrap-break-word lg:max-w-3/4 xl:max-w-1/2 text-lg text-center md:text-xl text-gray-100">
                    Catch every goal, every tackle, every moment. Stay updated with live scores, match schedules, and real-time stats from leagues around the world.
                </p>
                <button
                    className="mt-6 py-3 px-4 bg-green-500 shadow-lg shadow-green-500/50 ring-0 rounded-4xl text-lg font-bold flex gap-3 cursor-pointer">
                    <DownloadIcon />
                    <span>Install Our App Now</span>
                </button>
            </div>
            <Video />
        </div>
    )
}

const DownloadIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line"
        >
            <path d="M12 17V3" /><path d="m6 11 6 6 6-6" />
            <path d="M19 21H5" />
        </svg>
    )
}

const Video = () => {
    return (
        <video
            autoPlay
            loop
            muted
            className="w-full h-full absolute top-0 left-0 object-cover object-center"
        >
            <source
                src={bannerVideo}
                type="video/mp4"
            />
        </video>
    )
}

export default Banner