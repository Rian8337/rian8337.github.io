import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import DrawerEntry from "./DrawerEntry";
import DrawerSection from "./DrawerSection";

interface Props {
    /**
     * The function to run when an entry is clicked.
     */
    readonly onEntryClick: MouseEventHandler<HTMLParagraphElement>;
}

/**
 * Represents the content of the drawer.
 */
export default function DrawerContent(props: Props) {
    const initialLeft = "-125%";
    const afterLeft = 0;
    const duration = 0.4;

    return (
        <motion.div
            key="drawer-content"
            initial={{ left: initialLeft }}
            animate={{
                left: afterLeft,
                transition: {
                    duration: duration,
                    easings: ["easeIn"],
                },
            }}
            exit={{
                left: initialLeft,
                transition: {
                    duration: duration,
                    easings: ["easeOut"],
                },
            }}
            className="drawer"
        >
            <DrawerSection title="Directory">
                <DrawerEntry
                    label="Home"
                    url="/"
                    onClick={props.onEntryClick}
                />
            </DrawerSection>

            <DrawerSection title="Posts">
                <DrawerEntry
                    label="January 2024"
                    url="/posts#2024-1"
                    onClick={props.onEntryClick}
                />
            </DrawerSection>
        </motion.div>
    );
}
