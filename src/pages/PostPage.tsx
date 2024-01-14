import { FunctionComponent, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import PostLoading from "../components/post/PostLoading";

export default function PostPage() {
    const { year, month, index } = useParams();

    if (!year || !month || !index) {
        return <NotFound />;
    }

    const ActualPost = lazy(async () => {
        try {
            const importedPost = (await import(
                `./posts/${parseInt(year)}/${parseInt(month)}/${parseInt(
                    year
                )}-${parseInt(month)}-${parseInt(index)}.tsx`
            )) as { default: FunctionComponent };

            return importedPost;
        } catch {
            return { default: NotFound };
        }
    });

    return (
        <Suspense fallback={<PostLoading />}>
            <ActualPost />
        </Suspense>
    );
}
