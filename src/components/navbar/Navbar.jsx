import React from 'react'
import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from './sidebar/Sidebar'

function Navbar() {


    return (
        <div className='navbar'>
            <Sidebar />
            <div className="wrapper">

                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Mario C.</motion.span>
                <div className="social">
                    <motion.a whileHover={{ scale: "1.1" }} href="https://www.facebook.com/mario.cvetanoski" target='_blank'><img src="./assets/facebook.png" alt="" /></motion.a>
                    <motion.a whileHover={{ scale: "1.1" }} href="https://www.instagram.com/mario.cve/" target='_blank'><img src="./assets/instagram.png" alt="" /></motion.a>
                    <motion.a whileHover={{ scale: "1.1" }} href="#"><img src="./assets/youtube.png" alt="" /></motion.a>
                    <motion.a whileHover={{ scale: "1.1" }} href="https://www.linkedin.com/in/mario-cvetanoski/" target='_blank'><img src="./assets/linkedin.png" alt="" /></motion.a>
                </div>
            </div>
        </div>
    )
}

export default Navbar