import React from 'react'
import { StyledForms } from 'components/StyledForms';
import { StyledContainer } from 'components/StyledContainer';
import { Link } from 'react-router-dom';
import { auth, provider} from 'config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const res = await signInWithPopup(auth, provider);
        console.log(res);
        navigate('/home');
    }

    return (
        <StyledContainer>
        <StyledForms>
            <h1 className='form-title'>Telegram Clone</h1>
            <span className='form-text'>Login</span>
            <button onClick={signInWithGoogle} className='form-button'>Login with google</button>
            <span className='form-text'>You don't have an account? <Link to='#'>Register</Link></span>
        </StyledForms>
        </StyledContainer>
    )
}

export default Login