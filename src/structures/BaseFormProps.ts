import { FormFieldFill } from "../constants/form/FormFieldFill";

/**
 * The base props of a form element.
 */
export interface BaseFormProps {
    readonly label: string;
    readonly htmlFor: string;
    readonly id: string;
    readonly name?: string;
    readonly fill?: FormFieldFill;
}
