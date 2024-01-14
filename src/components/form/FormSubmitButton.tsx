import Actions from "../Actions";

interface Props {
    /**
     * The value of this button.
     */
    readonly value: string;
}

/**
 * Represents a button used to submit a form.
 */
export default function FormSubmitButton(props: Props) {
    return (
        <Actions
            actions={[
                <input
                    key={0}
                    type="submit"
                    name="submit"
                    id="submit"
                    value={props.value}
                />,
            ]}
        />
    );
}
