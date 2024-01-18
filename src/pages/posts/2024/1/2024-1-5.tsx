import NewTabLink from "../../../../components/NewTabLink";
import Gallery from "../../../../components/gallery/Gallery";
import UnorderedList from "../../../../components/list/UnorderedList";
import Post from "../../../../components/post/Post";
import { GalleryStyle } from "../../../../constants/gallery/GalleryStyle";
import { GalleryImage } from "../../../../structures/GalleryImage";

const baseImagePath = "images/posts/2024/1/5/";

const mainWorkplaceImages: GalleryImage[] = [
    {
        fullImageUrl: `${baseImagePath}utmdigital-workplace.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Workplace Overview",
        captionDescription: "An overview of the workplace.",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-workplace-table.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Working Table",
        captionDescription: "The place where workers work!",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-workplace-kitchen.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Kitchen",
        captionDescription: "Perfect for making little snacks and drinks!",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-workplace-meeting-room.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Meeting Room",
        captionDescription: "Primary meeting room in the office.",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-workplace-cube-room.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Cube",
        captionDescription:
            "A small meeting room intended for small meetings or quick brainstorming sessions.",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-workplace-game-space.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Game Space",
        captionDescription:
            "A section for workers to play games to relax temporarily.",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-workplace-storage-locker.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Storage Lockers",
        captionDescription:
            "Lockers for workers to store their items while working in the workplace.",
    },
] as const;

const digitalCareImages: GalleryImage[] = [
    {
        fullImageUrl: `${baseImagePath}utmdigital-care-front.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Lobby",
        captionDescription: "Lobby of UTMDigital care.",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-care-sangfor-room.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Sangfor Room",
        captionDescription: "A meeting room sponsored by Sangfor.",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-care-think-tank-room.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Think Tank",
        captionDescription: "A small meeting room.",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-care-ruckus-room.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Ruckus",
        captionDescription: "A small conference room.",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-care-aruba-room.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Aruba",
        captionDescription: "Another meeting room with a more relaxed aura.",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-care-juniper-networks-room.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "Juniper Networks Room",
        captionDescription:
            "Yet another meeting room, sponsored by Juniper Networks.",
    },
    {
        fullImageUrl: `${baseImagePath}utmdigital-care-tm-room.png`,
        get thumbnailImageUrl() {
            return this.fullImageUrl;
        },
        captionTitle: "TM Room",
        captionDescription:
            "A meeting and conferencing room sponsored by TM One.",
    },
] as const;

export default function Post2024_1_5() {
    const title = "A visit to UTMDigital";
    const description =
        "Visiting Universiti Teknologi Malaysia's pioneer towards a digital university.";

    return (
        <Post
            title={title}
            websiteTitle={title}
            description={description}
            websiteDescription={description}
            headerImageUrl={`${baseImagePath}utmdigital-front-lobby.jpg`}
            postTime={1705586767}
        >
            <section>
                <h2>Overview</h2>

                <p>
                    In my <a href="#/post/2024/1/4">last post</a>, I shared my
                    experience in a virtual talk about{" "}
                    <NewTabLink href="https://digital.utm.my/">
                        UTMDigital
                    </NewTabLink>
                    ,{" "}
                    <NewTabLink href="https://utm.my/">
                        Universiti Teknologi Malaysia
                    </NewTabLink>
                    &apos;s driver towards developing a digital university. I am
                    happy to inform you that in December 20, 2023, I had a
                    chance to visit the office in-place!
                </p>

                <p>
                    During the visit, I visited three places: the main
                    workplace, digital care office, and the data center.
                </p>
            </section>

            <section>
                <h2>Main Workplace</h2>

                <Gallery
                    style={GalleryStyle.style2}
                    lightbox
                    onscrollFadeIn
                    images={mainWorkplaceImages}
                />

                <p>
                    During visit, the workplace was under maintenance as the air
                    conditioners inside the room were not working. The workplace
                    was supposed to be comprised of a lot of devices, ranging
                    from Windows desktops and Macs to Android and iOS devices.
                    These devices help workers on building systems that work
                    across multiple platforms.
                </p>

                <p>
                    At the back of the workplace, there is a small kitchen that
                    workers can use to make drinks and little snacks. The
                    kitchen serves a place for workers to temporarily cool off
                    amidst the work they do. Apart from the kitchen, there is
                    also a game space.
                </p>

                <p>
                    There are two types of meeting rooms in the workplace. The
                    first room is the primary meeting room. The second one is a
                    small room called a &quot;cube&quot; that is intended for
                    small meetings or quick brainstorming sessions.
                </p>
            </section>

            <section>
                <h2>UTMDigital Care</h2>

                <Gallery
                    style={GalleryStyle.style2}
                    lightbox
                    onscrollFadeIn
                    images={digitalCareImages}
                />

                <p>
                    The UTMDigital care office is the help center of UTMDigital
                    for UTM citizens regarding digital systems. They help
                    troubleshoot problems and assign them to different levels of
                    priority. The office consists of multiple small rooms with a
                    variety of names:
                    <UnorderedList>
                        <>
                            <b>Sangfor Room</b>, a meeting room sponsored by
                            Sangfor.
                        </>
                        <>
                            <b>Think Tank</b>, a meeting room.
                        </>
                        <>
                            <b>Ruckus</b>, a conference room.
                        </>
                        <>
                            <b>Aruba</b>, another meeting room with a more
                            relaxed aura.
                        </>
                        <>
                            <b>Juniper Networks Room</b>, another meeting room,
                            sponsored by Juniper Networks.
                        </>
                        <>
                            <b>TM Room</b>, a meeting and conferencing room
                            sponsored by TM One.
                        </>
                    </UnorderedList>
                </p>
            </section>

            <section>
                <h2>Data Center</h2>

                <p>
                    We were not allowed to take pictures or videos in the data
                    center for security measures. The data center was monitored
                    24/7 using security cameras, and only authorized personnels
                    could come in. As for myself, I had to register an
                    attendance form to be able to enter the data center area.
                </p>

                <p>
                    Even though I could only look at the data center from behind
                    a glass window, it was big. The server room had so many
                    servers that they output so much heat. The ambient
                    temperature inside the room was as low as 16°C in order to
                    keep the servers cool.
                </p>

                <p>
                    The data center has been awarded the Certificate of
                    Conformance Constructed Facilities by ANSI, Rated 3.
                </p>
            </section>

            <section>
                <h2>Remarks</h2>

                <p>
                    UTMDigital was an amazing place. The personnels who work in
                    there were very helpful in guiding me throughout the visit.
                    The facilities were amazing too. The workplace was great,
                    and that is important for the well-being of workers. There
                    were a lot of rooms for workers to experience different
                    situations of work, and they can suit themselves with the
                    style that they want.
                </p>

                <p>
                    I have summarized my experience in UTMDigital with my
                    friends in a recorded video.
                </p>

                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Nk9kz5aw-Xs?si=w_aRYIwRWcVwoXBy"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </section>
        </Post>
    );
}
