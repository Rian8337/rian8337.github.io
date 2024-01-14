import { PropsWithChildren } from "react";

interface Props {
    /**
     * Whether to use the alternate version of the box.
     */
    readonly alternate?: boolean;
}

/**
 * Wraps the children of this component inside a box (a `div` with `box` class).
 */
export default function Box(props: PropsWithChildren<Props>) {
    return (
        <div className={props.alternate ? "box alt" : "box"}>
            {props.children}
        </div>
    );
}
