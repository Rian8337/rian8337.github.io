import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface Props {
    /**
     * The function to run upon clicking the backdrop.
     */
    readonly onClick: MouseEventHandler<HTMLDivElement>;
}

export default function DrawerBackdrop(props: Props) {
    return (
        <motion.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.25,
                easings: ["easeIn"],
            }}
            className="backdrop"
            onClick={props.onClick}
        />
    );
}
