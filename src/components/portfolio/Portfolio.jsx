import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id: 1,
        title: "Bearpong",
        img: "assets/Bearpong.png",
        desc: "Bearpong is an innovative project aimed at developing an alternative cryptocurrency. The goal of this project is to explore new possibilities in the world of digital currency, providing a secure, efficient, and user-friendly platform.",
        tech: {
            html: "Structured the content of the website, ensuring a clean and semantic layout.",
            css: "Styled the website to create a visually appealing and consistent look across different devices.",
            react: "Built interactive and dynamic components, ensuring smooth and efficient performance."
        },
        url: "https://bearpong-github-io.vercel.app/"

    },
    {
        id: 2,
        title: "Social Media Clone",
        img: "assets/social-media.png",
        desc: "Social Media Clone is a web application designed to mimic the core functionalities of a popular social media platform. This project demonstrates my ability to build interactive and dynamic user interfaces using modern web development technologies.",
        tech: {
            html: "Structured the web pages to ensure a well-organized content layout.",
            css: "Applied styles to create a visually appealing and cohesive design.",
            react: "Built the front-end components, enabling efficient state management and rendering.",
            axios: "Facilitated HTTP requests to interact with the backend API."
        }
    },
    {
        id: 3,
        title: "Rick and Morty API",
        img: "assets/rickandmorty.png",
        desc: "Rick and Morty API Site is a web application that integrates with an existing Rick and Morty API, allowing users to explore characters, locations, and episodes from the popular TV show.",
        tech: {
            html: "Structured the web pages to ensure a well-organized content layout.",
            css: "Applied styles to create a visually appealing and cohesive design.",
            ejs: "Used Embedded JavaScript templating to generate HTML markup with dynamic data.",
            node: "Developed the server-side logic to handle API requests and responses.",
            express: "Set up the web server and managed routing for different endpoints.",
            axios: "Made HTTP requests to the external API for retrieving data."
        }
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
                        {item.tech && (
                            <div>
                                {item.tech.html && <p><span>HTML: </span>{item.tech.html}</p>}
                                {item.tech.css && <p><span>CSS: </span>{item.tech.css}</p>}
                                {item.tech.react && <p><span>React: </span>{item.tech.react}</p>}
                                {item.tech.ejs && <p><span>EJS: </span>{item.tech.ejs}</p>}
                                {item.tech.node && <p><span>Node: </span>{item.tech.node}</p>}
                                {item.tech.express && <p><span>Express: </span>{item.tech.express}</p>}
                                {item.tech.axios && <p><span>Axios: </span>{item.tech.axios}</p>}
                            </div>
                        )}
                        <motion.button whileHover={{ scale: "1.1" }}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">See Demo</a>
                        </motion.button>
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
        <div
            id="Portfolio"
            className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio