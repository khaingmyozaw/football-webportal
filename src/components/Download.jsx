import DownloadBtn from "./buttons/DownloadBtn";
import Container from "./layouts/Container";
import Title from "./ui/title";

const Download = () => {
    return (
        <Container>
            <Title content="Stay up to date with" className="mb-12">
                <span className="text-red-500">MMSports</span>
            </Title>
            <DownloadBtn className="mx-auto" />
        </Container>
    )
}

export default Download;