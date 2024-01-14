import { BaseFormProps } from "../../structures/BaseFormProps";
import FormField from "./FormField";

interface Props extends BaseFormProps {
    /**
     * The amount of rows allowed.
     */
    readonly rows?: number;
}

/**
 * Represents an input field in a form that supports multiline.
 */
export default function MultilineInputFormField(props: Props) {
    return (
        <FormField {...props}>
            <label htmlFor={props.htmlFor}>{props.label}</label>

            <textarea
                name={props.name ?? props.id}
                id={props.id}
                rows={props.rows}
            />
        </FormField>
    );
}
