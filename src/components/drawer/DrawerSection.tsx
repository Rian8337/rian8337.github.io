import { ReactNode, PropsWithChildren } from "react";

interface Props {
    readonly title: ReactNode;
}

/**
 * Represents a section in a `Drawer`.
 */
export default function DrawerSection(props: PropsWithChildren<Props>) {
    return (
        <section>
            <h3 className="align-center">{props.title}</h3>

            {props.children}
        </section>
    );
}
