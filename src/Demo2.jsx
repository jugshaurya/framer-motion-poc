import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import BIY from "./assets/boy.svg";
import GIY from "./assets/girl.svg";
import "./Demo2.scss";

function Demo2() {
    const scrollY = useMotionValue(0);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            scrollY.set(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    // Transformations for animations
    const boyYPosition = useTransform(
        scrollY,
        [0, window.innerHeight],
        ["0%", "40%"]
    );

    const girlYPosition = useTransform(
        scrollY,
        [0, window.innerHeight],
        ["0%", "40%"]
    );

    const page2Opacity = useTransform(
        scrollY,
        [window.innerHeight * 0.5, window.innerHeight],
        [0, 1]
    );

    return (
        <div className="Demo2">
            <section className="section section1">
                <div className="content">
                    <motion.img
                        className="boy"
                        style={{ y: boyYPosition }}
                        initial={{ y: 0 }}
                        animate={{ y: "40%" }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        src={BIY}
                    />
                    <motion.img
                        className="girl"
                        style={{ y: girlYPosition }}
                        initial={{ y: 0 }}
                        animate={{ y: "40%" }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        src={GIY}
                    />
                    <h1>Lead</h1>
                    <p>
                        Join the Naukri Campus Squad to lead your college, earn
                        rewards, and grow your career
                    </p>
                    <button>Become campus ambassador</button>
                </div>
            </section>
            <section className="section section2">
                <motion.div
                    className="content"
                    style={{ opacity: page2Opacity }}
                >
                    <h1>Lead your college & make a difference</h1>
                    <div className="info-box">
                        <h2>Be campus influencer</h2>
                        <p>
                            You’ll guide your peers in their career journeys and
                            be their biggest cheerleader
                        </p>
                    </div>
                    <div className="info-box">
                        <h2>Build leadership skills</h2>
                        <p>
                            As your campus ambassador, you’ll step up, share
                            ideas, and make things hDemo2en
                        </p>
                    </div>
                    <button>Become campus ambassador</button>
                </motion.div>
            </section>
        </div>
    );
}

export default Demo2;
