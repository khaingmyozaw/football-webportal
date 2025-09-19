import { WobbleCardLayout } from "./buttons/WobbleCardLayout"
import Container from "./layouts/Container"
import Title from "./ui/title"

const Features = () => {
    return (
        <Container>
            <Title content="Key Features" />
            <p className="text-center mb-6">
                The best features only available on mmsports
            </p>

            <WobbleCardLayout />
        </Container>
    )
}

export default Features