import React from 'react';
import {Form} from "antd";
import UsernameInput from "../components/inputs/UsernameInput";
import PasswordInput from "../components/inputs/PasswordInput";

function LoginForm() {
    return (
        <div>
            <Form>
                <UsernameInput/>
                <PasswordInput/>
            </Form>
        </div>
    );
}

export default LoginForm;