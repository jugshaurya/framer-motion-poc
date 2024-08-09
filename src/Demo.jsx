import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BIY from "./assets/boy.svg";
import GIY from "./assets/girl.svg";
import CompL from "./assets/logoComp.svg";
// import MAN1 from "./assets/man1.svg";
// import MAN2 from "./assets/man2.svg";
// import MAN3 from "./assets/man3.svg";
// import MAN4 from "./assets/man4.svg";

function Demo() {
    const { scrollY } = useScroll({
        offset: ["start end", "end start"],
    });

    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    console.log(winHeight, winWidth);

    const yPositionBoy = useTransform(
        scrollY,
        [0, winHeight],
        [`${(180 * 100) / winHeight}vh`, `${(485 * 100) / winHeight}vh`]
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
            <section className="section section1">
                <img src={CompL} style={{ marginTop: 32 }} />
                {/* <img src={MAN1} style={{ marginTop: 32 }} />
            <img src={MAN2} style={{ marginTop: 32 }} />
            <img src={MAN3} style={{ marginTop: 32 }} />
            <img src={MAN4} style={{ marginTop: 32 }} /> */}
                <motion.div className="heading" style={{}}>
                    Lead
                </motion.div>{" "}
                <motion.div className="subheading">
                    Join the Naukri Campus Squad to lead your college, earn
                    rewards, and grow your career
                </motion.div>
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
