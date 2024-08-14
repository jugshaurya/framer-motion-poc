import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./section3.scss";

function Section3() {
    const { scrollY } = useScroll();
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;

    const scaleBox = useTransform(scrollY, [0, winHeight], [0, 1]);
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
        <section className="section section3">
            <motion.div
                className="box box1"
                style={{
                    scale: scaleBox,
                    opacity: boxOpac_p,
                    x: boxx_p,
                    y: boxy_p,
                }}
            >
                Lorem kipo lispism Lorem kipo lispism Lorem kipo lispism Lorem
                kipo lispism
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
                Lorem kipo lispism Lorem kipo lispism Lorem kipo lispism Lorem
                kipo lispism
            </motion.div>
        </section>
    );
}

export default Section3;
