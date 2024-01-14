import Wrapper from "../wrapper/Wrapper";
import { TextAlignment } from "../../constants/TextAlignment";
import { WrapperStyle } from "../../constants/wrapper/WrapperStyle";

export default function PostLoading() {
    return (
        <Wrapper style={WrapperStyle.style1} textAlign={TextAlignment.center}>
            <h1>Loading post...</h1>

            <p className="major">Please stand still!</p>
        </Wrapper>
    );
}
