import { PropsWithChildren } from "react";
import { FormFieldFill } from "../../constants/form/FormFieldFill";
import { BaseFormProps } from "../../structures/BaseFormProps";

/**
 * Represents a field inside a form.
 */
export default function FormField(props: PropsWithChildren<BaseFormProps>) {
    let className = "field";

    switch (props.fill) {
        case FormFieldFill.half:
            className += " half";
            break;
        case FormFieldFill.third:
            className += " third";
            break;
        case FormFieldFill.quarter:
            className += " quarter";
            break;
    }

    return <div className={className}>{props.children}</div>;
}
