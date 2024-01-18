/**
 * Available modes of scrollex.
 */
export enum ScrollexMode {
    /**
     * Element's contact area must fall within the viewport.
     */
    default,

    /**
     * Top viewport edge must fall within element's contact area.
     */
    top,

    /**
     * Midpoint between top/bottom viewport edges must fall within element's contact area.
     */
    middle,

    /**
     * Bottom viewport edge must fall within element's contact area.
     */
    bottom,

    /**
     * Top viewport edge must be visible.
     */
    topOnly,

    /**
     * Bottom viewport edge must be visible.
     */
    bottomOnly,
}

type ScrollexTest = (
    vTop: number,
    vMiddle: number,
    vBottom: number,
    eTop: number,
    eBottom: number
) => boolean;

type ScrollexHandler = (vTop: number) => unknown;

export interface ScrollexOptions {
    readonly top?: string | number;
    readonly bottom?: string | number;
    readonly delay?: number;
    readonly mode?: ScrollexMode;
    readonly onEnter?: () => unknown;
    readonly onLeave?: () => unknown;
    readonly onInitialize?: () => unknown;
    readonly onTerminate?: () => unknown;
    readonly onScroll?: (num: number) => unknown;
}

interface ScrollexQueue {
    readonly id: string;
    readonly options: ScrollexOptions;
    readonly test: ScrollexTest;
    readonly handler: ScrollexHandler;
    state?: boolean;
    readonly element: HTMLElement;
    timeoutId?: number;
}

const queues = new Map<string, ScrollexQueue>();
const scrollexId = "scrollexId";
let idCounter = 1;

/**
 * Resolves a top/bottom value, optionally relative to an element's height
 * or the window height.
 *
 * @param x Value.
 * @param eHeight Element height.
 * @param vHeight Viewport (window) height.
 * @returns Resolved value.
 */
function resolve(x: string | number, eHeight: number, vHeight: number) {
    if (typeof x === "string") {
        if (x.endsWith("%")) {
            // Percentage? Relative to element height.
            return (parseInt(x.substring(0, x.length - 1)) / 100.0) * eHeight;
        } else if (x.endsWith("vh")) {
            // vh? Relative to viewport height.
            return (parseInt(x.substring(0, x.length - 2)) / 100.0) * vHeight;
        } else if (x.endsWith("px")) {
            // px? Redundant but okay!
            return parseInt(x.substring(0, x.length - 2));
        }

        return parseInt(x);
    }

    return x;
}

// Window events.
function onScroll() {
    // Get vTop.
    const scrollY = window.scrollY;

    // Step through handler queue.
    for (const queue of queues.values()) {
        // Clear existing timeout.
        clearTimeout(queue.timeoutId);

        // Call handler after timeout delay.
        queue.timeoutId = setTimeout(() => {
            queue.handler(scrollY);
        }, queue.options.delay);
    }
}

/**
 * Slick scroll events to drop scrolling effects like a boss.
 */
export default {
    /**
     * Initializes scrollex.
     */
    init() {
        addEventListener("scroll", onScroll);

        // Trigger the event once to load existing items.
        onScroll();
    },

    /**
     * Disposes scrollex.
     */
    dispose() {
        removeEventListener("scroll", onScroll);
    },

    /**
     * Registers an element for scrollex.
     *
     * @param element The element to register.
     * @param options Register options.
     * @returns The ID of the scrollex register. Can be used in the `unregister` method to unregister the element from scrollex.
     */
    register(element: HTMLElement, options: ScrollexOptions) {
        // Already scrollexed? Bail.
        if (element.dataset[scrollexId]) {
            return element.dataset[scrollexId];
        }

        // Build queue object.
        // Test.
        let test: ScrollexTest;

        switch (options.mode) {
            case ScrollexMode.top:
                test = (vTop, _vMiddle, _vBottom, eTop, eBottom) =>
                    vTop >= eTop && vTop <= eBottom;
                break;
            case ScrollexMode.bottom:
                test = (_vTop, _vMiddle, vBottom, eTop, eBottom) =>
                    vBottom >= eTop && vBottom <= eBottom;
                break;
            case ScrollexMode.middle:
                test = (_vTop, vMiddle, _vBottom, eTop, eBottom) =>
                    vMiddle >= eTop && vMiddle <= eBottom;
                break;
            case ScrollexMode.topOnly:
                test = (vTop, _vMiddle, vBottom, eTop) =>
                    vTop <= eTop && eTop <= vBottom;
                break;
            case ScrollexMode.bottomOnly:
                test = (vTop, _vMiddle, vBottom, _eTop, eBottom) =>
                    vBottom >= eBottom && eBottom >= vTop;
                break;
            default:
                test = (vTop, _vMiddle, vBottom, eTop, eBottom) =>
                    vBottom >= eTop && vTop <= eBottom;
        }

        const queue: ScrollexQueue = {
            id: (idCounter++).toString(),
            options: options,
            test: test,
            handler(vTop) {
                // Viewport values.
                const vHeight = innerHeight;
                const vMiddle = vTop + vHeight / 2;
                const vBottom = vTop + vHeight;

                // Element values.
                const eHeight = this.element.offsetHeight;
                const eTop =
                    this.element.offsetTop +
                    resolve(this.options.top ?? 0, eHeight, vHeight);
                const eBottom =
                    this.element.offsetTop +
                    eHeight -
                    resolve(this.options.bottom ?? 0, eHeight, vHeight);

                // Determine if there's been a state change.
                const newState = this.test(
                    vTop,
                    vMiddle,
                    vBottom,
                    eTop,
                    eBottom
                );

                if (newState !== this.state) {
                    // Update state.
                    this.state = newState;

                    // Call appropriate function.
                    if (newState) {
                        this.options.onEnter?.();
                    } else {
                        this.options.onLeave?.();
                    }
                }

                // Call scroll function.
                this.options.onScroll?.((vMiddle - eTop) / (eBottom - eTop));
            },
            element: element,
        };

        // Add object to queue.
        queues.set(queue.id, queue);

        // Add scrollex ID to element.
        element.dataset[scrollexId] = queue.id;

        // Call initialize.
        options.onInitialize?.();

        // Call handler once to check if the element has actually entered the area without scrolling.
        queue.handler(scrollY);

        return queue.id;
    },

    /**
     * Unregisters an element from scrollex.
     *
     * @param id The ID of the scrollex handler.
     */
    unregister(id: string) {
        const queue = queues.get(id);
        if (!queue) {
            return;
        }

        // Clear timeout.
        clearTimeout(queue.timeoutId);

        // Remove object from queue.
        queues.delete(id);

        // Remove scrollex ID from element.
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete queue.element.dataset[scrollexId];

        // Call terminate.
        queue.options.onTerminate?.();
    },
} as const;
