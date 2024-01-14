import { PropsWithChildren, forwardRef } from "react";
import { WrapperInnerSize } from "../../constants/wrapper/WrapperInnerSize";
import Inner from "../Inner";

interface Props {
    /**
     * The size of the component.
     */
    readonly size?: WrapperInnerSize;
}

/**
 * An `Inner` component specifically for use inside a `Wrapper`.
 *
 * Compared to the regular `Inner` component, this supports sizing.
 */
export default forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
    function WrapperInner(props, ref) {
        let className = "";

        switch (props.size) {
            case WrapperInnerSize.small:
                className = "small";
                break;
            case WrapperInnerSize.medium:
                className = "medium";
                break;
        }

        return (
            <Inner className={className} ref={ref}>
                {props.children}
            </Inner>
        );
    }
);
