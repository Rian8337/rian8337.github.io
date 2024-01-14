import { SpotlightBackgroundColor } from "../../constants/spotlight/SpotlightBackgroundColor";
import { SpotlightContentAlignment } from "../../constants/spotlight/SpotlightContentAlignment";
import { SpotlightImagePosition } from "../../constants/spotlight/SpotlightImagePosition";
import { SpotlightOnloadContent } from "../../constants/spotlight/SpotlightOnloadContent";
import { SpotlightOnloadImage } from "../../constants/spotlight/SpotlightOnloadImage";
import { SpotlightOnscrollContent } from "../../constants/spotlight/SpotlightOnscrollContent";
import { SpotlightOnscrollImage } from "../../constants/spotlight/SpotlightOnscrollImage";
import { SpotlightOrientation } from "../../constants/spotlight/SpotlightOrientation";
import { SpotlightScreenFill } from "../../constants/spotlight/SpotlightScreenFill";
import { SpotlightStyle } from "../../constants/spotlight/SpotlightStyle";
import { processProps } from "../../utils/util";
import { BaseProps } from "../../structures/BaseProps";
import Image from "../Image";
import Content from "../Content";
import { PropsWithChildren, useEffect, useRef } from "react";
import browser from "../../utils/browser";
import { motion } from "framer-motion";
import defaultAnimationProps from "../../utils/defaultAnimationProps";

interface Props extends BaseProps {
    /**
     * The spotlight style.
     */
    readonly style: SpotlightStyle;

    /**
     * The name of the image file to be displayed inside this spotlight.
     */
    readonly imageUrl: string;

    /**
     * The orientation of this spotlight.
     */
    readonly orientation?: SpotlightOrientation;

    /**
     * The alignment of content in this spotlight.
     */
    readonly contentAlignment?: SpotlightContentAlignment;

    /**
     * The position of the image in this spotlight.
     */
    readonly imagePosition?: SpotlightImagePosition;

    /**
     * How content in this spotlight should enter on load.
     */
    readonly onloadContent?: SpotlightOnloadContent;

    /**
     * How the image in this spotlight should enter on load.
     */
    readonly onloadImage?: SpotlightOnloadImage;

    /**
     * How content in this spotlight should behave on scroll.
     */
    readonly onscrollContent?: SpotlightOnscrollContent;

    /**
     * How the image in this spotlight should behave on scroll.
     */
    readonly onscrollImage?: SpotlightOnscrollImage;

    /**
     * The background color of this spotlight.
     */
    readonly backgroundColor?: SpotlightBackgroundColor;

    /**
     * Determines how the spotlight should fill the screen.
     */
    readonly screenFill?: SpotlightScreenFill;
}

/**
 * Represents a spotlight.
 */
export default function Spotlight(props: PropsWithChildren<Props>) {
    let className = processProps(`spotlight style${props.style}`, props);

    if (props.orientation !== undefined) {
        className += " orient-";

        switch (props.orientation) {
            case SpotlightOrientation.left:
                className += "left";
                break;
            case SpotlightOrientation.right:
                className += "right";
                break;
        }
    }

    if (props.contentAlignment !== undefined) {
        className += " content-alignment-";

        switch (props.contentAlignment) {
            case SpotlightContentAlignment.left:
                className += "left";
                break;
            case SpotlightContentAlignment.center:
                className += "center";
                break;
            case SpotlightContentAlignment.right:
                className += "right";
                break;
        }
    }

    if (props.imagePosition !== undefined) {
        className += " image-position-";

        switch (props.imagePosition) {
            case SpotlightImagePosition.left:
                className += "left";
                break;
            case SpotlightImagePosition.center:
                className += "center";
                break;
            case SpotlightImagePosition.right:
                className += "right";
                break;
        }
    }

    if (props.onloadContent !== undefined) {
        className += " onload-content-fade-";

        switch (props.onloadContent) {
            case SpotlightOnloadContent.fadeUp:
                className += "up";
                break;
            case SpotlightOnloadContent.fadeDown:
                className += "down";
                break;
            case SpotlightOnloadContent.fadeLeft:
                className += "left";
                break;
            case SpotlightOnloadContent.fadeRight:
                className += "right";
                break;
            case SpotlightOnloadContent.fadeIn:
                className += "in";
                break;
        }
    }

    if (props.onloadImage !== undefined) {
        className += " onload-image-fade-";

        switch (props.onloadImage) {
            case SpotlightOnloadImage.fadeIn:
                className += "in";
                break;
        }
    }

    if (props.onscrollContent !== undefined) {
        className += " onscroll-content-fade-";

        switch (props.onscrollContent) {
            case SpotlightOnscrollContent.fadeUp:
                className += "up";
                break;
            case SpotlightOnscrollContent.fadeDown:
                className += "down";
                break;
            case SpotlightOnscrollContent.fadeLeft:
                className += "left";
                break;
            case SpotlightOnscrollContent.fadeRight:
                className += "right";
                break;
            case SpotlightOnscrollContent.fadeIn:
                className += "in";
                break;
        }
    }

    if (props.onscrollImage !== undefined) {
        className += " onscroll-image-fade-";

        switch (props.onscrollImage) {
            case SpotlightOnscrollImage.fadeUp:
                className += "up";
                break;
            case SpotlightOnscrollImage.fadeDown:
                className += "down";
                break;
            case SpotlightOnscrollImage.fadeLeft:
                className += "left";
                break;
            case SpotlightOnscrollImage.fadeRight:
                className += "right";
                break;
            case SpotlightOnscrollImage.fadeIn:
                className += "in";
                break;
        }
    }

    if (props.backgroundColor !== undefined) {
        if (props.backgroundColor === SpotlightBackgroundColor.invert) {
            className += " invert";
        } else {
            className += ` color${props.backgroundColor}`;
        }
    }

    switch (props.screenFill) {
        case SpotlightScreenFill.fullscreen:
            className += " fullscreen";
            break;
        case SpotlightScreenFill.halfscreen:
            className += " halfscreen";
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
        <motion.section {...defaultAnimationProps} className={className}>
            <Content>{props.children}</Content>

            <Image src={props.imageUrl} />
        </motion.section>
    );
}
