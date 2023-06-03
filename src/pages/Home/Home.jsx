import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { operations } from "../../redux/hero/operations";
import { selectIsLoading } from "redux/selectors";
import { Card } from "components/Card/Card";
import { Loader } from "components/Loader/Loader";
import { Main, Title, Grid, Button } from "./Home.styled";

const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const [heroesList, setHeroesList] = useState(null);
    const [page, setPage] = useState(1);
    const [end, setEnd] = useState(false);

    // first render
    useEffect(() => {
        const firstRender = async () => {
            const i = await dispatch(operations.getAllHeroes());
            setHeroesList(i.payload.data);
        }
        
        firstRender();
    }, [dispatch]);

    // load more
    useEffect(() => {
        if (!heroesList) {
            return;
        }

        const fetch = async () => {
            const info = await dispatch(operations.getAllHeroes(page));

            setHeroesList(prevState => [...prevState, ...info.payload.data]);

            if (info.payload.data.length < 5) {
                setEnd(true);
            }
        }

        fetch();
    // eslint-disable-next-line
    }, [dispatch, page])

    const onLoadMoreClick = () => {
        setPage(prevState => prevState + 1);
    }

    return (
        <Main>
            <Title>Let's meet the Superheroes!</Title>

            {isLoading && <Loader />}
            
            <Grid>
                {heroesList && heroesList.map(hero => 
                    <Card 
                        key={hero._id}
                        hero={hero}
                    />
                )}
            </Grid>
            {!end &&
                <Button type="button" onClick={onLoadMoreClick}>Load More</Button>
            }
        </Main>
    )
}

export default Home;