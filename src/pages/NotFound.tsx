import { useNavigate } from "react-router-dom";
import Wrapper from "../components/wrapper/Wrapper";
import { TextAlignment } from "../constants/TextAlignment";
import { WrapperStyle } from "../constants/wrapper/WrapperStyle";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Wrapper style={WrapperStyle.style1} textAlign={TextAlignment.center}>
            <h2>Page not found!</h2>

            <p
                onClick={() => {
                    navigate(-1);
                }}
                className="navigate-back"
            >
                &gt; Go back &lt;
            </p>
        </Wrapper>
    );
}
