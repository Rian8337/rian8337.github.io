import { motion } from "framer-motion";
import { Children, PropsWithChildren } from "react";
import defaultAnimationProps from "../../utils/defaultAnimationProps";

/**
 * Represents an ordered list, where items are ordered with a number.
 */
export default function OrderedList(props: PropsWithChildren) {
    return (
        <motion.ol {...defaultAnimationProps}>
            {Children.map(props.children, (child) => (
                <li>{child}</li>
            ))}
        </motion.ol>
    );
}
