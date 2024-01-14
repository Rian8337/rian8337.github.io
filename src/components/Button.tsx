import { ButtonSize } from "../constants/button/ButtonSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
    /**
     * The label of this button.
     */
    readonly label?: string;

    /**
     * The function to run after this button is clicked.
     */
    readonly onClick?: MouseEventHandler<HTMLSpanElement>;

    /**
     * Whether to use the primary style of this button.
     */
    readonly primary?: boolean;

    /**
     * The size of this button.
     */
    readonly size?: ButtonSize;

    /**
     * Whether to fit this button along with other buttons.
     */
    readonly fit?: boolean;

    /**
     * Whether this button is disabled.
     */
    readonly disabled?: boolean;

    /**
     * The FontAwesome icon to attach to this button.
     */
    readonly faIcon?: IconProp;
}

/**
 * Represents a button.
 */
export default function Button(props: Props) {
    let className = "button";

    if (props.primary) {
        className += " primary";
    }

    if (props.fit) {
        className += " fit";
    }

    switch (props.size) {
        case ButtonSize.small:
            className += " small";
            break;
        case ButtonSize.large:
            className += " large";
            break;
    }

    if (props.disabled) {
        className += " disabled";
    }

    return (
        <span className={className} onClick={props.onClick}>
            {props.faIcon ? <FontAwesomeIcon icon={props.faIcon} /> : null}
            {props.label}
        </span>
    );
}
