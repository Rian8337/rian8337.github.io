import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

/**
 * Represents an item in an items section.
 */
export interface Item {
    readonly title: ReactNode;
    readonly description: ReactNode;
    readonly faIcon?: IconProp;
}
