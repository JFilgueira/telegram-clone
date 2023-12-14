import Chat from 'components/Chat';
import Sidebar from 'components/Sidebar';
import { StyledContainer } from 'components/StyledContainer';
import { AuthContext } from 'context/AuthContext';
import React, { useContext } from 'react'
import styled from 'styled-components'


const StyledHome = styled.div`
    display: flex;
    background-color: white;
    width: 100%;
    height: 100vh;
`;

const Home = () => {
    const {currentUser} =  useContext(AuthContext);

    return (
        !currentUser ? 
            <h1>HAHAHAHAHAHAHAHAH</h1>
        :
        <StyledContainer>
            <StyledHome>
                <Sidebar/>
                <Chat/>
            </StyledHome>
        </StyledContainer>
    )
}

export default Home