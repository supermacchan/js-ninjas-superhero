import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;

    box-sizing: border-box;
    width: 250px;
    height: 300px;

    border-radius: 10px;

    background-color: var(--main-bg-color);

    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.63);
        transform: scale(1.03);
    }

`

export const ImgContainer = styled.div`
    box-sizing: border-box;
    border-radius: 10px;

    overflow: hidden;
`

export const Image = styled.img`
    width: 250px;
    height: 300px;
    object-fit: cover;
`

export const Name = styled.h2`
    position: absolute;
    bottom: 0;
    left: 0;

    box-sizing: border-box;
    width: 100%;
    padding: 10px;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    font-size: 15px;

    background-color: var(--hover-bg-color);
    opacity: 0.8;
    color: var(--light-text-color);
`