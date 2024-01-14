import { FunctionComponent, Suspense, lazy } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import WrapperInner from "../components/wrapper/WrapperInner";
import { TextAlignment } from "../constants/TextAlignment";
import { WrapperStyle } from "../constants/wrapper/WrapperStyle";
import NotFound from "./NotFound";
import PostHistoryLoading from "../components/post/PostHistoryLoading";
import { WrapperInnerSize } from "../constants/wrapper/WrapperInnerSize";
import Head from "../components/Head";

const lazyLoadHistory = (year: number, month: number) =>
    lazy(async () => {
        try {
            const importedPost = (await import(
                `./posts/${year}/${month}/PostHistory${year}-${month}.tsx`
            )) as { default: FunctionComponent };

            return importedPost;
        } catch {
            return { default: NotFound };
        }
    });

const History20241 = lazyLoadHistory(2024, 1);

export default function PostList() {
    return (
        <>
            <Head
                title="Posts - Rian's Blog"
                description="A history of posts that Rian has made so far."
            />

            <Wrapper
                style={WrapperStyle.style1}
                textAlign={TextAlignment.center}
            >
                <WrapperInner size={WrapperInnerSize.small}>
                    <h2>Posts</h2>

                    <p>A history of posts that I have made so far.</p>

                    <Suspense fallback={<PostHistoryLoading />}>
                        <History20241 />
                    </Suspense>
                </WrapperInner>
            </Wrapper>
        </>
    );
}
