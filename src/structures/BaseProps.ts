import { TextAlignment } from "../constants/TextAlignment";

/**
 * Base properties of a React component.
 */
export interface BaseProps {
    /**
     * The alignment of text in the component.
     */
    readonly textAlign?: TextAlignment;

    /**
     * When set to `true`, the component will be "unloaded" by scrollex once it leaves the screen.
     */
    readonly onscrollBidirectional?: boolean;
}
