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
            id="About"
            className="services"
            variants={variants}
        >
            <motion.div className="textContainer"
                variants={variants}
                initial="initial"
                ref={ref}
                animate={isInView && "animate"}>
                <p>
                    I make beautiful websites
                    <br /> for your brand
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer"
                variants={variants}
                initial="initial"
                ref={ref}
                animate={isInView && "animate"}>
                <div className="title">
                    <h1>
                        <b style={{ color: "orange" }}><i>WHO</i></b> <i>AM I ?</i>
                    </h1>
                </div>
            </motion.div>
            <motion.div className="listContainer"
                variants={variants}
                initial="initial"
                ref={ref}
                animate={isInView && "animate"}>
                <motion.div
                    className="box"
                >
                    <div className="boxText">
                        <h2>Hi! I'm Mario, a passionate Front-End Developer and Designer. With a keen eye for detail and a love for creating intuitive, user-friendly interfaces, I strive to bring innovative ideas to life through code and design.</h2><br></br><br></br>
                        <h2>When I'm not immersed in the world of web development, you can find me hitting the slopes on my snowboard or diving into thrilling online games. My trusty companion, Loki, a lively and loyal dog, is always by my side, adding joy and adventure to my life.
                            Whether it's building sleek websites, exploring new design trends, or enjoying my hobbies, I bring enthusiasm and creativity to everything I do. Let's create something amazing together!</h2>
                    </div>
                    <div className="boxImg">
                        <img src="/assets/shiba.png" alt="" />
                    </div>

                </motion.div>


            </motion.div>
        </motion.div>
    );
};

export default Services;