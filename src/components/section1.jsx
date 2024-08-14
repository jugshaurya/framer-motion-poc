import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BIY from "../assets/boy.svg";
import GIY from "../assets/girl.svg";
import CompL from "../assets/logoComp.svg";
import MAN1 from "../assets/man1.svg";
import MAN2 from "../assets/man2.svg";
import MAN3 from "../assets/man3.svg";
import MAN4 from "../assets/man4.svg";
import "./section1.scss";

function Section1() {
    const { scrollY } = useScroll();

    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;

    const yPositionBoy = useTransform(
        scrollY,
        [0, winHeight],
        [`${(180 * 100) / winHeight}vh`, `${(385 * 100) / winHeight}vh`]
    );

    const xPositionBoy = useTransform(
        scrollY,
        [0, winHeight],
        [`${winWidth / 2 - 120}px`, `0px`]
    );

    const scaleBoy = useTransform(scrollY, [0, winHeight], ["1", "0.61"]);

    const yPositionGirl = useTransform(
        scrollY,
        [0, winHeight],
        [`${(209 * 100) / winHeight}vh`, `${(40 * 100) / winHeight}vh`]
    );
    const scaleGirl = useTransform(scrollY, [0, winHeight], ["1", "0.43"]);
    const xPositionGirl = useTransform(
        scrollY,
        [0, winHeight],
        [`${winWidth / 2}px`, `${winWidth - 286 * 0.43}px`]
    );

    const boysOpacity = useTransform(scrollY, [0, winHeight / 2], [1, 0]);

    return (
        <section className="section section1">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="gradient-black"></div>
            <img
                alt="comp"
                src={CompL}
                style={{ marginTop: 32 }}
                width={82.4}
                height={31.45}
            />
            <motion.img
                alt={"MAN1"}
                src={MAN1}
                style={{
                    position: "absolute",
                    top: 461,
                    left: 3,
                    opacity: boysOpacity,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
            />
            <motion.img
                alt={"MAN2"}
                src={MAN2}
                style={{
                    position: "absolute",
                    top: 461,
                    left: 52,
                    opacity: boysOpacity,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
            />
            <motion.img
                alt={"MAN3"}
                src={MAN3}
                style={{
                    position: "absolute",
                    top: 461,
                    left: 186,
                    opacity: boysOpacity,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
            />
            <motion.img
                alt={"MAN4"}
                src={MAN4}
                style={{
                    position: "absolute",
                    top: 461,
                    left: 256,
                    opacity: boysOpacity,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
            />
            <motion.div className="heading" style={{}}>
                Lead
            </motion.div>
            <motion.div className="subheading">
                Join the Naukri Campus Squad to lead your college, earn rewards,
                and grow your career
            </motion.div>
            <button className="landing-btn">Become campus ambassador</button>
            <motion.div
                className="boy-box"
                initial={{ x: -winWidth, y: winHeight }}
                animate={{ x: 0, y: 0 }}
                transition={{
                    type: "just",
                    stiffness: 100,
                    damping: 20,
                    duration: 0.5,
                }}
            >
                <motion.img
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        x: xPositionBoy,
                        y: yPositionBoy,
                        scale: scaleBoy,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                    }}
                    className="boy-svg"
                    src={BIY}
                    width={166}
                    height={531}
                />
            </motion.div>
            <motion.div
                className="girl-box"
                initial={{ x: winWidth, y: winHeight }}
                animate={{ x: 0, y: 0 }}
                transition={{
                    type: "just",
                    stiffness: 100,
                    damping: 20,
                    duration: 0.5,
                }}
            >
                <motion.img
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        x: xPositionGirl,
                        y: yPositionGirl,
                        scale: scaleGirl,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                    }}
                    className="girl-svg"
                    src={GIY}
                    width={106}
                    height={515}
                />
            </motion.div>
        </section>
    );
}

export default Section1;
