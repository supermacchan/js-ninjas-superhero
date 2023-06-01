// import superheroes from "../../mockdb/superheroes.json";
import { Card } from "components/Card/Card";
import { Main, Title, Grid, Button } from "./Home.styled";
import { nanoid } from 'nanoid';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHeroes } from "../../redux/selectors";
import { operations } from "../../redux/hero/operations";

const Home = () => {
    const dispatch = useDispatch();
    const superHeroes = useSelector(selectHeroes);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(operations.getAllHeroes(page));
    }, [dispatch, page])

    const onLoadMoreClick = () => {
        setPage(prevState => prevState + 1);
    }

    return (
        <Main>
            <Title>Check out the Superheroes!</Title>
            <Grid>
                {superHeroes.map(hero => 
                    <Card 
                        key={nanoid()}
                        hero={hero}
                    />
                )}
            </Grid>
            <Button type="button" onClick={onLoadMoreClick}>Load More</Button>
        </Main>
    )
}

export default Home;