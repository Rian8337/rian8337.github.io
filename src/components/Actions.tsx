import { ReactNode } from "react";

interface Props {
    /**
     * Whether to stack the actions.
     */
    readonly stacked?: boolean;

    /**
     * Whether to fit the actions into the screen in one horizontal section.
     */
    readonly fit?: boolean;

    /**
     * Whether to make the position of the actions fixed.
     */
    readonly fixed?: boolean;

    /**
     * The actions.
     */
    readonly actions: ReactNode[];
}

/**
 * An actions container for displaying different actions.
 */
export default function Actions(props: Props) {
    let className = "actions";

    if (props.stacked) {
        className += " stacked";
    }

    if (props.fit) {
        className += " fit";
    }

    if (props.fixed) {
        className += " fixed";
    }

    return (
        <ul className={className}>
            {props.actions.map((action, i) => (
                <li key={i}>{action}</li>
            ))}
        </ul>
    );
}
