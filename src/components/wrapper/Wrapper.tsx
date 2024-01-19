import { PropsWithChildren, useEffect, useRef } from "react";
import { WrapperBackgroundColor } from "../../constants/wrapper/WrapperBackgroundColor";
import { BaseProps } from "../../structures/BaseProps";
import { WrapperStyle } from "../../constants/wrapper/WrapperStyle";
import { processProps } from "../../utils/util";
import scrollex from "../../utils/scrollex";
import { motion } from "framer-motion";

interface Props extends BaseProps {
    /**
     * The style of this wrapper.
     */
    readonly style: WrapperStyle;

    /**
     * The ID of this wrapper.
     */
    readonly id?: string;

    /**
     * The background size of this wrapper.
     */
    readonly backgroundColor?: WrapperBackgroundColor;
}

/**
 * Wraps the children of this component inside a `section` that is scrollex-ed.
 */
export default function Wrapper(props: PropsWithChildren<Props>) {
    let className = processProps(`wrapper style${props.style}`, props);

    if (props.backgroundColor !== undefined) {
        if (props.backgroundColor === WrapperBackgroundColor.invert) {
            className += " invert";
        } else {
            className += ` color${props.backgroundColor}`;
        }
    }

    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const scrollexIds: string[] = [];

        for (const children of ref.current.children) {
            if (children instanceof HTMLElement) {
                const id = scrollex.register(children, {
                    top: "30vh",
                    bottom: "30vh",
                    onInitialize() {
                        children.classList.add("is-inactive");
                    },
                    onTerminate() {
                        children.classList.remove("is-inactive");
                    },
                    onEnter() {
                        children.classList.remove("is-inactive");
                    },
                    onLeave() {
                        if (
                            children.classList.contains(
                                "onscroll-bidirectional"
                            )
                        ) {
                            children.classList.add("is-inactive");
                        }
                    },
                });

                scrollexIds.push(id);
            }
        }

        return () => {
            for (const id of scrollexIds) {
                scrollex.unregister(id);
            }
        };
    }, []);

    return (
        <motion.section
            id={props.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={className}
            ref={ref}
        >
            {props.children}
        </motion.section>
    );
}
