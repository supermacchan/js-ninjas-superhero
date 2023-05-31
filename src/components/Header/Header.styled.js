import styled from 'styled-components';

export const AppBar = styled.header`
    padding: 25px 20px;

    background: rgb(0,234,255);
    background: linear-gradient(90deg, rgba(0,234,255,1) 0%, rgba(0,149,255,1) 16%, rgba(23,210,22,1) 37%, rgba(245,234,13,1) 57%, rgba(237,159,23,1) 77%, rgba(231,96,235,1) 100%);
    -webkit-box-shadow: 0px 4px 26px 0px rgba(150,115,115,0.45);
    -moz-box-shadow: 0px 4px 26px 0px rgba(150,115,115,0.45);
    box-shadow: 0px 4px 26px 0px rgba(150,115,115,0.45);
`

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    color: var(--light-text-color);
`

export const Button = styled.span`
    box-sizing: border-box;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;

    background-color: var(--accent-bg-color);

    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--hover-bg-color);
    }
`