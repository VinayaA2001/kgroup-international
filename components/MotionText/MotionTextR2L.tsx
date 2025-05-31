import React from 'react'
import { motion } from "framer-motion";

interface MotionType {
    text: string;
}

const MotionTextR2L = (props: MotionType) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 20,
                mass: 2,
            }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {props.text}
        </motion.div>
    )
}

export default MotionTextR2L