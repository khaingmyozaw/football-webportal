import bannerVideo from "../assets/videos/banner.mp4";
import DownloadBtn from "./buttons/DownloadBtn";
import Container from "./layouts/Container";

const Banner = (props) => {
    return (
        <div className="w-full h-screen relative">
            <div className="h-full mx-auto p-3 bg-linear-to-b from-black/30 to-black relative z-10">
                <Container
                    className="h-full flex justify-center items-center flex-col"
                >
                    <h1
                        className="h-20 pe-2 text-4xl md:text-6xl lg:text-7xl text-center font-extrabold tracking-wide text-white bg-red-500 flex items-center gap-2"
                    >
                        <span className="h-full bg-black px-2">MM</span> Sports
                    </h1>
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl text-center font-extrabold tracking-wide text-white leading-10 md:leading-20 lg:leading-30"
                    >
                        Live the Thrill of <span className="text-green-500">Football</span>
                    </h1>
                    <p className="wrap-break-word lg:max-w-3/4 xl:max-w-1/2 text-lg text-center md:text-xl text-gray-100">
                        Catch every goal, every tackle, every moment. Stay updated with live scores, match schedules, and real-time stats from leagues around the world.
                    </p>

                    <DownloadBtn />
                </Container>
            </div>
            <Video />
        </div>
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