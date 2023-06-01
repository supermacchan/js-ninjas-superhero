import { 
    Form, 
    Label, 
    Description, 
    Input, 
    FileInput,
    TextArea, 
    Button, 
    MainInfo,
    AdditionalInfo,
    Block
} from "./EditForm.styled"
import { useState, useEffect } from "react";

export const EditForm = ({ info }) => {
    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [origin, setOrigin] = useState('');
    const [powers, setPowers] = useState('');
    const [phrase, setPhrase] = useState('');

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

    }, [info]);

    return (
        <>
            <Form>
                <MainInfo>
                    <Block>
                        <Label htmlFor="main_image">Choose the main image</Label>
                        <FileInput 
                            type="file" 
                            id="main_image"
                            name="main_image" 
                            accept="image/png, image/jpeg"
                            required
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
                            name="image" 
                            accept="image/png, image/jpeg"
                        />
                        <FileInput 
                            type="file" 
                            id="image"
                            name="image" 
                            accept="image/png, image/jpeg"
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