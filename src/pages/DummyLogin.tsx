import { useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import InputFormField from "../components/form/InputFormField";
import Wrapper from "../components/wrapper/Wrapper";
import WrapperInner from "../components/wrapper/WrapperInner";
import { WrapperInnerSize } from "../constants/wrapper/WrapperInnerSize";
import { WrapperStyle } from "../constants/wrapper/WrapperStyle";

export default function DummyLogin() {
    const navigate = useNavigate();

    return (
        <Wrapper style={WrapperStyle.style1}>
            <WrapperInner size={WrapperInnerSize.medium}>
                <h1 className="align-center">Register Account</h1>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();

                        scrollTo({ top: 0 });

                        navigate("/privacy-policy");
                    }}
                    submitButtonValue="Login"
                >
                    <InputFormField
                        type="text"
                        htmlFor="email"
                        id="email"
                        label="Email"
                    />
                    <InputFormField
                        type="text"
                        htmlFor="login"
                        id="login"
                        label="Login"
                    />
                    <InputFormField
                        type="password"
                        htmlFor="password"
                        id="password"
                        label="Password"
                    />
                </Form>
            </WrapperInner>
        </Wrapper>
    );
}
