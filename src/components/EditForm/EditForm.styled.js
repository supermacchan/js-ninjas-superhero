import styled from 'styled-components';

export const Form = styled.form`
    max-width: 320px;

    margin: 0 auto;

    text-align: left;
    color: var(--main-text-color);

    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        max-width: 800px;
    }
`

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    padding-top: 10px;

    font-weight: 500;
`

export const Description = styled.p`
    padding-top: 10px;
    font-weight: 500;
`

export const FileInput = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;

    padding: 12px 20px;

    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: var(--main-bg-color);
    color: var(--secondary-text-color);

    font-family: inherit;
    font-size: 13px;
`

export const Input = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;

    padding: 12px 20px;

    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: var(--secondary-bg-color);
    color: var(--secondary-text-color);

    font-family: inherit;
    font-size: 13px;
`

export const TextArea = styled.textarea`
    display: block;
    resize: none;
    box-sizing: border-box;
    width: 100%;
    height: 120px;

    padding: 12px 20px;
    
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: var(--secondary-bg-color);
    color: var(--secondary-text-color);

    font-family: inherit;
    font-size: 13px;
`

export const Button = styled.button`
    cursor: pointer;

    box-sizing: border-box;
    margin-top: 25px;
    padding: 12px 20px;
    width: 200px;
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

export const DeleteBtn = styled.button`
    cursor: pointer;

    box-sizing: border-box;
    margin-bottom: 15px;
    padding: 12px 15px;
    border: none;
    border-radius: 5px;

    background-color: var(--accent-text-color);
    color: var(--light-text-color);

    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--hover-bg-color);
    }
`

export const MainInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 50px;
    }
`

export const AdditionalInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    margin-top: 20px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 50px;
    }
`

export const Block = styled.div`
    width: 350px;
`

export const Gallery = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    margin-bottom: 20px;
`

export const ImgContainer = styled.div`
    cursor: pointer;

    position: relative;

    box-sizing: border-box;
    border-radius: 10px;

    overflow: hidden;

    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.13);

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        &::after {
            content: '';

            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.63);
        }
    }
`

export const ImgButton = styled.button`
    cursor: pointer;

    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;

    background-color: transparent;
    color: var(--light-text-color);
`

export const Image = styled.img`
    width: 150px;
    height: 200px;
    object-fit: cover;
`