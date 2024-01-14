import { PropsWithChildren } from "react";

/**
 * Wraps the children of this component in a `div` with `content` class.
 */
export default function Content(props: PropsWithChildren) {
    return <div className="content">{props.children}</div>;
}
