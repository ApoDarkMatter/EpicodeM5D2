
import React, { useState, useEffect } from 'react'
import MyNavBar from './components/MyNavBar/MyNavBar'
import MyFooter from './components/MyFooter/MyFooter'
import { navLinks } from "./data/myNavBarLinks"
import { footerLinks } from "./data/myFooterLinks"
import LatestRelease from './components/LatestRealease/LatestRelease'
import axios from 'axios'


const App = () => {
  const [book,setBook] = useState([])
  const url = "https://epibooks.onrender.com/"

  const getData = async () => {
    try {
        const response = await axios.get(url)
        setBook(response.data)
      } catch (err) {
        console.log(err); 
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
      <>
        <MyNavBar links={navLinks} />
        <LatestRelease genre={book.slice(0,20)} />
        <MyFooter links={footerLinks} />
      </>
  )
}

export default App