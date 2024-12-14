import React from 'react';
import logo from "../assets/financheck-logo.svg"

function Banner({width = 40, height = 10}) {

    const style = {
        img: {
            width: width + "vh",
            height: height + "vh"
        }
    }

    return (
        <img style={style.img} src={logo} alt="logo"/>
    );
}

export default Banner;