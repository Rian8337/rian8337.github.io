import { motion } from "framer-motion";
import { DefinitionListItem } from "../../structures/DefinitionListItem";
import defaultAnimationProps from "../../utils/defaultAnimationProps";

interface Props {
    /**
     * The items to display in the list.
     */
    readonly items: DefinitionListItem[];
}

/**
 * Represents a list to display definitions.
 */
export default function DefinitionList(props: Props) {
    return (
        <motion.dl {...defaultAnimationProps}>
            {props.items.map((item) => (
                <>
                    <dt>{item.title}</dt>
                    <dd>
                        <p>{item.description}</p>
                    </dd>
                </>
            ))}
        </motion.dl>
    );
}
