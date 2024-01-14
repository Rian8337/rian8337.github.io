import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextAlignment } from "../constants/TextAlignment";
import { WrapperStyle } from "../constants/wrapper/WrapperStyle";
import Icons from "./Icons";
import Wrapper from "./wrapper/Wrapper";
import {
    faFacebook,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { PropsWithChildren } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconLinkProps {
    readonly link: string;
    readonly icon: IconProp;
}

function IconLink(props: PropsWithChildren<IconLinkProps>) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={props.icon} size="2x" />
        </a>
    );
}

/**
 * Represents the footer of the website.
 */
export default function Footer() {
    return (
        <Wrapper style={WrapperStyle.style2} textAlign={TextAlignment.center}>
            <footer>
                <Icons>
                    <IconLink
                        link="https://www.linkedin.com/in/reza-mouna-hendrian-80a09a281/"
                        icon={faLinkedin}
                    />
                    <IconLink
                        link="https://github.com/Rian8337"
                        icon={faGithub}
                    />
                    <IconLink
                        link="https://www.facebook.com/reza.hendrian"
                        icon={faFacebook}
                    />
                </Icons>

                <h5>&copy; 2024 Rian8337</h5>
            </footer>
        </Wrapper>
    );
}
