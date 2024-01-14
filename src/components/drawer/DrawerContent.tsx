import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

interface DrawerEntryProps {
    readonly label: string;
    readonly url: string;
    readonly onClick: MouseEventHandler<HTMLParagraphElement>;
}

function DrawerEntry(props: DrawerEntryProps) {
    const navigate = useNavigate();

    return (
        <p
            className="navigation"
            onClick={(e) => {
                props.onClick(e);

                navigate(props.url);
            }}
        >
            {props.label}
        </p>
    );
}

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
            <h3 className="align-center">Directory</h3>

            <DrawerEntry label="Home" url="/" onClick={props.onEntryClick} />
            <DrawerEntry
                label="Posts"
                url="/posts"
                onClick={props.onEntryClick}
            />
        </motion.div>
    );
}
