import styled from "styled-components";

export const StyledForms = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: ${props => props.theme.bgColor};

    .form-title {
        font-size: 20px;
    }

    .form-text {
        font-size: 13px;
        margin: 10px 0 20px;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    input {
        padding: 10px 12px;
        border: none;
        outline: none;
        background-color: transparent;
        border-bottom: 1px solid ${props => props.theme.titleFontColor};
    }

    input::placeholder, input {
        color: ${props => props.theme.textFontColor};
    }

    label {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 13px;
        padding: 10px 12px;
        border-bottom: 1px solid ${props => props.theme.titleFontColor};
        cursor: pointer;
    }

    svg {
        color: ${props => props.theme.textFontColor};
    }

    .form-button {
        background-color: ${props => props.theme.highlightColor};
        border: none;
        padding: 7px 10px;
        border-radius: 5px;
        color: #fff;
        margin: 10px 0 10px;
    }

    @media (max-width: 480px) {
        width: 90vw;
        height: 70vh;
        justify-content: center;

        .form-title {
            font-size: 27px;
        }

        .form-text {
            font-size: 20px;
        }

        .form {
            margin: 20px 0 20px;
            width: 90%;
        }

        input {
            width: 100%;
        }

        input::placeholder, label, input {
            font-size: 20px;
        }

        .form-button {
            font-size: 25px;
        }
    }
`;