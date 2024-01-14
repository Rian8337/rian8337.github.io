import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Item as ItemStruct } from "../../structures/Item";
import Inner from "../Inner";

interface Props {
    readonly item: ItemStruct;
}

export default function Item(props: Props) {
    const { item } = props;

    return (
        <section>
            <Inner>
                {item.faIcon ? <FontAwesomeIcon icon={item.faIcon} /> : null}

                <h3>{item.title}</h3>
                {item.description}
            </Inner>
        </section>
    );
}
