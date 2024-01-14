import { ReactNode } from "react";

interface Props {
    /**
     * The columns to add to this table header.
     */
    readonly columns: ReactNode[];
}

/**
 * Represents the header of a table.
 */
export default function TableHeader(props: Props) {
    return (
        <thead>
            <tr>
                {props.columns.map((column, i) => (
                    <th key={i}>{column}</th>
                ))}
            </tr>
        </thead>
    );
}
