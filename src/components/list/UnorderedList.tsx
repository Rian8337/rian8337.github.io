import { motion } from "framer-motion";
import { Children, PropsWithChildren } from "react";
import defaultAnimationProps from "../../utils/defaultAnimationProps";

interface Props {
    /**
     * The style of the list.
     */
    readonly style: "default" | "alt";
}

/**
 * Represents an unordered list, where items are displayed using bullets.
 */
export default function UnorderedList(props: PropsWithChildren<Props>) {
    return (
        <motion.ul
            {...defaultAnimationProps}
            className={props.style === "default" ? "" : "alt"}
        >
            {Children.map(props.children, (child) => (
                <li>{child}</li>
            ))}
        </motion.ul>
    );
}
