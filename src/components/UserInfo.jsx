import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from './Button';
import { AuthContext } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from 'config/firebase';
import ToggleTheme from './ToggleTheme';

const StyledUserInfo = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 5px;

    .userName {
        color: ${props => props.theme.titleFontColor};
        font-size: 12px;
    }

    .userImage {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        object-fit: cover;
    }

    .menuButton {
        font-size: 12px;
        text-align: left;
        border: none;
        background: transparent;
        color: ${props => props.theme.titleFontColor};
        border-radius: 3px;
        padding: 3px;
        cursor: pointer;
    }
`;  

const UserInfo = () => {
    const { currentUser } = useContext(AuthContext);

    /* const navigate = useNavigate();

    const signOutUser = () => {
        signOut(auth);
        navigate('/login');
    } */

    return (
        <StyledUserInfo>
            <span className='userName'>{currentUser.displayName}</span>
            <img className='userImage' src={currentUser.photoURL} alt="" />
            <ToggleTheme/>
{/*             <button className='menuButton' onClick={signOutUser}>Log out</button>
 */}        </StyledUserInfo>
    )
}

export default UserInfo