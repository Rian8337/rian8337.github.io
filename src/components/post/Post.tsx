import { PropsWithChildren, ReactNode } from "react";
import { WrapperInnerSize } from "../../constants/wrapper/WrapperInnerSize";
import { WrapperStyle } from "../../constants/wrapper/WrapperStyle";
import Wrapper from "../wrapper/Wrapper";
import WrapperInner from "../wrapper/WrapperInner";
import PostHeader from "./PostHeader";

interface Props {
    /**
     * The title of this post.
     */
    readonly title: ReactNode;

    /**
     * The website title to display in this post.
     */
    readonly websiteTitle: string;

    /**
     * The URL to the header image of this post.
     */
    readonly headerImageUrl: string;

    /**
     * The epoch time at which this post was posted, in seconds.
     */
    readonly postTime: number;

    /**
     * The description of this post.
     */
    readonly description?: ReactNode;

    /**
     * The website description to display in this post.
     */
    readonly websiteDescription?: string;

    /**
     * The style of the wrapper that wraps this post. Defaults to `WrapperStyle.style1`.
     */
    readonly wrapperStyle?: WrapperStyle;

    /**
     * The size of the inner wrapper that wraps the content of this post. Defaults to `WrapperInnerSize.medium`.
     */
    readonly wrapperInnerSize?: WrapperInnerSize;
}

export default function Post(props: PropsWithChildren<Props>) {
    return (
        <Wrapper style={props.wrapperStyle ?? WrapperStyle.style1}>
            <PostHeader
                title={props.title}
                websiteTitle={props.websiteTitle}
                description={props.description}
                websiteDescription={props.websiteDescription}
                imageUrl={props.headerImageUrl}
                postTime={props.postTime}
            />

            <WrapperInner
                size={props.wrapperInnerSize ?? WrapperInnerSize.medium}
            >
                {props.children}
            </WrapperInner>
        </Wrapper>
    );
}
