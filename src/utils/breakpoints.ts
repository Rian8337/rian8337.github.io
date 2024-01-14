/**
 * Represents a breakpoint in a CSS string or `[width, height]` array.
 */
export type Breakpoint = string | [string | null, string | null];

/**
 * Represents the handler to fire upon the activation of the event.
 */
export type BreakpointEventHandler = () => unknown;

/**
 * Represents an event that will be fired when a breakpoint is active.
 */
export interface BreakpointEvent {
    /**
     * The handler to fire upon the activation of the event.
     */
    readonly handler: BreakpointEventHandler;

    /**
     * Whether the handler is active.
     */
    isActive: boolean;
}

type Comparison = "gte" | "lte" | "gt" | "lt" | "not" | "eq";

/**
 * Manager of breakpoints.
 *
 * A breakpoint represents a screen size at which an action will be fired upon screen resize or orientation change.
 */
const breakpoints = {
    /**
     * List of breakpoints.
     */
    list: new Map<string, Breakpoint>(),

    /**
     * The medias that this event has.
     */
    media: new Map<string, string | null>(),

    /**
     * The events to fire based on the query.
     */
    events: new Map<string, BreakpointEvent[]>(),

    /**
     * The polling function that has its `this` object bound.
     */
    boundPoll: null as (() => void) | null,

    /**
     * Initialize breakpoints with a set of breakpoints.
     *
     * @param breakpoints The breakpoints.
     */
    init(breakpoints: Record<string, Breakpoint>) {
        this.list.clear();

        for (const [key, value] of Object.entries(breakpoints)) {
            this.list.set(key, value);
        }

        this.boundPoll ??= this.poll.bind(this);

        addEventListener("resize", this.boundPoll);
        addEventListener("orientationchange", this.boundPoll);
        addEventListener("load", this.boundPoll);
        addEventListener("fullscreenchange", this.boundPoll);
    },

    /**
     * Disposes the currently set breakpoints.
     */
    dispose() {
        if (this.boundPoll === null) {
            return;
        }

        removeEventListener("resize", this.boundPoll);
        removeEventListener("orientationchange", this.boundPoll);
        removeEventListener("load", this.boundPoll);
        removeEventListener("fullscreenchange", this.boundPoll);

        this.boundPoll = null;

        this.list.clear();
    },

    /**
     * Checks whether a media is active.
     *
     * @param e The name of the media.
     * @returns Whether the media is active.
     */
    active(e: string) {
        if (!this.media.has(e)) {
            // Normalize comparison.
            let comparison: Comparison = "eq";
            let size = "";

            switch (e.substring(0, 2)) {
                case ">=":
                    comparison = "gte";
                    size = e.substring(2);
                    break;
                case "<=":
                    comparison = "lte";
                    size = e.substring(2);
                    break;
                default:
                    switch (e.charAt(0)) {
                        case ">":
                            comparison = "gt";
                            e.substring(1);
                            break;
                        case "<":
                            comparison = "lt";
                            e.substring(1);
                            break;
                        case "!":
                            comparison = "not";
                            size = e.substring(1);
                            break;
                        default:
                            comparison = "eq";
                            size = e;
                    }
            }

            const breakpoint = this.list.get(size);
            if (breakpoint === undefined) {
                return false;
            }

            let cssStr = "";

            if (Array.isArray(breakpoint)) {
                const widthDimension =
                    breakpoint[0] !== null
                        ? parseInt(breakpoint[0])
                        : Number.NaN;
                const heightDimension =
                    breakpoint[1] !== null
                        ? parseInt(breakpoint[1])
                        : Number.NaN;
                let unit = "";

                if (Number.isNaN(widthDimension)) {
                    if (Number.isNaN(heightDimension)) {
                        return false;
                    }

                    unit =
                        breakpoint[1]?.substring(
                            0,
                            String(heightDimension).length + 1
                        ) ?? "";
                } else {
                    unit =
                        breakpoint[0]?.substring(
                            0,
                            String(widthDimension).length + 1
                        ) ?? "";
                }

                if (Number.isNaN(widthDimension)) {
                    switch (comparison) {
                        case "gte":
                            cssStr = "screen";
                            break;
                        case "lte":
                        case "eq":
                            cssStr = `screen and (max-width: ${heightDimension}${unit})`;
                            break;
                        case "gt":
                        case "not":
                            cssStr = `screen and (min-width: ${
                                heightDimension + 1
                            }${unit})`;
                            break;
                        case "lt":
                            cssStr = `screen and (max-width: -1px)`;
                            break;
                    }
                } else if (Number.isNaN(heightDimension)) {
                    switch (comparison) {
                        case "gte":
                        case "eq":
                            cssStr = `screen and (min-width: ${widthDimension}${unit})`;
                            break;
                        case "lte":
                            cssStr = "screen";
                            break;
                        case "gt":
                            cssStr = "screen and (max-width: -1px)";
                            break;
                        case "lt":
                        case "not":
                            cssStr = `screen and (max-width: ${
                                widthDimension - 1
                            }${unit})`;
                            break;
                    }
                } else {
                    switch (comparison) {
                        case "gte":
                            cssStr = `screen and (min-width: ${widthDimension}${unit})`;
                            break;
                        case "lte":
                            cssStr = `screen and (max-width: ${heightDimension}${unit})`;
                            break;
                        case "gt":
                            cssStr = `screen and (min-width: ${
                                heightDimension + 1
                            }${unit})`;
                            break;
                        case "lt":
                            cssStr = `screen and (max-width: ${
                                widthDimension - 1
                            }${unit})`;
                            break;
                        case "not":
                            cssStr = `screen and (max-width: ${
                                widthDimension - 1
                            }${unit}), screen and (min-width: ${
                                heightDimension + 1
                            }${unit})`;
                            break;
                        case "eq":
                            cssStr = `screen and (min-width: ${widthDimension}${unit}) and (max-width: ${heightDimension}${unit})`;
                            break;
                    }
                }
            } else {
                cssStr = breakpoint.startsWith("(")
                    ? `screen and ${breakpoint}`
                    : breakpoint;
            }

            this.media.set(e, cssStr || null);
        }

        const media = this.media.get(e);

        return typeof media === "string" && matchMedia(media).matches;
    },

    /**
     * Registers an event.
     *
     * @param eventName The name of the event.
     * @param eventHandler The handler of the event.
     */
    on(eventName: string, eventHandler: BreakpointEventHandler) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const events = this.events.get(eventName)!;

        events.push({
            handler: eventHandler,
            isActive: false,
        });
    },

    /**
     * Registers an event that will be fired once.
     *
     * @param eventName The name of the event.
     * @param eventHandler The handler of the event.
     */
    once(eventName: string, eventHandler: BreakpointEventHandler) {
        const onceHandler: BreakpointEventHandler = () => {
            eventHandler();

            this.off(eventName, onceHandler);
        };

        this.on(eventName, onceHandler);
    },

    /**
     * Unregisters an event.
     *
     * @param eventName The name of the event.
     * @param eventHandler The handler of the event. If omitted, all event handlers of the event will be unregistered.
     */
    off(eventName: string, eventHandler?: BreakpointEventHandler) {
        if (!eventHandler) {
            this.events.delete(eventName);

            return;
        }

        const events = this.events.get(eventName);
        if (events === undefined) {
            return;
        }

        for (let i = 0; i < events.length; ++i) {
            const event = events[i];

            if (event.handler === eventHandler) {
                events.splice(i, 1);

                break;
            }
        }

        if (events.length === 0) {
            this.events.delete(eventName);
        }
    },

    /**
     * Polls all events to check whether they are active. If an event is active, but a handler is not
     * in an active state, the handler will be fired.
     */
    poll() {
        for (const [query, events] of this.events) {
            if (this.active(query)) {
                for (const event of events) {
                    if (event.isActive) {
                        continue;
                    }

                    event.isActive = true;
                    event.handler();
                }
            } else {
                for (const event of events) {
                    event.isActive = false;
                }
            }
        }
    },
};

export default breakpoints as Readonly<typeof breakpoints>;
