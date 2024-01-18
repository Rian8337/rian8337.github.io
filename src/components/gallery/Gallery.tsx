import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { GallerySize } from "../../constants/gallery/GallerySize";
import { GalleryStyle } from "../../constants/gallery/GalleryStyle";
import { GalleryImage as GalleryImageStruct } from "../../structures/GalleryImage";
import { processProps } from "../../utils/util";
import browser from "../../utils/browser";
import scrollex from "../../utils/scrollex";
import { BaseProps } from "../../structures/BaseProps";
import Image from "../Image";
import Inner from "../Inner";
import GalleryImage from "./GalleryImage";
import { motion } from "framer-motion";
import defaultAnimationProps from "../../utils/defaultAnimationProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Props extends BaseProps {
    /**
     * The images to display in this gallery.
     */
    readonly images: GalleryImageStruct[];

    /**
     * The style of this gallery.
     */
    readonly style: GalleryStyle;

    /**
     * The size of this gallery.
     */
    readonly size?: GallerySize;

    /**
     * Whether to enable lightbox behavior.
     */
    readonly lightbox?: boolean;

    /**
     * Whether to fade in thumbnails on page load.
     */
    readonly onloadFadeIn?: boolean;

    /**
     * Whether to fade in thumbnails on page scroll.
     */
    readonly onscrollFadeIn?: boolean;
}

/**
 * Represents a gallery that contains a list of images.
 */
export default function Gallery(props: Props) {
    let className = processProps(`gallery style${props.style}`, props);

    switch (props.size) {
        case GallerySize.small:
            className += " small";
            break;
        case GallerySize.medium:
            className += " medium";
            break;
        case GallerySize.big:
            className += " big";
            break;
    }

    if (props.lightbox) {
        className += " lightbox";
    }

    if (props.onloadFadeIn) {
        className += " onload-fade-in";
    }

    if (props.onscrollFadeIn) {
        className += " onscroll-fade-in";
    }

    const galleryRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const modalImageRef = useRef<HTMLImageElement>(null);

    const [galleryMoveIntervalId, setGalleryMoveIntervalId] = useState<
        number | undefined
    >(undefined);

    function onMouseEnterDirection(event: MouseEvent<SVGSVGElement>) {
        const element = event.currentTarget;
        const direction = element.classList.contains("forward") ? 1 : -1;

        // Clear move interval.
        clearInterval(galleryMoveIntervalId);

        // Start interval.
        setGalleryMoveIntervalId(
            setInterval(() => {
                for (const sibling of element.parentNode?.children ?? []) {
                    if (!(sibling instanceof HTMLDivElement)) {
                        continue;
                    }

                    if (!sibling.classList.contains("inner")) {
                        continue;
                    }

                    sibling.scrollLeft += 5 * direction;
                }
            }, 10)
        );
    }

    function onMouseLeaveDirection() {
        // Clear move interval.
        clearInterval(galleryMoveIntervalId);
    }

    function onImageClick(event: MouseEvent<HTMLAnchorElement>) {
        // We only use this for lightbox support.
        if (!props.lightbox || !modalRef.current || !modalImageRef.current) {
            return;
        }

        const modalElement = modalRef.current;
        const modalImageElement = modalImageRef.current;

        // Not an image? Bail.
        if (!event.currentTarget.href.match(/\.(jpg|gif|png|mp4)$/)) {
            return;
        }

        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Locked? Bail.
        if (modalElement.dataset.locked) {
            return;
        }

        // Lock.
        modalElement.dataset.locked = "1";

        // Set source.
        modalImageElement.src = event.currentTarget.href;

        // Set visible.
        modalElement.classList.add("visible");

        // Focus.
        modalElement.focus();

        // Delay.
        setTimeout(() => {
            // Unlock.
            delete modalElement.dataset.locked;
        }, 600);
    }

    function onModalClick() {
        if (!modalRef.current) {
            return;
        }

        const element = modalRef.current;

        // Locked? Bail.
        if (element.dataset.locked) {
            return;
        }

        // Already hidden? Bail.
        if (!element.classList.contains("visible")) {
            return;
        }

        // Lock.
        element.dataset.locked = "1";

        // Clear visible, loaded.
        element.classList.remove("loaded");

        // Delay.
        setTimeout(() => {
            element.classList.remove("visible");

            setTimeout(() => {
                // Clear source.
                if (modalImageRef.current) {
                    modalImageRef.current.src = "";
                }

                // Unlock.
                delete element.dataset.locked;

                // Focus.
                document.body.focus();
            }, 475);
        }, 125);
    }

    function onModalKeyDown(event: KeyboardEvent<HTMLDivElement>) {
        // Escape? Hide modal.
        if (event.key === "Escape") {
            onModalClick();
        }
    }

    function onImageLoad() {
        if (!modalRef.current) {
            return;
        }

        const modalElement = modalRef.current;

        setTimeout(() => {
            // No longer visible? Bail.
            if (!modalElement.classList.contains("visible")) {
                return;
            }

            // Set loaded.
            modalElement.classList.add("loaded");
        }, 275);
    }

    useEffect(() => {
        if (!galleryRef.current) {
            return;
        }

        const scrollexId = scrollex.register(galleryRef.current, {
            top: "30vh",
            bottom: "30vh",
            delay: 50,
            onInitialize() {
                galleryRef.current?.classList.add("is-inactive");
            },
            onTerminate() {
                galleryRef.current?.classList.remove("is-inactive");
            },
            onEnter() {
                galleryRef.current?.classList.remove("is-inactive");
            },
            onLeave() {
                if (
                    galleryRef.current?.classList.contains(
                        "onscroll-bidirectional"
                    )
                ) {
                    galleryRef.current.classList.add("is-inactive");
                }
            },
        });

        function onInnerScroll(event: WheelEvent) {
            // Cap delta.
            const delta = Math.max(-25, Math.min(25, event.deltaX * 10));

            // Scroll.
            (event.target as HTMLDivElement).scrollLeft += delta;
        }

        const innerElement = innerRef.current;
        if (innerElement) {
            innerElement.style.overflowX = browser.mobile ? "scroll" : "hidden";
            innerElement.style.overflowY = browser.mobile
                ? "visible"
                : "hidden";

            innerElement.scrollLeft = 0;
            innerElement.addEventListener("wheel", onInnerScroll);
        }

        return () => {
            scrollex.unregister(scrollexId);

            innerElement?.removeEventListener("wheel", onInnerScroll);
        };
    }, []);

    return (
        <motion.div
            {...defaultAnimationProps}
            className={className}
            ref={galleryRef}
        >
            <div
                className="modal"
                tabIndex={-1}
                ref={modalRef}
                onClick={onModalClick}
                onKeyDown={onModalKeyDown}
            >
                <Inner>
                    <Image src="" ref={modalImageRef} onLoad={onImageLoad} />
                </Inner>
            </div>

            {!browser.mobile ? (
                <>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="backward"
                        size="xs"
                        onMouseEnter={onMouseEnterDirection}
                        onMouseLeave={onMouseLeaveDirection}
                    />
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="forward"
                        size="xs"
                        onMouseEnter={onMouseEnterDirection}
                        onMouseLeave={onMouseLeaveDirection}
                    />
                </>
            ) : null}

            <Inner ref={innerRef}>
                {props.images.map((image, i) => (
                    <GalleryImage
                        key={i}
                        image={image}
                        lightbox={props.lightbox}
                        onImageLoad={onImageLoad}
                        onImageClick={onImageClick}
                    />
                ))}
            </Inner>
        </motion.div>
    );
}
