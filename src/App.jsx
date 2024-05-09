import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Myprojects from './components/myprojects/Myprojects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Navbar from './components/nav/Navbar'

const App = () => {
  return (
    
    <>
        {/* <Navbar /> */}
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Myprojects/>
        <Contacts/>
        <Footer/>

    </>
  )
}

export default App