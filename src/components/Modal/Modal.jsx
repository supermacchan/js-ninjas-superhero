import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { updateCurrent } from 'redux/hero/slice';
import { nanoid } from 'nanoid';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { 
    Backdrop, 
    ModalPopup, 
    Gallery,
    ImgContainer, 
    Image,
    Title,
    Text,
    Heading,
    Buttons,
    Button
} from './Modal.styled';

export const Modal = ({ hero, onClose }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleKeydown = event => {
            if (event.code === 'Escape') {
                onClose();
            };
        };

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    }, [onClose]);

    const handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    const handleEditClick = () => {
        dispatch(updateCurrent(hero._id));
    }

    const modalRoot = document.querySelector('#modal-root');
    
    return createPortal(
        <Backdrop onClick={handleOverlayClick}>
            <ModalPopup>
                <Title>{hero.nickname}</Title>
                <Gallery>
                    {hero.images.map(img => {
                        return (
                            <ImgContainer key={nanoid()}>
                                <Image src={img} alt={hero.nickname}/>
                            </ImgContainer>
                        )
                    })}
                </Gallery>
                <Text><Heading>Real Name:</Heading> {hero.real_name}</Text>
                <Text><Heading>Origin Story:</Heading> {hero.origin_description}</Text>
                <Text><Heading>Superpowers:</Heading> {hero.superpowers}</Text>
                <Text><Heading>Catchphrase:</Heading> {hero.catch_phrase}</Text>

                <Buttons>
                    <Link to={"/edit"} onClick={handleEditClick} style={{color: 'var(--main-text-color)'}}>
                        <FiEdit3 size={20} />
                    </Link>
                    <Button type='button' onClick={onClose}>
                        <AiOutlineCloseCircle size={20}/>
                    </Button>
                </Buttons>
            </ModalPopup>
        </Backdrop>,
        modalRoot,
    );
};
