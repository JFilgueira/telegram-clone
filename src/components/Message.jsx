import React from 'react'
import styled from 'styled-components'

const StyledMessage = styled.div`
  display: flex;
  flex-direction: ${props => props.owner ? 'row-reverse' : 'row'};
  gap: 10px;
  align-items: flex-end;

  .messageImage img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }

  .messageContent {
    padding: 5px 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    max-width: max-content;
    background-color: ${props => props.owner ? props.theme.messageOwner : props.theme.bgColor};
  }

  .messageUsername {
    align-self: ${props => props.owner ? 'flex-end' : 'flex-start'};
    font-weight: bold;
    font-size: 12px;
    color: ${props => props.owner ? props.theme.ownerFontHighlight : '#3390ec'};
  }

  .messageContentInfo {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .messageUserMessage {
    font-size: 12px;
    margin-top: 3px;
    color: ${props => props.theme.titleFontColor};
    align-self: ${props => props.owner ? 'flex-end' : 'flex-start'};
  }

  .messageImage {
    align-self: ${props => props.owner ? 'flex-end' : 'flex-start'};
    max-width: 80%;
  }

  .hourSended {
    font-size: 10px;
    margin-top: -7px;
    align-self: flex-end;
    color: ${props => props.owner ? props.theme.ownerFontHighlight : ''};
  }
`;

const Message = ({ owner, text, user, photoURL }) => {

  return (
    <StyledMessage owner={owner}>
      <div className="messageImage">
        <img src={photoURL} alt={user} />
      </div>
      <div className="messageContent">
        <span className='messageUsername'>{user}</span>
        <div className="messageContentInfo">
          <p className='messageUserMessage'>{text}</p>
{/*           <img className='messageImage' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
 */}
        </div>
      </div>
    </StyledMessage>
  )
}

export default Message