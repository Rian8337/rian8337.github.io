import { ReactNode } from "react";

/**
 * Represents an item inside a definition list.
 */
export interface DefinitionListItem {
    readonly title: ReactNode;
    readonly description: ReactNode;
}
