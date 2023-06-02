import { useSelector } from "react-redux";
import { selectCurrent, selectHeroes } from "redux/selectors";
import { EditForm } from "components/EditForm/EditForm";
import { Main, Title, Section } from "./Edit.styled";

const Edit = () => {
    const current = useSelector(selectCurrent);
    const heroes = useSelector(selectHeroes);
    
    const hero = heroes.find(hero => hero._id === current);

    return (
        <Main>
            <Title>Feel free to update the info~</Title>
            <Section>
                <EditForm info={hero}/>
            </Section>
        </Main>
    )
}

export default Edit;