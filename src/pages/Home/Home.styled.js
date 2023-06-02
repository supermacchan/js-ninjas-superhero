import styled from 'styled-components';

export const Main = styled.main`
    text-align: center;
`

export const Title = styled.h1`
    margin-top: 30px;
    padding: 0 10px;
    font-size: 22px;
    color: var(--main-text-color);

    @media screen and (min-width: 768px) {
        font-size: 32px;
        padding: 0;
    }
`

export const Grid = styled.section`
    max-width: 1390px;
    padding: 20px 0;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    @media screen and (min-width: 768px) {
        padding: 40px 0 30px 0;
    }
`

export const Button = styled.button`
    cursor: pointer;

    box-sizing: border-box;
    padding: 12px 20px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;

    background-color: var(--accent-bg-color);
    color: var(--light-text-color);

    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--hover-bg-color);
    }
`