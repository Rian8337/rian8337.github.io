import Gallery from "../../../../components/gallery/Gallery";
import Post from "../../../../components/post/Post";
import { GalleryStyle } from "../../../../constants/gallery/GalleryStyle";
import { GalleryImage } from "../../../../structures/GalleryImage";
import NewTabLink from "../../../../components/NewTabLink";

const title = "Design Thinking";
const description = "Practicing design in building systems";
const baseImagePath = "images/posts/2024/1/8/";

const prototypeGalleryImages: GalleryImage[] = [
    {
        fullImageUrl: `${baseImagePath}regular-website.gif`,
        captionTitle: "Regular Website Header",
        captionDescription: "The header of the website.",
    },
    {
        fullImageUrl: `${baseImagePath}accessibility-context-menu.gif`,
        captionTitle: "Accessibility Context Menu",
        captionDescription:
            "Context menu accessible by right-clicking on the website.",
    },
    {
        fullImageUrl: `${baseImagePath}dyslexia-font.gif`,
        captionTitle: "Dyslexia Font",
        captionDescription: "Website header with dyslexia font enabled.",
    },
    {
        fullImageUrl: `${baseImagePath}big-font-size.gif`,
        captionTitle: "Big Font Size",
        captionDescription: "Website header with a big font size.",
    },
    {
        fullImageUrl: `${baseImagePath}small-font-size.gif`,
        captionTitle: "Small Font Size",
        captionDescription: "Website header with a small font size.",
    },
    {
        fullImageUrl: `${baseImagePath}reduced-motion.gif`,
        captionTitle: "Reduced Motion",
        captionDescription:
            "Website header with reduced motion. Notice that the animated arrow disappeared.",
    },
    {
        fullImageUrl: `${baseImagePath}text-to-speech-speech-recognition.gif`,
        captionTitle: "Text-to-Speech and Speech Recognition",
        captionDescription:
            "Two bubbles that pop up upon hovering on a text. The first button is text-to-speech, while the second button is speech recognition.",
    },
] as const;

export default function Post2024_1_8() {
    return (
        <Post
            title={title}
            websiteTitle={`${title} - ${description}`}
            description={description}
            websiteDescription={description}
            headerImageUrl={`${baseImagePath}regular-website.gif`}
            postTime={Date.now() / 1000}
        >
            <section>
                <h2>Overview</h2>

                <p>
                    In January 17, 2024, I gathered with my friends to practice
                    creating a low-fidelity prototype for systems.
                </p>

                <p>
                    A low-fidelity prototype is a simple and early design
                    concept of a system. Compared to higher design stages, there
                    is no form of simulation that reflects what the user will
                    see. This design stage is useful so that system analysts can
                    get an early opinion from users about their system&apos;s
                    design and not waste any time in designing parts of the
                    system that the user do not want or will not use.
                </p>
            </section>

            <section>
                <h2>Our Case Study</h2>

                <p>
                    Since we were just practicing, our case study was simple. We
                    came up with a case where some websites have poor
                    accessibility features. Some users of the world wide web
                    have disabilities. Unfortunately, some websites do not have
                    features that can assist disabled people, making it tougher
                    for them to use such websites.
                </p>

                <p>
                    We wanted to solve this problem by introducing features that
                    can assist disabled people, such as dyslexia font,
                    text-to-speech, speech recognition, various font sizes, and
                    reduced motion.
                </p>
            </section>

            <section>
                <h2>Low-Fidelity Prototype</h2>

                <p>
                    Our low-fidelity prototype was simple. We created the header
                    of a website&apos;s homepage as it was enough to showcase
                    all accessibility features that we offer. Feel free to
                    scroll through the gallery for the prototype.
                </p>

                <Gallery
                    style={GalleryStyle.style2}
                    lightbox
                    onloadFadeIn
                    images={prototypeGalleryImages}
                />
            </section>

            <section>
                <h2>Remarks</h2>

                <p>
                    I have designed multiple systems before. However, this
                    design thinking activity was fun. I was able to work with my
                    friends to come up with a design. It was not exactly the
                    design that I typically work on, but being able to
                    collaborate with friends was such a fresh air.
                </p>

                <p>
                    We have summarized our work in a report that can be viewed{" "}
                    <NewTabLink href="/documents/posts/2024/1/8/Design Thinking Report.pdf">
                        here
                    </NewTabLink>
                    .
                </p>
            </section>
        </Post>
    );
}
