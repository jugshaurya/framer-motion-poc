import React, { useEffect } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import "./Demo.scss";
import BIY from "./assets/boy.svg";
import GIY from "./assets/girl.svg";

function Demo() {
    const { scrollY } = useScroll({
        offset: ["start end", "end start"],
    });
    const winHeight = window.innerHeight;
    console.log(winHeight);
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

    return (
        <div className="Demo">
            <motion.img
                style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    x: xPositionBoy,
                    y: yPositionBoy,
                    scale: scaleBoy,
                    // translateX: "-50%",
                    // translateY: "-50%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="boy-svg"
                src={BIY}
            />

            <motion.img
                style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    x: xPositionGirl,
                    y: yPositionGirl,
                    scale: scaleGirl,
                    // translateX: "-50%",
                    // translateY: "-50%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="boy-svg"
                src={GIY}
            />

            <section className="section section1">
                {/* Page 1 content */}
            </section>
            <section className="section section2"></section>
        </div>
    );
}

export default Demo;
