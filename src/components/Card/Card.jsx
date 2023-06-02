import { useState } from 'react';
import { Modal } from "components/Modal/Modal";
import { CardContainer, ImgContainer, Image, Name } from "./Card.styled";
import photo from "../../images/photo.png"

export const Card = ({ hero }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    };

    return (
        <>
            <CardContainer onClick={toggleModal}>
                <ImgContainer>
                    <Image src={hero.images[0] || photo} alt={hero.nickname}/>
                </ImgContainer>
                <Name>{hero.nickname}</Name>
            </CardContainer>

            {showModal &&
                <Modal
                    onClose={toggleModal}
                    hero={hero}
                />
            }
        </>
    )
}