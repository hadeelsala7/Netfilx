import React from 'react'
import {render} from 'react-dom'
import App from './App';
import GlobalStyles from './GlobalStyles'
let root = document.querySelector('#root')

render(
    <>
        <GlobalStyles />
        <App />
    </>, root
)
