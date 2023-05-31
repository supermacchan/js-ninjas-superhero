import styled from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`

export const ModalPopup = styled.div`
    position: relative;

    box-sizing: border-box;
    width: 700px;
    min-height: 400px;
    padding: 40px 20px;
    
    border-radius: 20px;

    background-color: var(--main-bg-color);
`

export const Gallery = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    margin-bottom: 20px;
`

export const ImgContainer = styled.div`
    box-sizing: border-box;
    border-radius: 10px;

    overflow: hidden;

    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.13);
`

export const Image = styled.img`
    width: 150px;
    height: 200px;
    object-fit: cover;
`

export const Title = styled.h2`
    text-align: center;
    font-size: 24px;
    text-transform: uppercase;

    margin-bottom: 10px;

    color: var(--accent-text-color);
`

export const Text = styled.p`
    color: var(--secondary-text-color);
    font-size: 16px;
    margin-bottom: 10px;
`

export const Heading = styled.b`
    color: var(--accent-text-color);
    font-weight: 700;
`

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
    align-items: baseline;

    color: var(--main-text-color);

    position: absolute;
    top: 15px;
    right: 20px;
`

export const Button = styled.button`
    border: none;
    border-radius: 50%;
    background-color: transparent;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    color: inherit;
`