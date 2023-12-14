import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

const StyledSearchUser = styled.div`
      width: 100%;
      padding-right: 10px;
      border: 1px solid ${props => props.theme.borderColor};
      background-color: ${props => props.theme.bgInputColor};
      border-radius: 20px;
      display: flex;
      align-items: center;
      padding-left: 5px;
      margin-bottom: 5px;

    input {
      background-color: ${props => props.theme.bgInputColor};
      width: 100%;
      border: none;
      padding: 5px;
      outline: none;
      color: ${props => props.theme.textFontColor};
    }

    input::placeholder {
      color: ${props => props.theme.textFontColor};
    }

    .searchIcon {
      color: ${props => props.theme.icons};
    }
`;

const SearchUser = () => {
  
  return (
    <StyledSearchUser>
        <AiOutlineSearch className='searchIcon' />
        <input
          type="search"
          placeholder='Search'
        />
    </StyledSearchUser>
  )
}

export default SearchUser