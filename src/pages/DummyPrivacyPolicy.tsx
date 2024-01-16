import { useNavigate } from "react-router-dom";
import Actions from "../components/Actions";
import Button from "../components/Button";
import Wrapper from "../components/wrapper/Wrapper";
import WrapperInner from "../components/wrapper/WrapperInner";
import { WrapperInnerSize } from "../constants/wrapper/WrapperInnerSize";
import { WrapperStyle } from "../constants/wrapper/WrapperStyle";
import UnorderedList from "../components/list/UnorderedList";

export default function DummyPrivacyPolicy() {
    const navigate = useNavigate();

    return (
        <Wrapper style={WrapperStyle.style1}>
            <WrapperInner size={WrapperInnerSize.medium}>
                <h1 className="align-center">Privacy Policy</h1>

                <p>
                    We collect certain information when you use the platform.
                    This includes information you provide to us, information we
                    collect automatically, and information we receive from other
                    sources.
                </p>

                <h2>Information you provide to us</h2>

                <UnorderedList>
                    <span>
                        <b>Account information</b>. When you create a Discord
                        account, you can come up with a username and password,
                        and provide a way of contacting you (such as an email
                        address and/or phone number). You&apos;ll also need to
                        provide your birthday. In some cases, you may be
                        required to verify your account or provide additional
                        information (like a verified phone number) to your
                        account. You may also have the option to add your name
                        or nicknames.
                    </span>
                    <span>
                        <b>Content you create</b>. This includes any content
                        that you upload to the service. For example, you may
                        write messages or posts (including drafts), send voice
                        messages, create custom emojis, create short recordings
                        of GoLive activity, or upload and share files through
                        the services. This also includes your profile
                        information and the information you provide when you
                        create servers. We generally do not store the contents
                        of video or voice calls or channels. If we were to
                        change that in the future (for example, to facilitate
                        content moderation), we would disclose that to you in
                        advance. We also don&apos;t store streaming content when
                        you share your screen, but we do retain the thumbnail
                        cover image for the stream for a short period of time.
                        We may build features that help users engage with voice
                        and video content, like create or send short recordings.
                    </span>
                    <span>
                        <b>Information used to enable optional features</b>.
                        Certain features, like contact syncing, may require that
                        you provide additional information (or grant us access
                        to such information) to make them work. This also
                        includes third-party integrations you choose to enable
                        and the data you authorize those third-party services to
                        share with us. For example, when you link a music
                        streaming account, we may collect information about that
                        account such as the song you are listening to in order
                        to display that information on your profile or as your
                        status (if you have chosen to do so).
                    </span>
                    <span>
                        <b>Other information you provide directly to us</b>. You
                        may have the option to submit additional information as
                        you use the platform. For example, you may choose to
                        participate in our early subscriber program, which
                        requires that you provide additional information about
                        yourself or your company. Or, you may participate in
                        surveys where you can provide feedback on the services,
                        or submit information to our support teams.
                    </span>
                </UnorderedList>

                <h2>Information we collect automatically</h2>

                <p>
                    We also collect information automatically from you when you
                    use the platform. This includes:
                    <UnorderedList>
                        <span>
                            <b>Information about your device</b>. We collect
                            information about the device you are using to access
                            the services. For example, this includes information
                            like your IP address, operating system information,
                            browser information, and information about your
                            device settings, such as your microphone and/or
                            camera.
                        </span>
                        <span>
                            <b>
                                Information about your use of the apps or
                                websites
                            </b>
                            . For example, we collect log and event information
                            related to how and when you use our services (such
                            as the pages you visit, the activities you engage
                            in, or the embedded content you interact with).
                        </span>
                        <span>
                            <b>
                                Other information that we collect automatically
                            </b>
                            . When you take certain actions on other sites, we
                            may receive information about you. For example, when
                            we advertise for our platform on third party
                            platforms, if you click on the ad, we may receive
                            information about which ad you saw and on which
                            platform. Similarly, we may also receive certain
                            information when you click on a referral link, such
                            as which website you came from.
                        </span>
                    </UnorderedList>
                </p>

                <p>
                    We may receive information from cookies (small text files
                    placed on your computer or device) and similar technologies.
                    First-party cookies are placed by us (and our third-party
                    service providers) and allow you to use the services and to
                    help us analyze and improve your experience and the
                    services. The services use the following types of cookies:
                    <UnorderedList>
                        <span>
                            <b>Strictly Necessary Cookies</b>: These are
                            required for services to function and to meet our
                            legal obligations. If you try to use tools to
                            disable these cookies, parts of the services may not
                            work properly.
                        </span>
                        <span>
                            <b>Functional Cookies</b>: These help us provide
                            enhanced functionality on the services like
                            remembering language preferences. Disabling these
                            could affect some service functionality.
                        </span>
                        <span>
                            <b>Performance Cookies</b>: These allow us or our
                            third-party analytics providers to learn how you and
                            others use and engage with the services so we can
                            understand and improve them.
                        </span>
                    </UnorderedList>
                </p>

                <Actions
                    fit
                    actions={[
                        <Button
                            key={0}
                            label="Agree"
                            primary
                            onClick={(e) => {
                                e.preventDefault();

                                scrollTo({ top: 0 });

                                navigate("/");
                            }}
                        />,
                        <Button
                            key={1}
                            label="Disagree"
                            onClick={(e) => {
                                e.preventDefault();

                                scrollTo({ top: 0 });

                                navigate("/login");
                            }}
                        />,
                    ]}
                />
            </WrapperInner>
        </Wrapper>
    );
}
