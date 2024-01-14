/**
 * Determines the style of a banner.
 */
export enum BannerStyle {
    /**
     * A 50/50 vertical split between content and an image.
     */
    style1 = 1,

    /**
     * Boxed-in content set against an image background, and attached to either side of the screen or centered.
     */
    style2,

    /**
     * An image within a circular frame placed to the side of content.
     */
    style3,

    /**
     * An image within a phone-shaped frame placed to the side of content.
     */
    style4,

    /**
     * Content set directly against an image background.
     */
    style5,
}
