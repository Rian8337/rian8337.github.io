import { PropsWithChildren } from "react";

/**
 * Wraps the children of this component inside a code block.
 */
export default function CodeBlock(props: PropsWithChildren) {
    return (
        <pre>
            <code>{props.children}</code>
        </pre>
    );
}
