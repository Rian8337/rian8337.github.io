import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
    /**
     * Whether to do a smooth scroll.
     */
    readonly smooth?: boolean;
}

/**
 * A component that scrolls to an element given a hash.
 */
export default function ScrollToElement(props: Props) {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView({
                behavior: props.smooth ? "smooth" : "instant",
            });
        }
    }, [pathname, hash, props.smooth]);

    return null;
}
