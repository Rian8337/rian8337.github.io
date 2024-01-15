import Image from "../../../../components/Image";
import NewTabLink from "../../../../components/NewTabLink";
import OrderedList from "../../../../components/list/OrderedList";
import UnorderedList from "../../../../components/list/UnorderedList";
import Post from "../../../../components/post/Post";
import Table from "../../../../components/table/Table";
import TableBody from "../../../../components/table/TableBody";
import TableHeader from "../../../../components/table/TableHeader";
import TableRow from "../../../../components/table/TableRow";
import { ImageAlignment } from "../../../../constants/ImageAlignment";

export default function Post2024_1_4() {
    const title = "Virtual Talk";
    const description =
        "UTMDigital - Universiti Teknologi Malaysia's Digital University Driver";
    const baseImagePath = "images/posts/2024/1/4/";

    return (
        <Post
            title={title}
            websiteTitle={`${title}: ${description}`}
            description={description}
            websiteDescription={description}
            headerImageUrl={`${baseImagePath}poster.jpg`}
            postTime={1705338479}
        >
            <section>
                <h2>Overview</h2>

                <p>
                    In December 5, 2023, I attended a virtual talk about{" "}
                    <NewTabLink href="https://digital.utm.my/">
                        UTMDigital
                    </NewTabLink>
                    . UTMDigital is{" "}
                    <NewTabLink href="https://www.utm.my">
                        Universiti Teknologi Malaysia (UTM)
                    </NewTabLink>
                    &apos;s driver towards developing a digital university. It
                    plays an important role at managing digital facilities that
                    are available across all UTM branches (Johor Bahru, Kuala
                    Lumpur, and Pagoh).
                </p>
            </section>

            <section>
                <h2>Speakers</h2>

                <p>
                    The talk involved six sessions, where a representative
                    shared their experience in working in UTMDigital. These
                    sessions were the following:
                </p>

                <Table>
                    <TableHeader columns={["Topic", "Speaker", "Division"]} />

                    <TableBody>
                        <TableRow
                            columns={[
                                "Service by UTMDigital",
                                "Ms. Aslinda binti Mohamed Aris",
                                <NewTabLink
                                    key={0}
                                    href="https://digital.utm.my/division-of-digital-architecture/"
                                >
                                    Digital Architecture
                                </NewTabLink>,
                            ]}
                        />
                        <TableRow
                            columns={[
                                "Digital Infrastructure of UTMDigital",
                                "Ts. Mr. Mohammed bin Mohd Hasni",
                                "Digital Architecture",
                            ]}
                        />
                        <TableRow
                            columns={[
                                "UTM Network",
                                "Mr. Mohd Hamri bin Yusuf and Ts. Mr. Khairul Nizam bin Md Razali",
                                "Digital Architecture",
                            ]}
                        />
                        <TableRow
                            columns={[
                                "ICT Security Management at UTMDigital",
                                "Mr. Noor Haslan bin Sallehudin",
                                <NewTabLink
                                    key={3}
                                    href="https://digital.utm.my/division-of-digital-strategy/"
                                >
                                    Digital Strategy
                                </NewTabLink>,
                            ]}
                        />
                        <TableRow
                            columns={[
                                "Project Management and System Development in UTM",
                                "Mr. Helmee bin Yaacob",
                                <NewTabLink
                                    key={4}
                                    href="https://digital.utm.my/division-of-digital-innovation/"
                                >
                                    Digital Innovation
                                </NewTabLink>,
                            ]}
                        />
                        <TableRow
                            columns={[
                                "Issue of System Development",
                                "Mr. Helmee bin Yaacob",
                                "Digital Innovation",
                            ]}
                        />
                    </TableBody>
                </Table>
            </section>

            <section>
                <h2>Ms. Aslinda: Service by UTMDigital</h2>

                <p>
                    The vision of the department of digital services in
                    UTMDigital is to strengthen academia-centric service
                    delivery through a data-driven digital ecosystem. To achieve
                    this, UTMDigital has three core operation functions:
                    <OrderedList>
                        <span>
                            It develops and implement new features and upgrade
                            existing applications that cover the core business
                            of the university
                        </span>
                        <span>
                            Ensures that Information and Communication
                            Technology (ICT) infrastructure is always available
                            to support the application platform developed
                        </span>
                        <span>
                            Supports the implementation of digital lifestyles
                            through development of the latest innovation
                            technology
                        </span>
                    </OrderedList>
                    In essence, UTMDigital is the digital university driver that
                    plays a role in empowering the delivery of ICT services by
                    adapting the use of the latest technology so that UTM staff
                    and students can experience and enjoy digital lifestyle with
                    high-performance delivery.
                </p>

                <h3>ICT Services for Students</h3>

                <p>
                    UTMDigital provides numerous services for students, such as:
                    <OrderedList>
                        <span>UTMID</span>
                        <span>Official Email Account</span>
                        <span>UTM Systems - Student Portal and UTMSmart</span>
                        <span>UTM Licensed Software</span>
                        <span>Microsoft 365</span>
                        <span>Network</span>
                        <span>ICT Policy</span>
                        <span>Other information</span>
                    </OrderedList>
                </p>

                <h4>UTMID</h4>

                <p>
                    UTMID is a unique identification (ID) assigned to a user to
                    authenticate a user before accessing UTM network and ICT
                    applications and services including UTMWiFi, MyUTM portal,
                    and UTMSmart. It is only available for registered students.
                    It is also used as an official email ID for students in the
                    form of <code>{`{utmid}`}@graduate.utm.my</code>. This email
                    is managed by Google, which means each student gets
                    additional features such as Gmail, Google Drive (15 GB),
                    Photos, Calendar, Meet, and more.
                </p>

                <h4>MyUTM portal</h4>

                <p>
                    MyUTM portal is the central of student activities in UTM. It
                    is used by students to edit identity information, register
                    for courses, pay fees such as tuition and hostel, access
                    digital care, and more. The portal supports Single-Sign On
                    (SSO), meaning students only need to login once to use all
                    applications offered in the portal.
                </p>

                <h4>UTMSmart</h4>

                <p>
                    UTMSmart is a handy version of MyUTM portal that is
                    available as an installable application in Android and iOS
                    devices. It comprises most applications from MyUTM portal as
                    well as some additional features such as a QR scanner for
                    recording attendance in lectures. As of the talk, UTMSmart
                    was in version 5.2.
                </p>

                <h4>UTM licensed software</h4>

                <p>
                    UTM works with various companies to provide licensed
                    software for students, such as:
                    <UnorderedList>
                        <span>Mathematica</span>
                        <span>NVIVO 2022</span>
                        <span>Microsoft 365</span>
                        <span>IBM SPSS Statistics</span>
                        <span>Matlab</span>
                        <span>EndNote</span>
                    </UnorderedList>
                    These applications can be accessed from MyUTM portal in
                    Software Center.
                </p>

                <h4>Microsoft 365</h4>

                <p>
                    Students get a free Microsoft 365 Education subscription. It
                    consisted of Word, PowerPoint, Excel, OneDrive (1 TB),
                    Microsoft Teams, and more, including Windows Education
                    edition. To access these features, students can go to the{" "}
                    <NewTabLink href="https://www.office.com/">
                        Microsoft Office
                    </NewTabLink>{" "}
                    website and login with their UTM live account (the format is{" "}
                    <code>{`{utmid}`}@live.utm.my</code>).
                </p>

                <h4>UTM Network</h4>

                <p>
                    Connecting to the UTM network can be done by connecting with
                    a wired connection or through UTMWiFi. An authentication
                    page will pop up to allow the user to login with their
                    UTMID. Connecting via these methods also allow access to UTM
                    intranet.
                </p>

                <h4>UTM Virtual Private Network (VPN)</h4>

                <p>
                    UTM provides a VPN service for students who wish to access
                    UTM intranet services from outside UTM using{" "}
                    <NewTabLink href="https://www.sangfor.com/cybersecurity/products/easyconnect">
                        EasyConnect
                    </NewTabLink>
                    . They can go to the{" "}
                    <NewTabLink href="https://vpn.utm.my">UTM VPN</NewTabLink>{" "}
                    website to authenticate themselves.
                </p>

                <h4>ICT Policies</h4>

                <p>
                    In using ICT services, students are subjected to a few
                    policies:
                    <UnorderedList>
                        <span>
                            They are responsible for their ID and password
                            (UTMID/email/others)
                        </span>
                        <span>
                            Their devices must be free of spyware, adware,
                            viruses, and worms before connecting to any UTM
                            network
                        </span>
                        <span>
                            They cannot use the services for any of the
                            following:
                            <li>Personal commercial use</li>
                            <li>
                                Dissemination and access to pornographic and
                                political materials
                            </li>
                            <li>
                                Hacking, network scanning, phishing, and data
                                decrypting
                            </li>
                            <li>Pirating software</li>
                            <li>
                                Gambling applications, gator, hotbar, searchbar,
                                cracked games, etc.
                            </li>
                            <li>Any unethical affairs</li>
                        </span>
                    </UnorderedList>
                </p>

                <h3>Live Services</h3>

                <p>
                    The department of digital services provide assistance in
                    issues related to:
                    <UnorderedList>
                        <span>
                            UTMID and email accounts (
                            <code>@graduate.utm.my</code> and{" "}
                            <code>@live.utm.my</code>)
                        </span>
                        <span>
                            Login and access problems to university systems
                        </span>
                        <span>Systems technical problems</span>
                        <span>
                            Questions about UTM ICT services and features
                        </span>
                        <span>
                            User manual for installing university licensed
                            software
                        </span>
                        <span>Connecting to UTMWiFi</span>
                    </UnorderedList>
                    However, they do not provide assistance for the following
                    issues:
                    <UnorderedList>
                        <span>Installing university licensed software</span>
                        <span>
                            Troubleshoot any problems encountered in university
                            licensed software
                        </span>
                        <span>
                            Hardware, operating system (OS), and software
                            support for personal devices such as computers,
                            laptops, or smartphones
                        </span>
                        <span>Issues associated with system flow or data</span>
                        <span>Resetting UTMID password</span>
                    </UnorderedList>
                </p>
            </section>

            <section>
                <h2>Ts. Mr. Mohammed: Digital Infrastructure of UTMDigital</h2>

                <p>
                    The digital infrastructure of UTMDigital must be designed in
                    a way that it supports the whole university, which consists
                    of:
                    <UnorderedList>
                        <span>
                            26,507 undergraduate and postgraduate students
                        </span>
                        <span>3,773 master students</span>
                        <span>4,974 Ph.D students</span>
                        <span>5,389 international students</span>
                        <span>4,821 staff members</span>
                        <span>1,592 academicians</span>
                        <span>1,464 Ph.D academicians</span>
                        <span>3,229 professional and support staff</span>
                        <span>
                            202,803 alumni from 98 countries, with 9,250 of them
                            being international alumni and all alumni having 98%
                            graduate employability
                        </span>
                    </UnorderedList>
                </p>

                <h3>UTM Data Center</h3>

                <p>
                    The UTM data center was rebuilt in 2019. It is powered by 2
                    generator sets that provides 72 hours of power backup should
                    the primary electricity supply goes unavailable. It consists
                    of 40 racks, boasting 228 physical server units with 1680 u
                    size. 523 u size have been used, so there are 1157 u size
                    available. It uses multiple platforms (Windows, Unix) and
                    multiple architectures (Sparc, Intel, and AMD). It is
                    monitored 24x7 with the help of a firewall.
                </p>

                <p>
                    The data center is equipped with 12Gbps of internet
                    bandwidth and 40Gb data center network. Its virtual server
                    has 12 units of ESX hosts and 702 units of VM nodes,
                    amassing a 1.04 THz CPU, 15 TB of RAM, and 350 TB of
                    storage. The primary storage of the data center has a size
                    of 2 PB with hybrid storage system SCSI and SSD. 1.5 PB is
                    used for files and attachments, while the remaining 500 TB
                    is used for backup and data recovery.
                </p>

                <p>
                    The data center uses Oracle and MySQL as its database
                    management system. The database has a capacity of 40 TB and
                    4 TB of data size. It uses enterprise storage (SSD) and
                    cluster setup.
                </p>

                <p>
                    The data center has been awarded the Certificate of
                    Conformance Constructed Facilities by ANSI, Rated 3.
                </p>

                <p>
                    The data center provides a multitude of services for UTM
                    personnels, namely:
                    <UnorderedList>
                        <span>Virtual Private Servers (VPS)</span>
                        <span>Cloud Services</span>
                        <span>Co-location</span>
                        <span>UTM Private File Sharing Service</span>
                        <span>Google Workspace for Education</span>
                        <span>Online VC Facilities</span>
                        <span>Research Data Repository</span>
                        <span>Research Data Management</span>
                        <span>UTM Data Warehouse</span>
                        <span>eContent for micro credential program</span>
                        <span>eProctoring support for exams/quizzes</span>
                        <span>Online VC Facilities for TNL</span>
                    </UnorderedList>
                </p>
            </section>

            <section>
                <h2>Mr. Mohd Hamri and Ts. Mr. Khairul: UTM Network</h2>

                <p>
                    The UTM network is the most important part of UTMDigital
                    that connects the whole of UTM together.
                </p>

                <h3>Overview of UTM Network</h3>

                <Image
                    src={`${baseImagePath}utm-network-diagram-1.png`}
                    alignment={ImageAlignment.fit}
                />

                <p>
                    The UTM network architecture is comprised by 4 units of
                    network rooms that act as core switches across UTM Johor
                    Bahru and Kuala Lumpur, 40+ units of distribution switches
                    across faculties and schools, and 1200+ units of access
                    switches.
                    <br />A network room has a 10Gbps uplink port and 1Gbps of
                    downlink port. A distribution switch supports 1Gbps of both
                    uplink and downlink port. An access switch supports 1Gbps of
                    uplink port and 100Mbps of downlink port.
                </p>

                <Image
                    src={`${baseImagePath}utm-network-diagram-2.png`}
                    alignment={ImageAlignment.fit}
                />

                <p>
                    The UTM network uses various types of connections. From the
                    data center (core switches) to distribution switches and
                    from distribution switches to access switches, the network
                    uses a single mode fiber cable. Users connect with UTP
                    cables or wireless to access switches. However, since one
                    access switch is used by multiple users, a user will not get
                    the full 1Gbps uplink.
                </p>

                <h3>UTMWiFi Service</h3>

                <Image
                    src={`${baseImagePath}utm-wifi-infrastructure-devices.png`}
                    alignment={ImageAlignment.fit}
                />

                <p>
                    The UTMWiFi infrastructure encompasses 6 core switches that
                    are connected to 32 distribution switches. These
                    distribution switches are connected to 1300 access switches
                    that give 2800 access points. Around 300 of those access
                    points are in UTM Kuala Lumpur. It also uses 80
                    point-to-point bridges, which are used in buildings that do
                    not have many cabling infrastructure, such as UTP or fiber
                    cable.
                </p>

                <p>
                    This infrastructure supports many projects that are running
                    in UTM, such as:
                    <UnorderedList>
                        <span>Internet</span>
                        <span>Intranet</span>
                        <span>CCTV</span>
                        <span>Face Recognition</span>
                        <span>LED Billboard</span>
                        <span>Network Devices</span>
                        <span>Voice over Internet Protocol (VoIP)</span>
                        <span>Internet of Things (IoT)</span>
                    </UnorderedList>
                </p>

                <Image
                    src={`${baseImagePath}utm-wifi-coverage.png`}
                    alignment={ImageAlignment.fit}
                />

                <p>
                    UTMWiFi covers 100% of UTM&apos;s area, including but not
                    limited to service buildings, student hostels, faculties and
                    schools, and more. However, in some locations, especially in
                    student hostels, the signal can be weak. This is planned to
                    be improved in the future.
                </p>

                <Image
                    src={`${baseImagePath}utm-wifi-bandwidth-growth.png`}
                    alignment={ImageAlignment.fit}
                />

                <p>
                    UTMWiFi started in 2017 as a project that was managed by
                    YTL, a third party provider. Back then, the bandwidth was
                    limited to 1Mbps. A year later, a proposal was forwarded to
                    allow UTM to manage their own WiFi service. This proposal
                    was approved, and the bandwidth was increased to 10Mbps. As
                    the service matures, the bandwidth limit was slowly
                    increased, and was eventually lifted in 2021.
                </p>
            </section>

            <section>
                <h2>Mr. Noor Haslan: ICT Security Management at UTMDigital</h2>

                <p>
                    The security of UTMDigital is extremely important to ensure
                    that unauthorized access to UTM&apos;s digital systems can
                    be avoided. They work together with Cyber Command to ensure
                    maximum security across UTM&apos;s digital systems.
                </p>

                <h3>Security Equipment Infrastructure</h3>

                <Image
                    src={`${baseImagePath}utm-digital-security-equipment.png`}
                    alignment={ImageAlignment.fit}
                />

                <h3>User Management</h3>

                <p>
                    The security system tracks the activity and bandwidth of
                    users inside the UTM network. The system logs every activity
                    of every user, which allows security personnels to see the
                    user who were trying to access a certain resource.
                    Additionally, the bandwidth usage of every user is also
                    recorded. This allows the system to reduce a user&apos;s
                    bandwidth should they use too much bandwidth. The system
                    also has an anti-proxy monitoring system that allows
                    security personnels to identify and block Virtual Private
                    Network (VPN) applications/websites.
                </p>

                <h3>Internet Security</h3>

                <p>
                    The security system has an intrusion prevention system that
                    is able to detect and protect any attack attempt from
                    outside into the internal UTM network. It also has an
                    anti-DDoS (
                    <NewTabLink href="https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/">
                        Distributed Denial of Service
                    </NewTabLink>
                    ) system that prevents DDoS attacks.
                </p>
            </section>

            <section>
                <h2>
                    Mr. Helmee bin Yaacob: Project Management and System
                    Development in UTM
                </h2>

                <Image
                    src={`${baseImagePath}utm-maintained-projects.png`}
                    alignment={ImageAlignment.fit}
                />

                <p>
                    UTM has a lot of projects that are hosted in house. The
                    image above displays some of them.
                </p>

                <Image
                    src={`${baseImagePath}project-miscommunication-overview.png`}
                    alignment={ImageAlignment.fit}
                />

                <p>
                    Observe the image above. The system analyst must be able to
                    consider the requirements of the customer and forward them
                    to designers, programmers, and marketers to avoid
                    miscommunication from happening.
                </p>

                <h3>Project Management Categories</h3>

                <p>
                    According to Mr. Helmee, there are two project management
                    categories. The first category is predictive (or in other
                    words: traditional, conventional, or waterfall), where the
                    scope of work and requirements of a project are clearly
                    defined. This means the upfront planning can be justified in
                    a detailed manner. The second category is adaptive, where
                    the scope of work and requirements of a project are
                    difficult to define. This creates a rapidly changing
                    environment as requirements are defined in short iterations,
                    thus requiring an agile approach (also known as the scrum
                    method).
                </p>

                <Image
                    src={`${baseImagePath}project-management-iteration.png`}
                    alignment={ImageAlignment.fit}
                />

                <p>
                    The image above describes the progress of a project using
                    both management methods. We can see that the waterfall
                    method produces a bad product as requirements are not
                    clearly defined from the beginning. This means the project
                    gradually adds requirements as time goes on, making the
                    finished product not polished as the early stages do not
                    take late stages into account. Consequently, in the scrum
                    method, all requirements are defined in the beginning. This
                    makes project planning more convenient and organized, making
                    the final product polished.
                </p>

                <Image
                    src={`${baseImagePath}agile-scrum-framework-overview.png`}
                    alignment={ImageAlignment.fit}
                />

                <p>
                    UTMDigital uses the agile scrum framework to manage
                    projects.
                </p>
            </section>

            <section>
                <h2>Remarks</h2>

                <p>
                    This virtual talk introduced many aspects of UTMDigital that
                    exist to support UTM with many digital systems. From UTMID
                    to security measurements, they become the primary driver of
                    UTM towards being a digital university.
                </p>

                <p>
                    I have built systems before (see the projects section in my
                    homepage for more details!), but they are definitely not as
                    big and not as advanced as what UTMDigital has achieved. The
                    presentations opened my mind towards how advanced a system
                    can go, especially in the context of UTMDigital, where the
                    system needs to support all operations inside the
                    university.
                </p>

                <p>
                    Massive thank you to UTMDigital personnels for spending
                    their time to share insights about how UTMDigital manages to
                    support the university with digital systems!
                </p>
            </section>
        </Post>
    );
}
