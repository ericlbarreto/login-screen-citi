import styled from "styled-components"

export const LoginH1 = styled.h1`
    font-family: 'Titillium Web', sans-serif;
    font-size: 50px;
    padding: 3rem 7rem;
    `
export const LoginDiv = styled.div`
    display: flex;
    `

export const LoginLeft = styled.div`
    background-color: #fdfdfd;

    img {
        padding: 3rem 7rem;
    }
    width: 50%;

    form {
        padding-left: 7rem;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 700;
        width: 70%;
        position: relative;
        max-width: 700px;

        a {
            position: absolute;
            right: 0;
            color: #51E678;
            text-decoration: none;
            transition: .3s;
        }

        a:hover{
            color: #83f2a0;
            transition: .3s;
        }
    }

    input {
        font-size: 1.2rem;
        width: 100%;
        margin-top: 5px;
        padding: 1.5rem 1rem;
        border: #d3dce8 solid 2px;
        border-radius: 8px;
        margin-bottom: 2rem;
    }

    input::placeholder {
        font-size: 1rem;
        font-family: 'Titillium Web', sans-serif;
    }

    input:focus {
        outline: #51E678 solid 3px;
        border: none;
    }

    button {
        background-color: #51E678;
        color: #fff;
        width: 100%;
        padding: 1rem;
        border: none;
        font-family: 'Titillium Web', sans-serif;
        font-weight: 700;
        border-radius: 8px;
        font-size: 1.2rem;
        transition: .3s;
    }

    button:hover{
        background-color: #83f2a0;
        transition: .3s;
    }
    `

export const LoginMangue = styled.img`
    width: 50%;
    height: 100vh;
    object-fit: cover;
    `

export const LoginParagraph = styled.p`
    font-size: 20px;
    font-family: 'Titillium Web', sans-serif;
    padding-left: 7rem;
    max-width: 550px;
    `
