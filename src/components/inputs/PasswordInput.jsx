import React from 'react';
import {Form, Input} from "antd";

function PasswordInput() {

    const styles = {
        passwordInput: {
            display: "flex",
            flexDirection: "column",
            width: "50%",
        }
    }
    return (
        <Form.Item style={styles.passwordInput} name='password' label="Password">
            <Input.Password placeholder="Password"/>
        </Form.Item>
    );
}

export default PasswordInput;