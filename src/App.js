import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import MyNavBar from './components/MyNavBar/MyNavBar';
import MyFooter from './components/MyFooter/MyFooter';
import { navLinks } from "./data/myNavBarLinks"
import { footerLinks } from "./data/myFooterLinks"
import LatestRelease from './components/LatestRealease/LatestRelease';
import genre from './data/fantasy.json'

const App = () => {
  return (
      <>
        <MyNavBar links={navLinks} />
        <LatestRelease genre={genre} />
        <MyFooter links={footerLinks} />
      </>
  )
}

export default App