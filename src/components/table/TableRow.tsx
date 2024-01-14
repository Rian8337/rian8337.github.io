import { ReactNode } from "react";

interface Props {
    /**
     * The columns to add to this table row.
     */
    readonly columns: ReactNode[];
}

/**
 * Represents a row of a table.
 */
export default function TableRow(props: Props) {
    return (
        <tr>
            {props.columns.map((column, i) => (
                <td key={i}>{column}</td>
            ))}
        </tr>
    );
}
