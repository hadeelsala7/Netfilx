import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Header from './components/header';
import Footer from './components/footer'

let root = document.querySelector('#root')

let Container=()=>{
    return(
        <div className = 'container-fluid'>
            <Header />
            <Footer />
        </div>
    )
}


ReactDOM.render(
    <Container />, root
)
