import { Children, PropsWithChildren } from "react";

/**
 * Represents a list of FontAwesome icons.
 */
export default function Icons(props: PropsWithChildren) {
    return (
        <ul className="icons">
            {Children.map(props.children, (child) => (
                <li>{child}</li>
            ))}
        </ul>
    );
}
