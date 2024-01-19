import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A component that scrolls to the top-left of the screen whenever the current path changes.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        scrollTo(0, 0);
    }, [pathname]);

    return null;
}
