import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from './Button';
import { signOut } from 'firebase/auth';
import { auth } from 'config/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import ToggleTheme from './ToggleTheme';

const StyledUserMenu = styled.div`
    position: absolute;
    top: 35px;
    display: ${props => props.openMenu ? 'flex' : 'none'};
    background-color: ${props => props.theme.bgColor};
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    width: 65%;
    border-radius: 5px;
    flex-direction: column;
    gap: 5px;
    padding: 5px;

    .logo {
        font-size: 16px;
        color: ${props => props.theme.titleFontColor};
    }

    .user {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .userInfo {
        display: flex;
        align-items: center;
        gap: 5px; 
        font-size: 12px;
    }

    .userName {
        font-size: 15px;
        color: ${props => props.theme.titleFontColor};
    }

    .userImage {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    .menuButton {
        font-size: 14px;
        text-align: left;
        border: none;
        background: transparent;
        color: ${props => props.theme.titleFontColor};
        border-radius: 3px;
        padding: 3px;
        cursor: pointer;
    }
`;

const UserMenu = ({ openMenu }) => {
    const {currentUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const signOutUser = () => {
        signOut(auth);
        navigate('/login');
    }

    return (
        <StyledUserMenu openMenu={openMenu}>
            <span className='logo'>Telegram Clone</span>
            <ToggleTheme/>
            <div className="user">
                <div className="userInfo">
                    <img className='userImage' src={currentUser.photoURL} alt="" />
                    <span className='userName'>{currentUser.displayName}</span>
                </div>
                <button className='menuButton' onClick={signOutUser}>Log out</button>
            </div>
        </StyledUserMenu>
    )
}

export default UserMenu