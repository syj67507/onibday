import rathalosImage from "../assets/MHRise-Rathalos_Render_001.webp";
import godzillaImage from "../assets/godzilla.png";
import loadingGif from "../assets/loading.gif";

import { motion } from "motion/react";

export function Rathalos() {
    return (
        <motion.img
            src={loadingGif}
            width={`${1200 / 2}px`}
            height={`${976 / 2}px`}
            animate={{
                rotate: 0
            }}
            transition={{
                repeatType: "loop",
                repeat: Infinity,
                duration: 2,
                ease: "linear",
            }}
        />
    );
}
