import { BaseProps } from "../structures/BaseProps";
import { TextAlignment } from "../constants/TextAlignment";

/**
 * Processes base props.
 *
 * @param props The base props.
 * @returns The class representing the base props.
 */
export function processProps(baseClassName: string, props: BaseProps): string {
    switch (props.textAlign) {
        case TextAlignment.left:
            baseClassName += " align-left";
            break;
        case TextAlignment.center:
            baseClassName += " align-center";
            break;
        case TextAlignment.right:
            baseClassName += " align-right";
            break;
    }

    if (props.onscrollBidirectional) {
        baseClassName += " onscroll-bidirectional";
    }

    return baseClassName;
}
