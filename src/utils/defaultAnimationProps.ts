import { AnimationProps } from "framer-motion";

/**
 * The default properties for animations.
 */
export default {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.35 },
} satisfies AnimationProps;
