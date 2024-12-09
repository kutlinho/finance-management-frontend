import React from 'react';
import {Form, Input} from "antd";

function UsernameInput() {
    const styles = {
        usernameInput: {
            width: "20%",
            display: "flex",
            flexDirection: "column",
        }
    }

    return (
        <Form.Item style={styles.usernameInput} name="username" label="Username">
            <Input placeholder="Username"/>
        </Form.Item>

    );
}

export default UsernameInput;