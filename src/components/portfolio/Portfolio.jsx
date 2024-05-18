import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id: 1,
        title: "React.js",
        img: "assets/Bearpong.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus quos, itaque minima tempore eligendi. Doloribus maiores facilis explicabo doloremque praesentium minima deserunt quidem ea dolor, alias sed voluptates fuga."
    },
    {
        id: 2,
        title: "React",
        img: "assets/social-media.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus quos, itaque minima tempore eligendi. Doloribus maiores facilis explicabo doloremque praesentium minima deserunt quidem ea dolor, alias sed voluptates fuga."
    },
    {
        id: 3,
        title: "API",
        img: "assets/rickandmorty.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus quos, itaque minima tempore eligendi. Doloribus maiores facilis explicabo doloremque praesentium minima deserunt quidem ea dolor, alias sed voluptates fuga."
    },
    {
        id: 4,
        title: "React",
        img: "assets/Bearpong.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed doloribus quos, itaque minima tempore eligendi. Doloribus maiores facilis explicabo doloremque praesentium minima deserunt quidem ea dolor, alias sed voluptates fuga."
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <motion.button whileHover={{ scale: "1.1" }}>See Demo</motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio