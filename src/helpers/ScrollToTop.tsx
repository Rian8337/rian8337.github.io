import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A component that scrolls to the top-left of the screen whenever the current path changes,
 * given that no hash path is provided.
 */
export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
