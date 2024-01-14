/**
 * The orientation of content in a spotlight element.
 */
export enum SpotlightOrientation {
    /**
     * Shows content on the left, image on the right.
     *
     * For `style4`, attaches the content box to the left edge of the screen.
     *
     * For `style5`, places the content box on the left of the screen.
     */
    left,

    /**
     * Places the content box in the center of the screen. Only supported by `style4` and `style5`.
     */
    center,

    /**
     * Shows content on the right, image on the left.
     *
     * For `style4`, attaches the content box to the right edge of the screen.
     *
     * For `style5`, places the content box on the right side of the screen.
     */
    right,
}
