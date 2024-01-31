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
import scrollex from "../utils/scrollex";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
    faGamepad,
    faLineChart,
    faPencil,
    faToolbox,
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
            <NewTabLink href="https://github.com/Rian8337/osu-droid-module">
                osu!droid module
            </NewTabLink>
        ),
        description: (
            <p>
                A collection of modules for osu!droid and osu!(standard). It
                contains a core package that interops between osu!droid and
                osu!(standard), a difficulty calculator for osu!droid and
                osu!(standard), an osu!droid replay analyzer, osu!droid-related
                utilities, and a difficulty strain graph generator. This is
                where the calculation algorithm of Elaina PP Project is hosted.
            </p>
        ),
        faIcon: faToolbox,
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
                    Hello! I am Rian. Currently studying in Malaysia, I maintain
                    a couple of projects as a side interest. Come take a look at
                    my journey so far!
                </p>
            </Banner>

            <Spotlight
                style={SpotlightStyle.style1}
                imageUrl="images/posts/2024/1/8/regular-website.gif"
                orientation={SpotlightOrientation.right}
                contentAlignment={SpotlightContentAlignment.left}
                imagePosition={SpotlightImagePosition.center}
                onscrollImage={SpotlightOnscrollImage.fadeIn}
            >
                <h2>Design Thinking - Practicing Design in Building Systems</h2>
                <p>
                    In January 17, 2024, I collaborated with my friends to
                    practice creating a low-fidelity prototype for systems. Here
                    is our design and what I have learned!
                </p>

                <Actions
                    stacked
                    actions={[
                        <Button
                            key={0}
                            label="Read more"
                            onClick={() => {
                                navigate("/post/2024/1/8");
                            }}
                        />,
                    ]}
                />
            </Spotlight>

            <Spotlight
                style={SpotlightStyle.style1}
                imageUrl="images/posts/2024/1/7/opened-desktop.jpg"
                orientation={SpotlightOrientation.left}
                contentAlignment={SpotlightContentAlignment.left}
                imagePosition={SpotlightImagePosition.center}
                onscrollImage={SpotlightOnscrollImage.fadeIn}
            >
                <h2>Assembling a PC</h2>
                <p>
                    In December 6, 2023, I had a chance to assembly a PC. Here
                    is a summary of what I did and learned!
                </p>

                <Actions
                    stacked
                    actions={[
                        <Button
                            key={0}
                            label="Read more"
                            onClick={() => {
                                navigate("/post/2024/1/7");
                            }}
                        />,
                    ]}
                />
            </Spotlight>

            <Spotlight
                style={SpotlightStyle.style1}
                imageUrl="images/posts/2024/1/6/poster.jpg"
                orientation={SpotlightOrientation.right}
                contentAlignment={SpotlightContentAlignment.left}
                imagePosition={SpotlightImagePosition.center}
                onscrollImage={SpotlightOnscrollImage.fadeIn}
            >
                <h2>System Development @ Credence (TM Subsidiary)</h2>
                <p>
                    In December 28, 2023, I attended an industrial talk about
                    system development in{" "}
                    <NewTabLink href="https://credence.tech/">
                        Credence
                    </NewTabLink>
                    , a <NewTabLink href="https://tm.com.my">TM</NewTabLink>{" "}
                    subsidiary. Here is a summary of what I learned!
                </p>

                <Actions
                    stacked
                    actions={[
                        <Button
                            key={0}
                            label="Read more"
                            onClick={() => {
                                navigate("/post/2024/1/6");
                            }}
                        />,
                    ]}
                />
            </Spotlight>

            <Spotlight
                style={SpotlightStyle.style1}
                imageUrl="images/posts/2024/1/5/utmdigital-front-lobby.jpg"
                orientation={SpotlightOrientation.left}
                contentAlignment={SpotlightContentAlignment.left}
                imagePosition={SpotlightImagePosition.center}
                onscrollImage={SpotlightOnscrollImage.fadeIn}
            >
                <h2>
                    A visit to UTMDigital - Universiti Teknologi Malaysia&apos;s
                    Digital University Driver
                </h2>
                <p>
                    In December 20, 2023, I visited{" "}
                    <NewTabLink href="https://digital.utm.my/">
                        UTMDigital
                    </NewTabLink>
                    ,{" "}
                    <NewTabLink href="https://www.utm.my">
                        Universiti Teknologi Malaysia
                    </NewTabLink>
                    &apos;s primary driver towards a digital university. Here is
                    a summary of what I learned!
                </p>

                <Actions
                    stacked
                    actions={[
                        <Button
                            key={0}
                            label="Read more"
                            onClick={() => {
                                navigate("/post/2024/1/5");
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
                    <h2>Looking for more posts?</h2>

                    <p>Check out my post history!</p>

                    <Actions
                        stacked
                        fit
                        actions={[
                            <Button
                                key={0}
                                primary
                                label="Post history"
                                onClick={() => {
                                    navigate("/posts");
                                }}
                            />,
                        ]}
                    />
                </WrapperInner>
            </Wrapper>

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
