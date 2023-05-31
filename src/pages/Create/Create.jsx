import { EditForm } from "components/EditForm/EditForm";
import { Main, Title, Section } from "./Create.styled";

const Create = () => {
    return (
        <Main>
            <Title>Let's meet our Hero!</Title>
            <Section>
                <EditForm />
            </Section>
        </Main>
    )
}

export default Create;