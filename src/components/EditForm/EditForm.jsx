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

export const EditForm = () => {
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
                            required
                        />

                        <Label htmlFor="nickname">Real Name</Label>
                        <Input 
                            type="text"
                            name="real_name" 
                            id="real_name"
                            placeholder="Enter name..." 
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
                        />

                        <Label htmlFor="superpowers">Superpowers</Label> 
                        <TextArea 
                            name="superpowers" 
                            id="superpowers"
                            placeholder="List the powers..." 
                        />

                        <Label htmlFor="catchphrase">Catchphrase</Label> 
                        <TextArea 
                            name="catchphrase" 
                            id="catchphrase"
                            placeholder="The hero says..." 
                            style={{height: '90px'}}
                        />
                    </Block>
                </AdditionalInfo>

                <Button type="submit">Submit Changes</Button>
            </Form>
        </>
    )
}