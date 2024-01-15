import { ReactNode } from "react";
import { TextAlignment } from "../../constants/TextAlignment";
import { WrapperStyle } from "../../constants/wrapper/WrapperStyle";
import Table from "../table/Table";
import TableRow from "../table/TableRow";
import Wrapper from "../wrapper/Wrapper";
import { MonthNumber } from "../../structures/MonthNumber";
import TableBody from "../table/TableBody";
import { useNavigate } from "react-router-dom";

interface Props {
    /**
     * The year of the post history.
     */
    readonly year: number;

    /**
     * The month of the post history.
     */
    readonly month: MonthNumber;

    /**
     * The posts to display. The index of the posts are ordered descendingly.
     */
    readonly titles: ReactNode[];
}

/**
 * Represents a post history.
 */
export default function PostHistory(props: Props) {
    const navigate = useNavigate();
    let month = "";

    switch (props.month) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }

    return (
        <Wrapper style={WrapperStyle.style1} textAlign={TextAlignment.left}>
            <h3 className="align-center">
                {month} {props.year}
            </h3>

            <Table>
                <TableBody>
                    {props.titles.map((title, i) => (
                        <TableRow
                            key={i}
                            columns={[
                                <span
                                    key={props.titles.length - i}
                                    onClick={() => {
                                        navigate(
                                            `/post/${props.year}/${
                                                props.month
                                            }/${props.titles.length - i}`
                                        );
                                    }}
                                >
                                    {title}
                                </span>,
                            ]}
                        />
                    ))}
                </TableBody>
            </Table>
        </Wrapper>
    );
}
