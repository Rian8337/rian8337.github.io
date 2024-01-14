import { Helmet } from "react-helmet-async";

interface Props {
    /**
     * The title of the website.
     */
    readonly title?: string;

    /**
     * The description of the website.
     */
    readonly description?: string;
}

/**
 * Possesses the ability to manipulate the {@link HTMLHeadElement} of this website on fly.
 */
export default function Head(props: Props) {
    return (
        <Helmet>
            <meta
                name="description"
                content={props.description ?? "Rian's personal blog."}
            />
            <title>{props.title ?? "Rian's Blog"}</title>
        </Helmet>
    );
}
