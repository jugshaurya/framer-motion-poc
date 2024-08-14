import React, { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import "./section2.scss";
import CompL from "../assets/logoComp.svg";

function Section2() {
    const { scrollY } = useScroll();
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;

    const scroollyFix = useTransform(
        scrollY,
        [winHeight, 7 * winHeight],
        [32 + winHeight, 32 + 7 * winHeight]
    );

    const scroollyFix2 = useTransform(
        scrollY,
        [winHeight, 7 * winHeight],
        [98 + winHeight, 98 + 7 * winHeight]
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
        <div
            style={{ position: "relative", overflowY: "auto", height: "100vh" }}
        >
            <section className="section section2">
                <motion.img
                    alt="comp"
                    src={CompL}
                    style={{
                        position: "sticky",
                        top: 32,
                        left: 0,
                        right: 0,
                    }}
                    width={82.4}
                    height={31.45}
                />
                <motion.div
                    className="text1"
                    style={{
                        position: "sticky",
                        top: 98,
                        left: 0,
                        right: 0,
                    }}
                >
                    Take Change & mkae sidif difference
                </motion.div>

                <motion.div
                    className="box box1"
                    style={{
                        scale: scaleBox,
                        opacity: boxOpac,
                        x: boxx,
                        y: boxy,
                    }}
                >
                    Lorem kipo lispism Lorem kipo lispism Lorem kipo lispism
                    Lorem kipo lispism
                </motion.div>
                <motion.div
                    className="box box2"
                    style={{
                        scale: scaleBox,
                        opacity: boxOpac,
                        x: boxx2,
                        y: boxy2,
                    }}
                >
                    Lorem kipo lispism Lorem kipo lispism Lorem kipo lispism
                    Lorem kipo lispism
                </motion.div>
                <motion.div
                    className="box box1"
                    style={{
                        scale: scaleBox,
                        opacity: boxOpac_p,
                        x: boxx_p,
                        y: boxy_p,
                    }}
                >
                    Lorem kipo lispism Lorem kipo lispism Lorem kipo lispism
                    Lorem kipo lispism2
                </motion.div>
                <motion.div
                    className="box box2"
                    style={{
                        scale: scaleBox,
                        opacity: boxOpac_p,
                        x: boxx2_p,
                        y: boxy2_p,
                    }}
                >
                    Lorem kipo lispism Lorem kipo lispism Lorem kipo lispism
                    Lorem kipo lispism2
                </motion.div>
            </section>
        </div>
    );
}

export default Section2;
