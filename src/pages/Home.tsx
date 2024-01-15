import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Actions from "../components/Actions";
import Button from "../components/Button";
import Banner from "../components/banner/Banner";
import Items from "../components/items/Items";
import Spotlight from "../components/spotlight/Spotlight";
import Wrapper from "../components/wrapper/Wrapper";
import WrapperInner from "../components/wrapper/WrapperInner";
import { TextAlignment } from "../constants/TextAlignment";
import { BannerContentAlignment } from "../constants/banner/BannerContentAlignment";
import { BannerImagePosition } from "../constants/banner/BannerImagePosition";
import { BannerOnloadContent } from "../constants/banner/BannerOnloadContent";
import { BannerOnloadImage } from "../constants/banner/BannerOnloadImage";
import { BannerOrientation } from "../constants/banner/BannerOrientation";
import { BannerStyle } from "../constants/banner/BannerStyle";
import { ItemsSize } from "../constants/items/ItemsSize";
import { ItemsStyle } from "../constants/items/ItemsStyle";
import { SpotlightContentAlignment } from "../constants/spotlight/SpotlightContentAlignment";
import { SpotlightImagePosition } from "../constants/spotlight/SpotlightImagePosition";
import { SpotlightOnscrollImage } from "../constants/spotlight/SpotlightOnscrollImage";
import { SpotlightOrientation } from "../constants/spotlight/SpotlightOrientation";
import { SpotlightStyle } from "../constants/spotlight/SpotlightStyle";
import { WrapperStyle } from "../constants/wrapper/WrapperStyle";
import breakpoints from "../utils/breakpoints";
import scrollex from "../utils/scrollex";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
    faGamepad,
    faLineChart,
    faPencil,
    faTv,
    faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { Item } from "../structures/Item";
import NewTabLink from "../components/NewTabLink";
import Head from "../components/Head";

const projectItems: Item[] = [
    {
        title: <NewTabLink href="https://osudroid.moe">osu!droid</NewTabLink>,
        description: (
            <p>
                A free-to-win rhythm game for Android devices based on the
                rhythm game{" "}
                <NewTabLink href="https://osu.ppy.sh">osu!</NewTabLink>.
            </p>
        ),
        faIcon: faGamepad,
    },
    {
        title: (
            <NewTabLink href="https://github.com/Rian8337/Alice">
                Alice
            </NewTabLink>
        ),
        description: (
            <p>
                A Discord bot focused on osu!droid and its international{" "}
                <NewTabLink href="https://discord.gg/nyD92cE">
                    Discord server
                </NewTabLink>
                .
            </p>
        ),
        faIcon: faDiscord,
    },
    {
        title: (
            <NewTabLink href="https://droidpp.osudroid.moe">
                Elaina PP Project
            </NewTabLink>
        ),
        description: (
            <p>
                A project that measures the difficulty of a beatmap inside
                osu!droid and the grade of performance of its scores. This
                project is hosted inside the Discord server.
            </p>
        ),
        faIcon: faLineChart,
    },
    {
        title: (
            <NewTabLink href="https://droidpp.osudroid.moe/spectator">
                osu!droid Spectator Client
            </NewTabLink>
        ),
        description: (
            <p>
                A website for spectating a multiplayer game in osu!droid using a
                custom game client. Its source code can be accessed{" "}
                <a
                    href="https://github.com/Rian8337/osu-droid-spectator"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
                .
            </p>
        ),
        faIcon: faTv,
    },
    {
        title: (
            <NewTabLink href="https://rian8337.github.io/skin-json-editor/">
                osu!droid <code>skin.json</code> editor
            </NewTabLink>
        ),
        description: (
            <p>
                A tool for creating and editing <code>skin.json</code> files
                that are used by skins in osu!droid. Its source code can be
                accessed{" "}
                <NewTabLink href="https://github.com/Rian8337/skin-json-editor">
                    here
                </NewTabLink>
                .
            </p>
        ),
        faIcon: faPencil,
    },
    {
        title: (
            <NewTabLink href="https://github.com/Rian8337/SECJ1023-Project">
                Dummy Inventory Management System
            </NewTabLink>
        ),
        description: (
            <p>
                A small inventory management system. I created this project to
                explore more about C++.
            </p>
        ),
        faIcon: faWarehouse,
    },
];

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        // Breakpoints.
        breakpoints.init({
            xlarge: ["1281px", "1680px"],
            large: ["981px", "1280px"],
            medium: ["737px", "980px"],
            small: ["481px", "736px"],
            xsmall: ["361px", "480px"],
            xxsmall: [null, "360px"],
        });

        // Play initial animations on page load.
        const preloadTimeout = setTimeout(() => {
            document.body.classList.remove("is-preload");
        }, 100);

        // Scrollex initialization.
        scrollex.init();

        // Register wrapper div for scrollex.
        const wrapper = document.getElementById("wrapper");
        const scrollexIds: string[] = [];

        if (wrapper !== null) {
            for (const children of wrapper.children) {
                if (children instanceof HTMLElement) {
                    const id = scrollex.register(children, {
                        top: "30vh",
                        bottom: "30vh",
                        onInitialize() {
                            children.classList.add("is-inactive");
                        },
                        onTerminate() {
                            children.classList.remove("is-inactive");
                        },
                        onEnter() {
                            children.classList.remove("is-inactive");
                        },
                        onLeave() {
                            if (
                                children.classList.contains(
                                    "onscroll-bidirectional"
                                )
                            ) {
                                children.classList.add("is-inactive");
                            }
                        },
                    });

                    scrollexIds.push(id);
                }
            }
        }

        return () => {
            for (const id of scrollexIds) {
                scrollex.unregister(id);
            }

            breakpoints.dispose();
            scrollex.dispose();

            clearTimeout(preloadTimeout);
        };
    }, []);

    return (
        <>
            <Head
                title="Home - Rian's Blog"
                description="The homepage of Rian's blog."
            />

            <Banner
                style={BannerStyle.style1}
                imageUrl="images/header.jpg"
                orientation={BannerOrientation.left}
                contentAlignment={BannerContentAlignment.left}
                imagePosition={BannerImagePosition.right}
                onloadImage={BannerOnloadImage.fadeIn}
                onloadContent={BannerOnloadContent.fadeRight}
                fullscreen
            >
                <h1>About Me</h1>

                <p className="major">
                    Hello! I am Rian. Currently studying at Malaysia, I maintain
                    a couple of projects as a side interest. Come take a look at
                    my journey so far!
                </p>
            </Banner>

            <Spotlight
                style={SpotlightStyle.style1}
                imageUrl="images/posts/2024/1/3/poster.png"
                orientation={SpotlightOrientation.right}
                contentAlignment={SpotlightContentAlignment.left}
                imagePosition={SpotlightImagePosition.center}
                onscrollImage={SpotlightOnscrollImage.fadeIn}
            >
                <h2>Overview of ICT Jobs in Clarity Techworks</h2>
                <p>
                    In November 14, 2023, I attended an industrial talk that
                    talked about various ICT jobs at{" "}
                    <NewTabLink href="https://www.claritytech.sg/">
                        Clarity Techworks
                    </NewTabLink>
                    . Here is a summary of what I learned!
                </p>

                <Actions
                    stacked
                    actions={[
                        <Button
                            key={0}
                            label="Read more"
                            onClick={() => {
                                navigate("/post/2024/1/3");
                            }}
                        />,
                    ]}
                />
            </Spotlight>

            <Spotlight
                style={SpotlightStyle.style1}
                imageUrl="images/posts/2024/1/2/poster.png"
                orientation={SpotlightOrientation.left}
                contentAlignment={SpotlightContentAlignment.left}
                imagePosition={SpotlightImagePosition.center}
                onscrollImage={SpotlightOnscrollImage.fadeIn}
            >
                <h2>A visit to NALI 2023 in Universiti Teknologi Malaysia</h2>
                <p>
                    I visited the NALI 2023 event in{" "}
                    <NewTabLink href="https://www.utm.my">
                        Universiti Teknologi Malaysia
                    </NewTabLink>{" "}
                    at Johor Bahru! Here is the summary and my thoughts.
                </p>

                <Actions
                    stacked
                    actions={[
                        <Button
                            key={0}
                            label="Read more"
                            onClick={() => {
                                navigate("/post/2024/1/2");
                            }}
                        />,
                    ]}
                />
            </Spotlight>

            <Spotlight
                style={SpotlightStyle.style2}
                imageUrl="images/posts/2024/1/1/myself.jpg"
                orientation={SpotlightOrientation.right}
                contentAlignment={SpotlightContentAlignment.left}
                imagePosition={SpotlightImagePosition.center}
                onscrollImage={SpotlightOnscrollImage.fadeIn}
            >
                <h2>First Post!</h2>
                <p>My first post ever in this website!</p>

                <Actions
                    stacked
                    actions={[
                        <Button
                            key={0}
                            label="Read more"
                            onClick={() => {
                                navigate("/post/2024/1/1");
                            }}
                        />,
                    ]}
                />
            </Spotlight>

            <Wrapper
                style={WrapperStyle.style1}
                textAlign={TextAlignment.center}
            >
                <WrapperInner>
                    <h2>Projects</h2>
                    <p>
                        I create and maintain a couple of projects as a side
                        interest. Take a look at some of them!
                    </p>

                    <Items
                        style={ItemsStyle.style1}
                        size={ItemsSize.medium}
                        onscrollFadeIn
                        items={projectItems}
                    />
                </WrapperInner>
            </Wrapper>
        </>
    );
}
