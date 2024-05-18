import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I make beautiful websites
                    <br /> for your brand
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Who</motion.b> am i ?
                    </h1>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                >
                    <h2>Hi! I'm Mario, a passionate Front-End Developer and Designer. With a keen eye for detail and a love for creating intuitive, user-friendly interfaces, I strive to bring innovative ideas to life through code and design.
                        When I'm not immersed in the world of web development, you can find me hitting the slopes on my snowboard or diving into thrilling online games. My trusty companion, Loki, a lively and loyal dog, is always by my side, adding joy and adventure to my life.
                        Whether it's building sleek websites, exploring new design trends, or enjoying my hobbies, I bring enthusiasm and creativity to everything I do.Let's create something amazing together!</h2>
                </motion.div>

            </motion.div>
        </motion.div>
    );
};

export default Services;