import NewTabLink from "../../../../components/NewTabLink";
import Post from "../../../../components/post/Post";

export default function Post2024_1_2() {
    const title = "A visit to NALI 2023 in Universiti Teknologi Malaysia";
    const description =
        "Reflection about a visit to NALI 2023 in Universiti Teknologi Malaysia";

    return (
        <Post
            title={title}
            websiteTitle={title}
            headerImageUrl="/images/posts/2024/1/2/poster.png"
            postTime={Date.now() / 1000}
            description={description}
            websiteDescription={description}
        >
            <p>
                In November 7, 2023, I visited an event called New Academica
                Learning Innovation (NALI) 2023 that took place in Dewan Sultan
                Iskandar, Universiti Teknologi Malaysia (UTM), Johor Bahru.
            </p>

            <p>
                From{" "}
                <NewTabLink href="https://utmcdex.utm.my/nali2023/?fbclid=IwAR0daIegUOusXt58-sJ8Z2nd2vi1FHPyAj5i-BVApGBc31KvaLyMAQs_Nv4">
                    NALI&apos;s website
                </NewTabLink>
                , NALI is an annual knowledge sharing event organized by UTM
                through Center for Advancement in Digital and Flexible Learning
                (UTM CDex). It promotes innovative teaching and learning
                practices in education.
            </p>

            <p>
                NALI 2023 focused in resilience education for future-oriented
                quality graduates. Resilience refers to an individual&apos;s
                ability to bounce back from difficult situations, adopt to
                changes, and cope with stress and adversity. Resilience
                education teaches skills and strategies to develop resilience,
                such as problem-solving, positive thinking, emotional
                regulation, social skills, and coping mechanisms.
            </p>

            <p>
                During the visit, I saw a lot of promotions regarding different
                topics. However, in this visit particularly, I focused on
                posters related to Information and Communication Technology
                (ICT). One poster that piqued my curiosity was about the usage
                of robots in a real-time software engineering course.
            </p>

            <p>
                The objective of using robots in a real-time software
                engineering course is to identify the programming resilience of
                students for a problem-based task to perform timing analysis on
                robot software. Given the difficulty of the problem and the time
                to solve it, students will develop programming resilience and
                benefit from competition-based learning.
            </p>

            <p>
                Developing programming resilience improves problem solving
                skills. Students will be able to solve problems quicker and will
                be able to move quickly from one problem to another. Another
                field where this skill is useful in competitive programming,
                where participants are asked to solve a set of problems as fast
                as possible without submitting too many faulty program (either
                cannot be compiled or produces the wrong output).
            </p>

            <p>
                From visiting the 2023 iteration of NALI, I learned that having
                resilience is important as you will encounter many problems in
                real life and I will have to quickly adapt into difficult
                situations. Developing such skill early on allows me to be
                prepared for what is to come.
            </p>
        </Post>
    );
}
