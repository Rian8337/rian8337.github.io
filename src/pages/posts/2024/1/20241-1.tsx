import Wrapper from "../../../../components/wrapper/Wrapper";
import PostHeader from "../../../../components/post/PostHeader";
import WrapperInner from "../../../../components/wrapper/WrapperInner";
import { WrapperStyle } from "../../../../constants/wrapper/WrapperStyle";
import NewTabLink from "../../../../components/NewTabLink";
import { WrapperInnerSize } from "../../../../constants/wrapper/WrapperInnerSize";

export default function Post202401_1() {
    const baseImagePath = `/images/posts/2024/1/1/`;

    return (
        <Wrapper style={WrapperStyle.style1}>
            <PostHeader
                title="First Post!"
                websiteTitle="First Post!"
                description="My first post!"
                websiteDescription="Rian's first post!"
                imageUrl={`${baseImagePath}myself.jpg`}
                postTime={1705224583}
            />

            <WrapperInner size={WrapperInnerSize.medium}>
                <p>
                    I have finally finished this website! It is a combination of
                    the{" "}
                    <NewTabLink href="https://html5up.net/story">
                        Story
                    </NewTabLink>{" "}
                    website template along with some features that I added by
                    myself. It took around 40 hours of development to port the
                    template that uses HTML and jQuery into React and
                    TypeScript.
                </p>

                <p>
                    During porting, I applied the existing React knowledge that
                    I have from building the{" "}
                    <NewTabLink href="https://droidpp.osudroid.moe">
                        droid pp website
                    </NewTabLink>
                    , along with additional techniques such as lazy loading via{" "}
                    <NewTabLink href="https://react.dev/reference/react/lazy">
                        <code>React.lazy</code>
                    </NewTabLink>{" "}
                    and the{" "}
                    <NewTabLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading">
                        <code>loading</code>
                    </NewTabLink>{" "}
                    attribute of the <code>img</code> element, as well as adding
                    icons from{" "}
                    <NewTabLink href="https://fontawesome.com/">
                        font awesome
                    </NewTabLink>
                    . In the process, I also discovered more features of the
                    template that were not documented, which were added into
                    their corresponding React components.
                </p>

                <p>
                    Porting the template over to React and TypeScript allowed me
                    to streamline the process of using the template. In
                    addition, it allowed me to easily add new features to the
                    website, such as a drawer for navigating the website, a post
                    history page, as well as making the process of adding new
                    posts easier. Overall, I am satisfied with the result.
                </p>

                <p>
                    A huge thanks to{" "}
                    <NewTabLink href="https://github.com/ajlkn">
                        ajlkn
                    </NewTabLink>{" "}
                    for making their website template public and free to use and
                    copy via the MIT license! In case anyone is curious of the
                    source code of this website, I have made it public{" "}
                    <NewTabLink href="https://github.com/Rian8337/rian8337.github.io">
                        here
                    </NewTabLink>
                    .
                </p>
            </WrapperInner>
        </Wrapper>
    );
}
