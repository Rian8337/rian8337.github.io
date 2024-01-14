import { TextAlignment } from "../../constants/TextAlignment";
import { WrapperStyle } from "../../constants/wrapper/WrapperStyle";
import Wrapper from "../wrapper/Wrapper";

export default function PostHistoryLoading() {
    return (
        <Wrapper style={WrapperStyle.style1} textAlign={TextAlignment.center}>
            <h2>Loading table...</h2>
        </Wrapper>
    );
}
