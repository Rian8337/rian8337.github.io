import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

interface Props {
    /**
     * The function to execute after the button is clicked.
     */
    readonly onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Represents a button to open the drawer.
 */
export default function DrawerButton(props: Props) {
    return (
        <button onClick={props.onClick}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}
