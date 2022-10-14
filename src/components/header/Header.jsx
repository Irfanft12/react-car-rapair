import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"

import styles from "./header.module.css"
import Navbar from './navbar/Navbar'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={`container ${styles.container}`}>
            <div className={styles.logoMobileMenuWrapper}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <Navbar />
        </div>
        
    </header>
  )
}

export default Header