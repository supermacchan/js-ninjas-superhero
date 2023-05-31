import { EditForm } from "components/EditForm/EditForm";
import { Main, Title, Section } from "./Edit.styled";

const Edit = () => {
    return (
        <Main>
            <Title>Let's meet our Hero!</Title>
            <Section>
                <EditForm />
            </Section>
        </Main>
    )
}

export default Edit;