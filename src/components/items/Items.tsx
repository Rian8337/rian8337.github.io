import { useEffect, useRef } from "react";
import { ItemsSize } from "../../constants/items/ItemsSize";
import { ItemsStyle } from "../../constants/items/ItemsStyle";
import { Item as ItemStruct } from "../../structures/Item";
import { processProps } from "../../utils/util";
import { BaseProps } from "../../structures/BaseProps";
import Item from "./Item";
import scrollex from "../../utils/scrollex";
import { motion } from "framer-motion";
import defaultAnimationProps from "../../utils/defaultAnimationProps";

interface Props extends BaseProps {
    /**
     * The items to display in this items list.
     */
    readonly items: ItemStruct[];

    /**
     * The style of this items list.
     */
    readonly style: ItemsStyle;

    /**
     * The size of this items list.
     */
    readonly size: ItemsSize;

    /**
     * Whether to fade in items on page load.
     */
    readonly onloadFadeIn?: boolean;

    /**
     * Whether to fade in items on page scroll.
     */
    readonly onscrollFadeIn?: boolean;
}

/**
 * Represents a list of items.
 */
export default function Items(props: Props) {
    let className = processProps(`items style${props.style}`, props);

    switch (props.size) {
        case ItemsSize.small:
            className += " small";
            break;
        case ItemsSize.medium:
            className += " medium";
            break;
        case ItemsSize.big:
            className += " big";
            break;
    }

    if (props.onloadFadeIn) {
        className += " onload-fade-in";
    }

    if (props.onscrollFadeIn) {
        className += " onscroll-fade-in";
    }

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const scrollexId = scrollex.register(ref.current, {
            top: "30vh",
            bottom: "30vh",
            delay: 50,
            onInitialize() {
                ref.current?.classList.add("is-inactive");
            },
            onTerminate() {
                ref.current?.classList.remove("is-inactive");
            },
            onEnter() {
                ref.current?.classList.remove("is-inactive");
            },
            onLeave() {
                if (ref.current?.classList.contains("onscroll-bidirectional")) {
                    ref.current.classList.add("is-inactive");
                }
            },
        });

        return () => {
            scrollex.unregister(scrollexId);
        };
    }, []);

    return (
        <motion.div {...defaultAnimationProps} className={className} ref={ref}>
            {props.items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </motion.div>
    );
}
