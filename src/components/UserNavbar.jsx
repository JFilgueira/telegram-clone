import React, { useState } from 'react'
import styled from 'styled-components'
import { RxHamburgerMenu } from 'react-icons/rx'
import UserMenu from './UserMenu';

const StyledNavbar = styled.div`

`;

const HamburguerContainer = styled.div`
  width: 23px; 
  height: 23px;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.titleFontColor};
`;

const UserNavbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    console.log(openMenu);

    return (
        <StyledNavbar>
            <HamburguerContainer>
                <RxHamburgerMenu onClick={() => setOpenMenu(!openMenu)} />
            </HamburguerContainer>
            <UserMenu openMenu={openMenu} />
        </StyledNavbar>
    )
}

export default UserNavbar