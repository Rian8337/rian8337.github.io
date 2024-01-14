import { ReactNode } from "react";

interface Props {
    /**
     * How many columns should this table footer spans.
     */
    readonly colSpan?: number;

    /**
     * How many rows should this table footer spans.
     */
    readonly rowSpan?: number;

    /**
     * The component to put inside this table footer.
     */
    readonly value: ReactNode;
}

/**
 * Represents the footer of a table.
 */
export default function TableFooter(props: Props) {
    return (
        <tfoot>
            <tr>
                <td colSpan={props.colSpan} rowSpan={props.rowSpan}></td>
                <td>{props.value}</td>
            </tr>
        </tfoot>
    );
}
