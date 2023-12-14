import React from 'react'
import styled from 'styled-components'

export const StyledChats = styled.div`
    .userChats {
        margin-right: 5px;
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 5px;
        border-radius: 7px;
        background-color: ${props => props.active ? '#3390EC' : ''};
    }

    .userChats:hover {
        background-color: ${props => props.theme.hover};
    }

    .userChatsImage {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
    }

    .userChatsInfo {
        width: 80%;
        display: flex;
        flex-direction: column;
    }

    .userChatsInfoHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .userChatsName {
        font-weight: bold;
        font-size: 14px;
        color: ${props => props.active ? '#fff' : props.theme.titleFontColor};
    }
    

    .userChatsSendHour {
        font-size: 12px;
        color: ${props => props.active ? '#fff' : ''};
    }

    .userChatsLastMessage {
        font-size: 12px;
        color: ${props => props.active ? '#fff' : ''};
    }
`;

const UserChats = ({username, userProfile, lastMessage, hour, active}) => {
    return (
        <StyledChats active={active}>
            <div className="userChats">
                <img className='userChatsImage' src={userProfile} alt="" />
                <div className="userChatsInfo">
                    <div className="userChatsInfoHeader">
                        <span className='userChatsName'>{username}</span>
                        <span className='userChatsSendHour'>{hour}</span>
                    </div>
                    <div className="userChatsInfoBody">
                        <span className='userChatsLastMessage'>{lastMessage}</span>
                    </div>
                </div>
            </div>
        </StyledChats>
    )
}

export default UserChats