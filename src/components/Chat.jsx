import React from 'react'
import styled, { css } from 'styled-components';
import Button from './Button';
import ChatInactive from './ChatInactive';
import ChatActive from './ChatActive';

const StyledChat = styled.div`
  flex: 3;
`;

const Chat = () => {
  return (
    <StyledChat>
      <ChatActive/>
    </StyledChat>
  )
}

export default Chat