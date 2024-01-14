import { TextAlignment } from "../constants/TextAlignment";
import { WrapperBackgroundColor } from "../constants/wrapper/WrapperBackgroundColor";
import { WrapperStyle } from "../constants/wrapper/WrapperStyle";
import Wrapper from "./wrapper/Wrapper";

/**
 * Represents the header of the website.
 */
export default function Header() {
    return (
        <Wrapper
            style={WrapperStyle.style1}
            textAlign={TextAlignment.center}
            backgroundColor={WrapperBackgroundColor.color2}
        >
            <header>
                <h1>Rian&apos;s Blog</h1>

                <p>Sharing my journey throughout the world.</p>
            </header>
        </Wrapper>
    );
}
