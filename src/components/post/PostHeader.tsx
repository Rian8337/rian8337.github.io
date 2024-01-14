import { ReactNode } from "react";
import Banner from "../banner/Banner";
import { BannerStyle } from "../../constants/banner/BannerStyle";
import { TextAlignment } from "../../constants/TextAlignment";
import { BannerContentAlignment } from "../../constants/banner/BannerContentAlignment";
import Head from "../Head";

interface Props {
    /**
     * The title of the post.
     */
    readonly title: ReactNode;

    /**
     * The website title to display in the post.
     */
    readonly websiteTitle: string;

    /**
     * The URL to the header image.
     */
    readonly imageUrl: string;

    /**
     * The epoch time at which the post was posted, in seconds.
     */
    readonly postTime: number;

    /**
     * The description of the post.
     */
    readonly description?: ReactNode;

    /**
     * The website description to display in the post.
     */
    readonly websiteDescription?: string;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    weekday: "short",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
});

/**
 * Represents the header of a post.
 */
export default function PostHeader(props: Props) {
    return (
        <>
            <Head title={`${props.websiteTitle} - Rian's Blog`} />

            <Banner
                style={BannerStyle.style3}
                imageUrl={props.imageUrl}
                textAlign={TextAlignment.center}
                contentAlignment={BannerContentAlignment.center}
            >
                <h1>{props.title}</h1>

                {props.description ? (
                    <p className="major">{props.description}</p>
                ) : null}

                <p>Posted in {dateFormatter.format(props.postTime * 1000)}</p>
            </Banner>
        </>
    );
}
