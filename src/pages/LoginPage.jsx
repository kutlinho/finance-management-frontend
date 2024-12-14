import React from 'react';
import {Form} from "antd";
import UsernameInput from "../components/inputs/UsernameInput";
import PasswordInput from "../components/inputs/PasswordInput";
import Banner from "../components/Banner";

function LoginPage() {
    const styles = {
        form: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "4px solid green",
            borderRadius: 30,
            width: "30%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop:"30vh",
            paddingTop:"4vh",
            paddingBottom:"4vh",
        }
    }
    return (
        <Form style={styles.form}>
            <Banner/>
            <UsernameInput/>
            <PasswordInput/>
        </Form>
    );
}

export default LoginPage;