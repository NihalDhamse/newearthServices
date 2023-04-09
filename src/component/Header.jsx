import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
    <nav>
        <h1>NewEarth</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>contact</Link>
            <HashLink to={"/#about"}>about</HashLink>
            <HashLink to={"/#brand"}>brand</HashLink>
            <Link to={"/services"}>services</Link>
        </main>
      
    </nav>
  )
}

export default Header
