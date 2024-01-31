import { ReactNode } from "react";

/**
 * Represents an image in the gallery section.
 */
export interface GalleryImage {
    /**
     * The URL to the full image.
     */
    readonly fullImageUrl: string;

    /**
     * The URL to the thumbnail image. Defaults to the URL to the full image.
     */
    readonly thumbnailImageUrl?: string;

    /**
     * The caption title of the image.
     */
    readonly captionTitle: ReactNode;

    /**
     * The caption description of the image.
     */
    readonly captionDescription: ReactNode;
}
