import React from 'react'
import { motion } from "framer-motion";

interface MotionType {
    text: string;
}

const Opacity021 = (props: MotionType) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.2, 
                ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {props.text}
        </motion.div>
    )
}

export default Opacity021