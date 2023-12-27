import { GlobalStyle } from "components/GlobalStyle";
import { useContext, useEffect, useState } from "react";
import LightTheme from 'themes/lightTheme';
import DarkTheme from 'themes/darkTheme';
import { ThemeProvider } from "styled-components";
import Login from "pages/Login";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { auth } from "config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [theme, setTheme] = useState(LightTheme);
  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    })

    return () => {
      unsub();
    }
  }, [setCurrentUser]);


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
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
