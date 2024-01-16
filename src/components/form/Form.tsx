import { FormEventHandler, PropsWithChildren } from "react";
import FormSubmitButton from "./FormSubmitButton";
import { motion } from "framer-motion";
import defaultAnimationProps from "../../utils/defaultAnimationProps";

interface Props {
    /**
     * The function to run after the form is submitted.
     */
    readonly onSubmit: FormEventHandler<HTMLFormElement>;

    /**
     * The value of the submit button.
     */
    readonly submitButtonValue: string;
}

/**
 * Represents a form.
 */
export default function Form(props: PropsWithChildren<Props>) {
    return (
        <motion.form {...defaultAnimationProps} onSubmit={props.onSubmit}>
            <div className="fields">{props.children}</div>

            <FormSubmitButton value={props.submitButtonValue} />
        </motion.form>
    );
}
