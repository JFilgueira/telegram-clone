import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { BsEmojiSmile, BsMic } from 'react-icons/bs'
import { FaTelegramPlane } from "react-icons/fa";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import { auth, db } from 'config/firebase';
import { AuthContext } from 'context/AuthContext';

const StyledSendMessageInput = styled.div`
    padding: 10px 5px;
    background-color: ${props => props.theme.bgColor};

    form {
        display: flex;
        justify-content: space-between;
        
        align-items: center;
    }

    label {
        display: flex;
        align-items: center;
    }

    svg {
        font-size: 18px;
    }

    .sendMessageInput {
        width: 90%;
        border: none;
        outline: none;
        background-color: transparent;
        color: ${props => props.theme.textFontColor};
        font-size: 15px;
    }

    .sendMessageInput::placeholder {
        font-size: 15px;
    }

    .sendMessageButton {
        background: transparent;
        border: none;
        display: flex;
        justify-content: right;
        width: 50px;
    }

    .sendMessageButton svg {
        color: #3390EC;
        font-size: 20px;
        padding: 0px;
        margin-right: 10px;
    }
`;

const SendMessageInput = ({ setMessages }) => {
    const [typedMessage, setTypeMessage] = useState('');
    const { currentUser } = useContext(AuthContext);

    const messagesRef = collection(db, "messages");

    const chatName = "chat1";

    useEffect(() => {
        const queryMessages = query(messagesRef, where("chatName", "==", chatName), orderBy("createdAt"));
        const unsub = onSnapshot(queryMessages, (snapshot) => {
            let messages = []
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            })
            setMessages(messages);
        })

        return () => unsub();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (typedMessage === '') return;

        await addDoc(messagesRef, {
            text: typedMessage,
            createdAt: serverTimestamp(),
            user: currentUser.displayName,
            photoURL: currentUser.photoURL,
            chatName: chatName,
            uid: currentUser.uid,
        })

        setTypeMessage('');
    }

    return (
        <StyledSendMessageInput>
            <form onSubmit={handleSubmit}>
                <input type="file" id='sendFile' style={{ display: 'none' }} />
                <label htmlFor="sendFile">
                    <AiOutlinePaperClip />
                </label>
                <input
                    type="text"
                    placeholder='Write a message...'
                    className='sendMessageInput'
                    value={typedMessage}
                    onChange={e => setTypeMessage(e.target.value)}
                />
                {typedMessage == '' ? (
                    <>
                        <BsEmojiSmile />
                        <BsMic />
                    </>
                ) : (
                    <button className='sendMessageButton'>
                        <FaTelegramPlane />
                    </button>
                )}
            </form>

        </StyledSendMessageInput>
    )
}

export default SendMessageInput