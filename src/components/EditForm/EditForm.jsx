import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { operations } from "redux/hero/operations";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from "react-toastify";
import { 
    Form, 
    Label, 
    Description, 
    Input, 
    FileInput,
    TextArea, 
    Button, 
    DeleteBtn,
    MainInfo,
    AdditionalInfo,
    Block,
    Gallery,
    ImgContainer, 
    Image,
    ImgButton
} from "./EditForm.styled";

export const EditForm = ({ info }) => {
    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [origin, setOrigin] = useState('');
    const [powers, setPowers] = useState('');
    const [phrase, setPhrase] = useState('');
    const [mainImg, setMainImg] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    
    const [pictures, setPictures] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        switch (e.target.name) {
            case "nickname": 
                setNickname(e.target.value);
                break;
            case "real_name": 
                setName(e.target.value);
                break;
            case "origin": 
                setOrigin(e.target.value);
                break;
            case "superpowers": 
                setPowers(e.target.value);
                break;
            case "catchphrase": 
                setPhrase(e.target.value);
                break;
            default: 
                return;
        }
    }

    // filling out the form fields when opening the Edit page
    useEffect(() => {
        if (!info) {
            return;
        }

        const { nickname, real_name, origin_description, superpowers, catch_phrase, images } = info;
        setNickname(nickname);
        setName(real_name);
        setOrigin(origin_description);
        setPowers(superpowers);
        setPhrase(catch_phrase);
        setMainImg(images[0]);
        setImage1(images[1]);
        setImage2(images[2]);

        setPictures(images);

        sessionStorage.setItem('hero', JSON.stringify(info));

    }, [info]);

    // fetching the hero info for editing upon page refreshing
    useEffect(() => {
        if (location.pathname === '/edit') {
            const storedFormData = sessionStorage.getItem('hero');
            const hero = JSON.parse(storedFormData);

            setNickname(hero.nickname);
            setName(hero.real_name);
            setOrigin(hero.origin_description);
            setPowers(hero.superpowers);
            setPhrase(hero.catch_phrase);
            setPictures(hero.images);
        }
      }, [location.pathname]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newInfo = formRequest();

        if (location.pathname === '/create') {
            dispatch(operations.createHero(newInfo));
            navigate('/');
            reset();
        }

        if (location.pathname === '/edit') {
            dispatch(operations.updateHero({id: info._id, newInfo}));
        }
    }

    const handleDelete = () => {
        if (location.pathname !== '/edit') {
            return;
        }

        const id = info._id
        dispatch(operations.deleteHero(id));
        navigate('/');
        reset();
    }

    const handleDeleteImage = (e) => {
        const currentPic = e.currentTarget.children[0].src;

        setPictures(prevState => prevState.filter(img => img !== currentPic));

        switch (pictures.indexOf(currentPic)) {
            case 0:
                setMainImg(null);
                break;
            case 1:
                setImage1(null);
                break;
            case 2: 
                setImage2(null);
                break;
            default:
                return;
        }
    }

    const handleUploadClick = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        if (!file) { 
            return;
        }

        reader.readAsDataURL(file);

        const imgArray = pictures;

        switch (e.target.name) {
            case "main_image": {
                reader.onloadend = function () {
                    const duplicate = duplicateCheck(reader.result);

                    if (duplicate) {
                        e.target.value = null;
                        return;
                    }

                    imgArray.splice(0, 1, reader.result);
                    setPictures(imgArray);
                    setMainImg(file);
                    e.target.value = null;
                    return;
                };
                break;
            }
            case "image1": {
                reader.onloadend = function () {
                    const duplicate = duplicateCheck(reader.result);

                    if (duplicate) {
                        e.target.value = null;
                        return;
                    }

                    imgArray.splice(1, 1, reader.result);
                    setPictures(imgArray);
                    setImage1(file);
                    e.target.value = null;
                };
                break;
            }
            case "image2": {
                reader.onloadend = function () {
                    const duplicate = duplicateCheck(reader.result);

                    if (duplicate) {
                        e.target.value = null;
                        return;
                    }

                    imgArray.splice(2, 1, reader.result);
                    setPictures(imgArray);
                    setImage2(file);
                    e.target.value = null;
                };
                break;
            } 
            default: 
                return;
        }
    }

    const duplicateCheck = (item) => {
        if (pictures.includes(item)) {
            toast.error("This image is already uploaded, please select another one!");
            return true;
        }
        return false;
    }

    const formRequest = () => {
        const data = new FormData();

        if (mainImg) {
            data.append('img', mainImg);
        }

        if (image1) {
            data.append('img', image1);
        }

        if (image2) {
            data.append('img', image2);
        }

        if (nickname !== '') {
            data.append('nickname', nickname);
        }

        if (name !== '') {
            data.append('real_name', name);
        }

        if (origin !== '') {
            data.append('origin_description', origin);
        }

        if (powers !== '') {
            data.append('superpowers', powers); 
        }
        
        if (phrase !== '') {
            data.append('catch_phrase', phrase);
        }

        return data;
    }

    const reset = () => {
        setNickname('');
        setName('');
        setOrigin('');
        setPowers('');
        setPhrase('');
    }

    return (
        <>
            {location.pathname === '/edit' && 
                    <DeleteBtn type="button" onClick={handleDelete}>Delete Hero</DeleteBtn>
            }

            <Gallery>
                {pictures.map(img => {
                    return (
                        <ImgContainer key={img} onClick={handleDeleteImage}>
                            <Image src={img} alt={nickname} />
                            <ImgButton type="button" onClick={handleDeleteImage}>
                                <AiOutlineCloseCircle size={40} />
                            </ImgButton>
                        </ImgContainer>
                    )
                })}
            </Gallery>

            <Form onSubmit={handleFormSubmit}>
                <MainInfo>
                    <Block>
                        <Label htmlFor="main_image">Choose the main image</Label>
                        <FileInput 
                            type="file" 
                            id="main_image"
                            name="main_image" 
                            accept="image/png, image/jpeg"
                            onChange={handleUploadClick}
                        />
                    </Block>
                    
                    <Block>
                        <Label htmlFor="nickname">Nickname</Label>
                        <Input 
                            type="text"
                            name="nickname" 
                            id="nickname"
                            placeholder="Enter name..." 
                            value={nickname}
                            onChange={onInputChange}
                            required
                        />

                        <Label htmlFor="nickname">Real Name</Label>
                        <Input 
                            type="text"
                            name="real_name" 
                            id="real_name"
                            placeholder="Enter name..." 
                            value={name}
                            onChange={onInputChange}
                            required
                        />
                    </Block>
                </MainInfo>
                    
                <AdditionalInfo>
                    <Block style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <Description>Add more images</Description>
                        <FileInput 
                            type="file" 
                            id="image"
                            name="image1" 
                            accept="image/png, image/jpeg"
                            onChange={handleUploadClick}
                        />
                        <FileInput 
                            type="file" 
                            id="image"
                            name="image2" 
                            accept="image/png, image/jpeg"
                            onChange={handleUploadClick}
                        />
                    </Block>
                    
                    <Block>
                        <Label htmlFor="origin">Origin Description</Label>
                        <TextArea 
                            name="origin" 
                            id="origin"
                            placeholder="Tell the story..." 
                            value={origin}
                            onChange={onInputChange}
                        />
                    </Block>
                </AdditionalInfo>

                <AdditionalInfo>
                    <Block>
                        <Label htmlFor="superpowers">Superpowers</Label> 
                        <TextArea 
                            name="superpowers" 
                            id="superpowers"
                            placeholder="List the powers..." 
                            value={powers}
                            onChange={onInputChange}
                            style={{height: '90px'}}
                        />
                    </Block>
                    <Block>
                        <Label htmlFor="catchphrase">Catchphrase</Label> 
                        <TextArea 
                            name="catchphrase" 
                            id="catchphrase"
                            placeholder="The hero says..." 
                            value={phrase}
                            onChange={onInputChange}
                            style={{height: '90px'}}
                        />
                    </Block>
                </AdditionalInfo>

                <Button type="submit">Submit Changes</Button>
            </Form>
        </>
    )
}