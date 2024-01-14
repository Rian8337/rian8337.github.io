import { PropsWithChildren, forwardRef } from "react";
import { BaseProps } from "../structures/BaseProps";
import { processProps } from "../utils/util";

interface Props extends BaseProps {
    /**
     * The class name to append to this inner component class name.
     */
    readonly className?: string;
}

/**
 * Wraps the children of this component inside a `div` with `inner` class.
 */
export default forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
    function Inner(props, ref) {
        const className = processProps(props.className ?? "", props);

        return (
            <div className={`inner ${className}`.trimEnd()} ref={ref}>
                {props.children}
            </div>
        );
    }
);
