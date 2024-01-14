import { PropsWithChildren, forwardRef, useEffect, useRef } from "react";
import { BaseProps } from "../../structures/BaseProps";
import Image from "../Image";
import Content from "../Content";
import { processProps } from "../../utils/util";
import { BannerBackgroundColor } from "../../constants/banner/BannerBackgroundColor";
import { BannerContentAlignment } from "../../constants/banner/BannerContentAlignment";
import { BannerImagePosition } from "../../constants/banner/BannerImagePosition";
import { BannerOnloadContent } from "../../constants/banner/BannerOnloadContent";
import { BannerOnloadImage } from "../../constants/banner/BannerOnloadImage";
import { BannerOnscrollContent } from "../../constants/banner/BannerOnscrollContent";
import { BannerOnscrollImage } from "../../constants/banner/BannerOnscrollImage";
import { BannerOrientation } from "../../constants/banner/BannerOrientation";
import { BannerStyle } from "../../constants/banner/BannerStyle";
import browser from "../../utils/browser";

interface Props extends BaseProps {
    /**
     * The style of this banner.
     */
    readonly style: BannerStyle;

    /**
     * The orientation of this banner.
     */
    readonly orientation?: BannerOrientation;

    /**
     * The alignment of content in this banner.
     */
    readonly contentAlignment?: BannerContentAlignment;

    /**
     * The position of the image in this banner.
     */
    readonly imagePosition?: BannerImagePosition;

    /**
     * How content in this banner should enter on load.
     */
    readonly onloadContent?: BannerOnloadContent;

    /**
     * How content in this banner should enter on load.
     */
    readonly onloadImage?: BannerOnloadImage;

    /**
     * How the content in this banner should behave on scroll.
     */
    readonly onscrollContent?: BannerOnscrollContent;

    /**
     * How the image in this banner should behave on scroll.
     */
    readonly onscrollImage?: BannerOnscrollImage;

    /**
     * The background color of this banner.
     */
    readonly backgroundColor?: BannerBackgroundColor;

    /**
     * The URL to the image of this banner.
     */
    readonly imageUrl: string;

    /**
     * The alternate text of the image of this banner.
     */
    readonly imageAlt?: string;

    /**
     * Whether the banner should fill the height of the screen.
     */
    readonly fullscreen?: boolean;
}

/**
 * Represents a banner.
 */
export default forwardRef<HTMLElement, PropsWithChildren<Props>>(
    function Banner(props, ref) {
        let className = processProps(`banner style${props.style}`, props);

        if (props.fullscreen) {
            className += " fullscreen";
        }

        if (props.orientation !== undefined) {
            className += " orient-";

            switch (props.orientation) {
                case BannerOrientation.left:
                    className += "left";
                    break;
                case BannerOrientation.right:
                    className += "right";
                    break;
            }
        }

        if (props.contentAlignment !== undefined) {
            className += " content-alignment-";

            switch (props.contentAlignment) {
                case BannerContentAlignment.left:
                    className += "left";
                    break;
                case BannerContentAlignment.center:
                    className += "center";
                    break;
                case BannerContentAlignment.right:
                    className += "right";
                    break;
            }
        }

        if (props.imagePosition !== undefined) {
            className += " image-position-";

            switch (props.imagePosition) {
                case BannerImagePosition.left:
                    className += "left";
                    break;
                case BannerImagePosition.center:
                    className += "center";
                    break;
                case BannerImagePosition.right:
                    className += "right";
                    break;
            }
        }

        if (props.onloadContent !== undefined) {
            className += " onload-content-fade-";

            switch (props.onloadContent) {
                case BannerOnloadContent.fadeUp:
                    className += "up";
                    break;
                case BannerOnloadContent.fadeDown:
                    className += "down";
                    break;
                case BannerOnloadContent.fadeLeft:
                    className += "left";
                    break;
                case BannerOnloadContent.fadeRight:
                    className += "right";
                    break;
                case BannerOnloadContent.fadeIn:
                    className += "in";
                    break;
            }
        }

        if (props.onloadImage !== undefined) {
            className += " onload-image-fade-";

            switch (props.onloadImage) {
                case BannerOnloadImage.fadeIn:
                    className += "in";
                    break;
            }
        }

        if (props.onscrollContent !== undefined) {
            className += " onscroll-content-fade-";

            switch (props.onscrollContent) {
                case BannerOnscrollContent.fadeUp:
                    className += "up";
                    break;
                case BannerOnscrollContent.fadeDown:
                    className += "down";
                    break;
                case BannerOnscrollContent.fadeLeft:
                    className += "left";
                    break;
                case BannerOnscrollContent.fadeRight:
                    className += "right";
                    break;
                case BannerOnscrollContent.fadeIn:
                    className += "in";
                    break;
            }
        }

        if (props.onscrollImage !== undefined) {
            className += " onscroll-image-fade-";

            switch (props.onscrollImage) {
                case BannerOnscrollImage.fadeUp:
                    className += "up";
                    break;
                case BannerOnscrollImage.fadeDown:
                    className += "down";
                    break;
                case BannerOnscrollImage.fadeLeft:
                    className += "left";
                    break;
                case BannerOnscrollImage.fadeRight:
                    className += "right";
                    break;
                case BannerOnscrollImage.fadeIn:
                    className += "in";
                    break;
            }
        }

        if (props.backgroundColor !== undefined) {
            if (props.backgroundColor === BannerBackgroundColor.invert) {
                className += " invert";
            } else {
                className += ` color${props.backgroundColor}`;
            }
        }

        const imageRef = useRef<HTMLImageElement>(null);

        useEffect(() => {
            // Object fit workaround.
            if (!imageRef.current || browser.canUse("object-fit")) {
                return;
            }

            const positionClass = className.match(/image-position-([a-z]+)/);
            const { style } = imageRef.current;

            // Set image.
            style.backgroundImage = `url(${props.imageUrl})`;
            style.backgroundRepeat = "no-repeat";
            style.backgroundSize = "cover";

            // Set position.
            style.backgroundPosition = positionClass?.[1] ?? "center";

            // Hide original.
            style.opacity = "0";
        }, [className, props.imageUrl]);

        return (
            <section className={className} ref={ref}>
                <Content>{props.children}</Content>

                <Image
                    src={props.imageUrl}
                    alt={props.imageAlt}
                    ref={imageRef}
                />
            </section>
        );
    }
);
