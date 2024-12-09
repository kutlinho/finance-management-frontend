import React from 'react';
import {Form} from "antd";
import UsernameInput from "../components/inputs/UsernameInput";
import PasswordInput from "../components/inputs/PasswordInput";

function LoginForm() {
    const styles = {
        form: {
            marginTop: 10
        }
    }
    return (
        <div>
            <Form style={styles.form}>
                <UsernameInput/>
                <PasswordInput/>
            </Form>
        </div>
    );
}

export default LoginForm;