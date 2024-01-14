import { ReactNode } from "react";

/**
 * Represents an option in a select form field.
 */
export interface SelectFormFieldOption {
    readonly label: ReactNode;
    readonly value: string;
}
