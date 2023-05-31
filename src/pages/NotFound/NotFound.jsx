import notFound from '../../images/not-found.jpg';
import { Main, Title, Image, Description } from './NotFound.styled';

const NotFound = () => {
    return (
        <Main>
            <Title>Oops! The page you are looking for does not exist.</Title>
            <Description>You will be redirected to the Homepage in a few seconds.</Description>
            <Image src={notFound} alt='Page not found'/>
        </Main>
    )
}

export default NotFound;