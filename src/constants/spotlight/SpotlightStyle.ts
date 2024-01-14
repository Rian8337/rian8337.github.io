/**
 * Available styles of a spotlight.
 */
export enum SpotlightStyle {
    /**
     * A 30/70 (or 70/30, depending on orientation) vertical split between content and an image.
     */
    style1 = 1,

    /**
     * An image within a circular frame placed to the side of content.
     */
    style2,

    /**
     * An image within a phone-shaped frame placed to the side of content.
     */
    style3,

    /**
     * Boxed-in content set against an image background, and attached to either side of the screen or centered.
     */
    style4,

    /**
     * Boxed-in content set against an image background.
     */
    style5,
}
