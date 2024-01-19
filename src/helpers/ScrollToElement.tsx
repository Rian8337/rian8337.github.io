import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A component that scrolls to an element given a hash.
 */
export default function ScrollToElement() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView();
        }
    }, [pathname, hash]);

    return null;
}
