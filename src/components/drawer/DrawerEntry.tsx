import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    readonly label: string;
    readonly url: string;
    readonly onClick: MouseEventHandler<HTMLParagraphElement>;
}

/**
 * Represents an entry in a `DrawerSection`.
 */
export default function DrawerEntry(props: Props) {
    const navigate = useNavigate();

    return (
        <p
            className="navigation"
            onClick={(e) => {
                props.onClick(e);

                navigate(props.url);
            }}
        >
            {props.label}
        </p>
    );
}
