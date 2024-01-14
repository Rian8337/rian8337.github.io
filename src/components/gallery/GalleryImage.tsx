import { MouseEventHandler, ReactEventHandler } from "react";
import { ButtonSize } from "../../constants/button/ButtonSize";
import { GalleryImage as GalleryImageStruct } from "../../structures/GalleryImage";
import Actions from "../Actions";
import Button from "../Button";
import Image from "../Image";

interface Props {
    /**
     * The image data to display.
     */
    readonly image: GalleryImageStruct;

    /**
     * Whether to enable lightbox behavior.
     */
    readonly lightbox?: boolean;

    /**
     * The function to run if the image is clicked.
     */
    readonly onImageClick?: MouseEventHandler<HTMLAnchorElement>;

    /**
     * The function to run after the image has been loaded.
     */
    readonly onImageLoad?: ReactEventHandler<HTMLImageElement>;
}

/**
 * Represents an image that is shown inside a `Gallery`.
 */
export default function GalleryImage(props: Props) {
    const { image } = props;

    return (
        <article>
            <a href={image.fullImageUrl} onClick={props.onImageClick}>
                <Image
                    src={image.thumbnailImageUrl}
                    onLoad={props.onImageLoad}
                />
            </a>

            <div className="caption">
                <h3>{image.captionTitle}</h3>
                <p>{image.captionDescription}</p>

                <Actions
                    fixed
                    actions={[
                        <Button
                            key={0}
                            label="Details"
                            size={ButtonSize.small}
                        />,
                    ]}
                />
            </div>
        </article>
    );
}
