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
    Block
} from "./EditForm.styled"
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { operations } from "redux/hero/operations";

export const EditForm = ({ info }) => {
    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [origin, setOrigin] = useState('');
    const [powers, setPowers] = useState('');
    const [phrase, setPhrase] = useState('');
    const [mainImg, setMainImg] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    
    // const [picture, setPicture] = useState(null);

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

    // filling out the form fields when editing a hero
    useEffect(() => {
        if (!info) {
            return;
        }

        const { nickname, real_name, origin_description, superpowers, catch_phrase } = info;
        setNickname(nickname);
        setName(real_name);
        setOrigin(origin_description);
        setPowers(superpowers);
        setPhrase(catch_phrase);

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

    const handleUploadClick = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        if (!file) { 
            return;
        }

        reader.readAsDataURL(file);

        switch (e.target.name) {
            case "main_image": {
                reader.onloadend = function () {
                    // setPicture(reader.result);
                    setMainImg(file);
                };
                break;
            }
            case "image1": {
                setImage1(file);
                break;
            }
            case "image2": {
                setImage2(file);
                break;
            } 
            default: 
                return;
        }
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
                            // required
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

                        <Label htmlFor="superpowers">Superpowers</Label> 
                        <TextArea 
                            name="superpowers" 
                            id="superpowers"
                            placeholder="List the powers..." 
                            value={powers}
                            onChange={onInputChange}
                            style={{height: '120px'}}
                        />

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