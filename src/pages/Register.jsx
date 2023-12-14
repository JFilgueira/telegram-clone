import React, { useState } from 'react'
import { BsCardImage } from 'react-icons/bs'
import { StyledForms } from 'components/StyledForms';
import { StyledContainer } from 'components/StyledContainer';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, provider, storage } from 'config/firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState();
  const [err, setErr] = useState(false)

  const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, provider);
    console.log(res);
    await setDoc(doc(db, "users", res.user.uid), {
      uid: res.user.uid,
      displayName: res.user.displayName,
      email: res.user.email,
      photoURL: res.user.photoURL,
    });

    await setDoc(doc(db, "usersChats", res.user.uid), {});

    navigate('/');
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //creating user
    try {
      /* const response = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName: displayName,
              photoURL: downloadURL
            });
            console.log(response.user);
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            })
          });
        } 
      );
        */
    } catch (err) {
      setErr(true);
      console.error(err);
    }

  }

  return (
    <StyledContainer>
      <StyledForms>
        <h1 className='form-title'>Telegram Clone</h1>
        <span className='form-text'>Register</span>
        <form className='form' onSubmit={handleFormSubmit}>
          <input type="text" placeholder='display name' onChange={e => setDisplayName(e.target.value)} />
          <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
          <input type="file" id='file' style={{ display: 'none' }} onChange={e => setFile(e.target.files)} />
          <label htmlFor="file">
            <BsCardImage /> <span>profile pic</span>
          </label>
          <button className='form-button' onClick={signInWithGoogle}>Sign up</button>
        </form>
        {err && <span>Something went wrong!</span>}
        <span className='form-text'>You do have an account? Login</span>
      </StyledForms>
    </StyledContainer>
  )
}

export default Register