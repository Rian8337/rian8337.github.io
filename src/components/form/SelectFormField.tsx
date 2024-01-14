import { BaseFormProps } from "../../structures/BaseFormProps";
import { SelectFormFieldOption } from "../../structures/SelectFormFieldOption";
import FormField from "./FormField";

interface Props extends BaseFormProps {
    /**
     * The options of this select field.
     */
    readonly options: SelectFormFieldOption[];
}

/**
 * Represents a select field in a form that allows the user to select from different selections.
 */
export default function SelectFormField(props: Props) {
    return (
        <FormField {...props}>
            <label htmlFor={props.htmlFor}>{props.label}</label>

            <select id={props.id} name={props.name ?? props.id}>
                {props.options.map((option, i) => (
                    <option key={i} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </FormField>
    );
}
