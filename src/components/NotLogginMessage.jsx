import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NotLoginMessageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    h1 {
        color: #fff;
    }

    p {
        color: #fff;
        margin: 10px 0;
    }

    button {
        background-color: #fff;
        border: none;
        padding: 7px 10px;
        border-radius: 5px;
        color: ${props => props.theme.highlightColor};
        margin: 10px 0 10px;
        font-weight: bold;
        cursor: pointer;
    }
`;

const NotLogginMessage = () => {
    return (
        <NotLoginMessageStyled>
            <h1>You're not logged in!</h1>
            <p>Please log in with a Google account to continue</p>
            <Link to='/'>
                <button>Log in</button>
            </Link>
        </NotLoginMessageStyled>
    )
}

export default NotLogginMessage