import React from 'react';
import {ThemeProvider} from 'styled-components';

const theme = {
    colors: {
        lightGray: '#ebe6e6',
        darkGray: '#423d3d',
        lightPink: '#ff9393',
        pink: '#ff6e6e',
        red: '#ff4141',
        darkRed: '#ff1818'
    }
}

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
  
export default Theme;