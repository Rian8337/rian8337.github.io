import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import defaultAnimationProps from "../../utils/defaultAnimationProps";

interface Props {
    /**
     * Whether to use the alternate style of the table.
     */
    readonly alternate?: boolean;

    /**
     * Whether to make cell sizes uniform.
     */
    readonly uniform?: boolean;

    /**
     * Whether to make the position of the table fixed.
     */
    readonly fixed?: boolean;
}

/**
 * Represents a table.
 */
export default function Table(props: PropsWithChildren<Props>) {
    let tableClassName = "";

    if (props.alternate) {
        tableClassName += "alternate";
    }

    if (props.uniform) {
        tableClassName += " uniform";
    }

    if (props.fixed) {
        tableClassName += " fixed";
    }

    return (
        <motion.div {...defaultAnimationProps} className="table-wrapper">
            <table className={tableClassName}>{props.children}</table>
        </motion.div>
    );
}
