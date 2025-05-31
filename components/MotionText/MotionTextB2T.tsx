import React from 'react'
import { motion } from "framer-motion";

interface MotionType {
    text: string;
}

const MotionTextB2T = (props: MotionType) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 20,
                mass: 2,
            }}
        >
            {props.text}
        </motion.div>
    )
}

export default MotionTextB2T