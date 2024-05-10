import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Myprojects from './components/myprojects/Myprojects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Myprojects />
      <Contacts />
      <Footer />

      {/* toaster for alerting message: */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
      />
    </>
  );
}

export default App