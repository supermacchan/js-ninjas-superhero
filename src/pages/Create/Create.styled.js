import styled from 'styled-components';

export const Main = styled.main`
    text-align: center;
`

export const Title = styled.h1`
    margin-top: 30px;
    color: var(--main-text-color);
    font-size: 20px;

    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
`

export const Section = styled.section`
    padding: 20px 0 30px 0;
`