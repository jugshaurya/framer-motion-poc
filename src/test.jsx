import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StickySection = () => {
    const { scrollYProgress } = useScroll();

    // Example of using scroll position to transform content
    const contentOpacity = useTransform(
        scrollYProgress,
        [0.1, 0.3, 0.5],
        [1, 0.5, 0]
    );

    return (
        <div style={{ position: "relative", height: "500vh" }}>
            {/* Sticky Section */}
            <motion.div
                style={{
                    position: "sticky",
                    top: 0,
                    height: "300vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "lightblue",
                }}
            >
                {/* Content for Page 1 */}
                <motion.div
                    style={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: contentOpacity,
                    }}
                >
                    <h2>Page 1 Content</h2>
                </motion.div>

                {/* Content for Page 2 */}
                <motion.div
                    style={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: contentOpacity,
                    }}
                >
                    <h2>Page 2 Content</h2>
                </motion.div>

                {/* Content for Page 3 */}
                <motion.div
                    style={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: contentOpacity,
                    }}
                >
                    <h2>Page 3 Content</h2>
                </motion.div>
            </motion.div>

            {/* Non-sticky content */}
            <div style={{ height: "100vh", backgroundColor: "lightgray" }}>
                <h2>Non-Sticky Content Starts Here</h2>
                <p>
                    This section is no longer sticky. It will scroll as usual
                    after the sticky section has ended.
                </p>
            </div>
            <div style={{ height: "100vh", backgroundColor: "lightpink" }}>
                <h2>More Non-Sticky Content</h2>
                <p>
                    Continue adding content that scrolls naturally after the
                    sticky section.
                </p>
            </div>
        </div>
    );
};

export default StickySection;
