import { PropsWithChildren } from "react";

/**
 * Wraps the children of this component inside a block quote.
 */
export default function BlockQuote(props: PropsWithChildren) {
    return <blockquote>{props.children}</blockquote>;
}
