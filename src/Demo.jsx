import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import "./Demo.scss";
import BIY from "./assets/boy.svg";
import GIY from "./assets/girl.svg";

function Demo() {
    const { scrollY } = useScroll({
        offset: ["start end", "end start"],
    });
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    // const scrollY = useMotionValue(0);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         scrollY.set(window.scrollY);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [scrollY]);

    const yPositionBoy = useTransform(
        scrollY,
        [0, winHeight],
        ["160px", "335px"]
    );
    const xPositionBoy = useTransform(
        scrollY,
        [0, winHeight],
        ["60px", "-40px"]
    );
    const scaleBoy = useTransform(scrollY, [0, winHeight], ["1", "0.61"]);

    const yPositionGirl = useTransform(
        scrollY,
        [0, winHeight],
        ["209px", "40px"]
    );
    const xPositionGirl = useTransform(
        scrollY,
        [0, winHeight],
        ["244px", "292px"]
    );
    const scaleGirl = useTransform(scrollY, [0, winHeight], ["1", "0.43"]);

    const scaleBox = useTransform(scrollY, [0, winHeight], [0, 1]);
    const boxOpac = useTransform(scrollY, [0, winHeight], [0, 1]);
    const boxx = useTransform(scrollY, [0, winHeight], ["400px", "30px"]);
    const boxy = useTransform(scrollY, [0, winHeight], ["1000px", "224px"]);

    const boxx2 = useTransform(scrollY, [0, winHeight], ["500px", "120px"]);
    const boxy2 = useTransform(scrollY, [0, winHeight], ["1000px", "524px"]);

    const boxOpac_p = useTransform(scrollY, [winHeight, 2 * winHeight], [0, 1]);
    const boxx_p = useTransform(
        scrollY,
        [winHeight, 2 * winHeight],
        ["400px", "30px"]
    );
    const boxy_p = useTransform(
        scrollY,
        [winHeight, 2 * winHeight],
        ["1000px", "224px"]
    );

    const boxx2_p = useTransform(
        scrollY,
        [winHeight, 2 * winHeight],
        ["500px", "120px"]
    );
    const boxy2_p = useTransform(
        scrollY,
        [winHeight, 2 * winHeight],
        ["1000px", "524px"]
    );

    return (
        <div className="Demo">
            <motion.div
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
                        top: "0",
                        left: "0",
                        x: xPositionBoy,
                        y: yPositionBoy,
                        scale: scaleBoy,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="boy-svg"
                    src={BIY}
                />
            </motion.div>
            <motion.div
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
                        top: "0",
                        left: "0",
                        x: xPositionGirl,
                        y: yPositionGirl,
                        scale: scaleGirl,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="boy-svg"
                    src={GIY}
                />
            </motion.div>
            <section className="section section1">
                {/* Page 1 content */}
            </section>
            <section className="section section2">
                <motion.div
                    className="box box1"
                    style={{
                        scale: scaleBox,
                        opacity: boxOpac,
                        x: boxx,
                        y: boxy,
                    }}
                ></motion.div>
                <motion.div
                    className="box box2"
                    style={{
                        scale: scaleBox,
                        opacity: boxOpac,
                        x: boxx2,
                        y: boxy2,
                    }}
                ></motion.div>
            </section>
            <section className="section section3">
                <motion.div
                    className="box box1"
                    style={{
                        scale: scaleBox,
                        opacity: boxOpac_p,
                        x: boxx_p,
                        y: boxy_p,
                    }}
                ></motion.div>
                <motion.div
                    className="box box2"
                    style={{
                        scale: scaleBox,
                        opacity: boxOpac_p,
                        x: boxx2_p,
                        y: boxy2_p,
                    }}
                ></motion.div>
            </section>
        </div>
    );
}

export default Demo;
