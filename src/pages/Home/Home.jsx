import superheroes from "../../mockdb/superheroes.json";
import { Card } from "components/Card/Card";
import { Main, Title, Grid, Button } from "./Home.styled";
import { nanoid } from 'nanoid';

const Home = () => {
    console.log(superheroes);

    return (
        <Main>
            <Title>Check out the Superheroes!</Title>
            <Grid>
                {superheroes.map(hero => 
                    <Card 
                        key={nanoid()}
                        hero={hero}
                    />
                )}
            </Grid>
            <Button>Load More</Button>
        </Main>
    )
}

export default Home;