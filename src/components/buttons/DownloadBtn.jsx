import DownloadIcon from "../icons/DownloadIcon";

const DownloadBtn = ({ className }) => {
    return (
        <a
            href="#"
            className={`w-fit mt-6 py-4 px-6 border border-green-500 bg-black/50 ring-0 rounded-xl text-xl font-bold flex gap-3 cursor-pointer ${className ?? ""}`}>
            <DownloadIcon />
            <span>Install Our App Now</span>
        </a>
    )
}

export default DownloadBtn;