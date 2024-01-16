import { HTMLInputTypeAttribute } from "react";
import { BaseFormProps } from "../../structures/BaseFormProps";
import FormField from "./FormField";

interface Props extends BaseFormProps {
    /**
     * The type of input.
     */
    readonly type: HTMLInputTypeAttribute;

    /**
     * Whether to display the label first rather than the input element.
     */
    readonly labelFirst?: boolean;

    /**
     * Whether this input is checked, if the input type supports it.
     */
    readonly checked?: boolean;
}

/**
 * Represents an input field in a form.
 */
export default function InputFormField(props: Props) {
    const label = <label htmlFor={props.htmlFor}>{props.label}</label>;
    const input = (
        <input
            type={props.type}
            name={props.name ?? props.id}
            id={props.id}
            checked={props.checked}
        />
    );

    return (
        <FormField {...props}>
            {props.labelFirst !== false ? (
                <>
                    {label}
                    {input}
                </>
            ) : (
                <>
                    {input}
                    {label}
                </>
            )}
        </FormField>
    );
}
