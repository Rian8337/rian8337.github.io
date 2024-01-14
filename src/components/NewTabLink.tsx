import { PropsWithChildren } from "react";

interface Props {
    /**
     * The link.
     */
    readonly href: string;
}

/**
 * An {@link HTMLAnchorElement} that directs the user with a new page.
 */
export default function NewTabLink(props: PropsWithChildren<Props>) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    );
}
