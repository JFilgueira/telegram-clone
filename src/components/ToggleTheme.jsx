import React, { useContext } from 'react'
import styled, { ThemeContext, useTheme } from 'styled-components';
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

const StyledToggleTheme = styled.div`
    button {
        background-color: transparent;
        border: none;
        border-radius: 20px;
        border: 1px solid ${props => props.theme.borderColor};
        padding: 3px 5px;
        display: flex;
        align-items: center;
        gap: 3px;
        font-size: 15px;
        color: ${props => props.theme.textFontColor};
        margin: 5px 0;
    }

    svg {
        color: ${props => props.theme.icons};
    }
`;

const ToggleTheme = () => {
    const { setTheme } = useContext(ThemeContext);

    return (
        <StyledToggleTheme>
            <button onClick={setTheme}>
                Theme
                <IoSunnyOutline />
                /
                <IoMoonOutline />
           </button>
        </StyledToggleTheme>
    )
}

export default ToggleTheme