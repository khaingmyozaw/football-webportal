import DownloadIcon from "../icons/DownloadIcon";

const DownloadBtn = ({ className }) => {
    return (
        <button
            className={`mt-6 py-3 px-4 bg-green-500 shadow-lg shadow-green-500/50 ring-0 rounded-4xl text-lg font-bold flex gap-3 cursor-pointer ${className ?? ""}`}>
            <DownloadIcon />
            <span>Install Our App Now</span>
        </button>
    )
}

export default DownloadBtn;