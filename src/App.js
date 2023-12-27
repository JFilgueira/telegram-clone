import { GlobalStyle } from "components/GlobalStyle";
import { useContext, useEffect, useState } from "react";
import LightTheme from 'themes/lightTheme';
import DarkTheme from 'themes/darkTheme';
import { ThemeProvider } from "styled-components";
import Register from "pages/Register";
import Login from "pages/Login";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { auth } from "config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [theme, setTheme] = useState(LightTheme);
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  /* const ProtectedRoute = ({ children }) => {
    if(!currentUser) {
      return <Navigate to='login'/>
    }

    return children
  } */

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      console.log(user);
    })

    return () => {
      unsub();
    }
  }, []);


  return (
    <div className="App">
      <ThemeProvider theme={{
        ...theme, setTheme: () => {
          setTheme(currentTheme => currentTheme.id === 'light' ? DarkTheme : LightTheme);
        }
      }}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="/home" element={<Home />} />
              <Route index element={<Login />} />
              {/* <Route path="/register" element={<Register />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
