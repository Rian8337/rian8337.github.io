import { ReactEventHandler, forwardRef } from "react";
import { ImageAlignment } from "../constants/ImageAlignment";

interface Props {
    /**
     * The source of this image.
     */
    readonly src: string;

    /**
     * The alignment of this image.
     */
    readonly alignment?: ImageAlignment;

    /**
     * The alternate text of this image.
     */
    readonly alt?: string;

    /**
     * The function to fire after this image is loaded.
     */
    readonly onLoad?: ReactEventHandler<HTMLImageElement>;
}

/**
 * Represents an image.
 */
export default forwardRef<HTMLImageElement, Props>(function Image(props, ref) {
    let className = "image";

    switch (props.alignment) {
        case ImageAlignment.fit:
            className += " fit";
            break;
        case ImageAlignment.left:
            className += " left";
            break;
        case ImageAlignment.right:
            className += " right";
            break;
    }

    return (
        <span className={className}>
            <img
                src={props.src}
                alt={props.alt}
                ref={ref}
                onLoad={props.onLoad}
                loading="lazy"
            />
        </span>
    );
});
