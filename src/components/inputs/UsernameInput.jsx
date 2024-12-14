import React from 'react';
import {Form, Input} from "antd";

function UsernameInput() {
    const styles = {
        usernameInput: {
            display: "flex",
            flexDirection: "column",
            width: "50%",
        }
    }

    return (
        <Form.Item style={styles.usernameInput} name="username" label="Username">
            <Input placeholder="Username"/>
        </Form.Item>

    );
}

export default UsernameInput;