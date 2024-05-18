import "./hero.scss";
import { motion } from "framer-motion";
import { useRef } from "react"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = ({ portfolioRef, contactRef }) => {

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>MARIO CVETANOSKI</motion.h2>
                    <motion.h1 variants={textVariants}>Front-end Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button whileHover={{ scale: "1.08" }} variants={textVariants} onClick={() => scrollToSection(portfolioRef)}>See the latest work</motion.button>
                        <motion.button whileHover={{ scale: "1.08" }} variants={textVariants} onClick={() => scrollToSection(contactRef)}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="assets/scroll.png" alt="" />
                </motion.div>
                <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                    Front End Web Developer Web Designer
                </motion.div>
                <div className="imgContainer">
                    <img src="assets/hero.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero