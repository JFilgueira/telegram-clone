import React from 'react'
import styled from 'styled-components'
import Button from './Button';

const StyledChatInactive = styled.div`
    padding: 10px 0 0 15px;
    height: 100vh;
    background-image: linear-gradient(120deg,
     ${props => props.theme.bgThemeColor1},
      ${props => props.theme.bgThemeColor2}, 
      ${props => props.theme.bgThemeColor1});

    div {
        width: 10px;
        height: 10px;
        background-color: ${props => props.theme.highlightColor};
  }
`;

const ChatInactive = () => {
  return (
    <StyledChatInactive>
        <Button/>
        <div></div>
    </StyledChatInactive>
  )
}

export default ChatInactive