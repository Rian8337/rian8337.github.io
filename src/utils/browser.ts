/**
 * Available detectable browser names.
 */
export type BrowserName =
    | "firefox"
    | "bb"
    | "opera"
    | "edge"
    | "safari"
    | "chrome"
    | "ie"
    | "other";

/**
 * Available detectable operating systems.
 */
export type BrowserOS =
    | "ios"
    | "wp"
    | "android"
    | "mac"
    | "windows"
    | "bb"
    | "linux"
    | "bsd"
    | "unix"
    | "other";

const browser = {
    /**
     * The name of the browser.
     */
    name: "other" as BrowserName,

    /**
     * The version of the browser.
     */
    version: 0,

    /**
     * The operating system that operates the browser.
     */
    os: "other" as BrowserOS,

    /**
     * The version of the operating system that operates the browser.
     */
    osVersion: 0,

    /**
     * Whether the device the browser is running on supports touch capabilities.
     */
    touch: false,

    /**
     * Whether the device the browser is running on is considered a mobile device.
     */
    mobile: false,

    /**
     * Checks whether a CSS style can be used in the currently running browser.
     *
     * @param style The CSS style to check.
     * @returns Whether the CSS style can be used in the currently running browser.
     */
    canUse(style: string) {
        const element = document.createElement("div");
        const cssStyle = style.charAt(0).toUpperCase() + style.slice(1);

        return (
            style in element.style ||
            "Moz" + cssStyle in element.style ||
            "Webkit" + cssStyle in element.style ||
            "O" + cssStyle in element.style ||
            "ms" + cssStyle in element.style
        );
    },
};

for (const e of [
    ["firefox", /Firefox\/([0-9.]+)/],
    ["bb", /BlackBerry.+Version\/([0-9.]+)/],
    ["bb", /BB[0-9]+.+Version\/([0-9.]+)/],
    ["opera", /OPR\/([0-9.]+)/],
    ["opera", /Opera\/([0-9.]+)/],
    ["edge", /Edge\/([0-9.]+)/],
    ["safari", /Version\/([0-9.]+).+Safari/],
    ["chrome", /Chrome\/([0-9.]+)/],
    ["ie", /MSIE ([0-9]+)/],
    ["ie", /Trident\/.+rv:([0-9]+)/],
] as const) {
    const match = navigator.userAgent.match(e[1]);

    if (match !== null && match.length > 0) {
        browser.name = e[0];
        browser.version = parseFloat(match[0]);
        break;
    }
}

for (const e of [
    [
        "ios",
        /([0-9_]+) like Mac OS X/,
        (e: string) => {
            return e.replace("_", ".").replace("_", "");
        },
    ],
    [
        "ios",
        /CPU like Mac OS X/,
        () => {
            return "0";
        },
    ],
    ["wp", /Windows Phone ([0-9.]+)/, null],
    ["android", /Android ([0-9.]+)/, null],
    [
        "mac",
        /Macintosh.+Mac OS X ([0-9_]+)/,
        (e: string) => {
            return e.replace("_", ".").replace("_", "");
        },
    ],
    ["windows", /Windows NT ([0-9.]+)/, null],
    ["bb", /BlackBerry.+Version\/([0-9.]+)/, null],
    ["bb", /BB[0-9]+.+Version\/([0-9.]+)/, null],
    ["linux", /Linux/, null],
    ["bsd", /BSD/, null],
    ["unix", /X11/, null],
] as const) {
    const match = navigator.userAgent.match(e[1]);

    if (match !== null && match.length > 0) {
        browser.os = e[0];
        browser.osVersion = parseFloat(e[2] ? e[2](match[0]) : match[0]);

        break;
    }
}

// Special handling for iOS.
if (
    browser.os === "mac" &&
    window.ontouchstart &&
    ((1024 == screen.width && 1366 == screen.height) ||
        (834 == screen.width && 1112 == screen.height) ||
        (810 == screen.width && 1080 == screen.height) ||
        (768 == screen.width && 1024 == screen.height))
) {
    browser.os = "ios";
}

browser.touch =
    browser.os === "wp" ? navigator.maxTouchPoints > 0 : !!window.ontouchstart;

browser.mobile =
    browser.os === "wp" ||
    browser.os === "android" ||
    browser.os === "ios" ||
    browser.os === "bb";

export default browser as Readonly<typeof browser>;
