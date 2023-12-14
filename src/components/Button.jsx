import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';

const Button = () => {
    const {setTheme} = useContext(ThemeContext);

  return (
    <button onClick={setTheme}>
        Click
    </button>
  )
}

export default Button