import React from 'react'
import styled from 'styled-components'
import UserNavbar from './UserNavbar';
import SearchUser from './SearchUser';
import UserChats from './UserChats';
import Man1 from 'utils/man1.jpg'
import Man2 from 'utils/man2.png'
import Man3 from 'utils/man3.jpg'
import Woman1 from 'utils/woman1.jpg'
import Woman2 from 'utils/woman2.avif'
import Woman3 from 'utils/woman3.jpg'
import Bookstore from 'utils/bookstore.jpg'

const StyledSidebar = styled.div`
  flex: 1;
  padding: 0px 5px 0 5px;
  border-right: 1px solid ${props => props.theme.borderColor};
  gap: 10px;
  position: relative;
  background-color: ${props => props.theme.bgColor};

  .chats {
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 90vh;
    overflow-y: scroll;
  }
`;

const NavbarContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <NavbarContainer>
        <UserNavbar />
        <SearchUser />
        {/* <UserInfo/> */}
      </NavbarContainer>
      <div className="search">
      </div>
      <div className="chats">
        <UserChats
          username="Let's Talk!" 
          lastMessage="hahaha" 
          hour='07:59 AM'
          userProfile={Bookstore}
          active={true} 
        />
        <UserChats 
          username='Lucas' 
          userProfile={Man3}
          lastMessage="hahaha" 
          hour='07:59 AM'
        />
        <UserChats 
          username='Lisa' 
          userProfile={Woman2}
          lastMessage="See you soon" 
          hour='09:10 PM'
        />
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
