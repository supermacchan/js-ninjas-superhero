import { CardContainer, ImgContainer, Image, Name } from "./Card.styled"

export const Card = ({ hero, image }) => {
    return (
        <CardContainer>
            <ImgContainer>
                <Image src={image} alt={hero}/>
            </ImgContainer>
            <Name>{hero}</Name>
        </CardContainer>
    )
}