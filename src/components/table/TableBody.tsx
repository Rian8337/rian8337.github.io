import { PropsWithChildren } from "react";

/**
 * Represents the body of a table.
 */
export default function TableBody(props: PropsWithChildren) {
    return <tbody>{props.children}</tbody>;
}
