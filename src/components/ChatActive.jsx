import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsTelephone, BsCameraReels } from 'react-icons/bs'
import { FiMoreVertical } from 'react-icons/fi'
import Button from './Button';
import SendMessageInput from './SendMessageInput'
import { AuthContext } from 'context/AuthContext'
import Message from './Message'

const StyledChatActive = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    background-image: linear-gradient(120deg,
     ${props => props.theme.bgThemeColor1},
      ${props => props.theme.bgThemeColor2}, 
      ${props => props.theme.bgThemeColor1});


    .chatInfo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: ${props => props.theme.bgColor};
    }

    .chatInfoHeader {
        display: flex;
        flex-direction: column;
    }

    .chatInfoTitle {
        font-weight: bold;
        font-size: 15px;
        color: ${props => props.theme.titleFontColor};
    }

    .chatInfoLastSeen {
        font-size: 13px;
    }

    .chatInfoActions {
        display: flex;
        gap: 15px;
    }

    svg {
        font-size: 20px;
        color: ${props => props.theme.textFontColor};
        cursor: pointer;
    }
`;

const StyledMessagesContainer = styled.div`
    padding: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.textFontColor};
      border-radius: 6px;
    }
`;


const ChatActive = () => {
    const [messages, setMessages] = useState([]);
    const { currentUser } = useContext(AuthContext);

    return (
        <StyledChatActive>
            <div className="chatInfo">
                <div className="chatInfoHeader">
                    <span className="chatInfoTitle">Let's Talk!</span>
                    <span className="chatInfoLastSeen">X members</span>
                </div>
                <div className="chatInfoActions">
                    <AiOutlineSearch />
                    <BsTelephone />
                    <BsCameraReels />
                    <FiMoreVertical />
                </div>
            </div>
            {/* <Button/> */}
            <StyledMessagesContainer>
            {messages.map(message => (
                <>
                    {message.uid === currentUser.uid && <Message
                        owner={true}
                        text={message.text}
                        user={message.user}
                        photoURL={message.photoURL}
                    />}
                    {message.uid !== currentUser.uid && <Message
                        text={message.text}
                        createdAt={message.createAt}
                        user={message.user}
                        photoURL={message.photoURL}
                    />}
                </>
            ))}
            </StyledMessagesContainer>
            <SendMessageInput setMessages={setMessages} />
        </StyledChatActive>
    )
}

export default ChatActive