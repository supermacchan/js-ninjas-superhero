import { CardContainer, ImgContainer, Image, Name } from "./Card.styled";
import { Modal } from "components/Modal/Modal";
import { useState } from 'react';

export const Card = ({ hero, image }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    };

    return (
        <>
            <CardContainer onClick={toggleModal}>
                <ImgContainer>
                    <Image src={image} alt={hero}/>
                </ImgContainer>
                <Name>{hero}</Name>
            </CardContainer>

            {showModal &&
                <Modal
                    onClose={toggleModal}
                />
            }
        </>
    )
}