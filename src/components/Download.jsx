import DownloadBtn from "./buttons/DownloadBtn";
import Title from "./ui/title";

const Download = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <Title content="Stay up to date with the MMSports" className="mb-12" />
            <DownloadBtn className="mx-auto" />
        </section>
    )
}

export default Download;