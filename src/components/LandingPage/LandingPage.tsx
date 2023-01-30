import {SlArrowDown} from "react-icons/sl";
import React from "react";
import Logo from "../Header/Logo";

export default function LandingPage(props: any) {
    return (
        <div className={"LandingPage"}>
            <div className={"BackgroundImage"} style={{
                backgroundImage: `url(${props.imgurl})`
            }} />

            <div className={"TextContainer"}>
                {/*<div className={"Title"}>
                    Kenkyo
                </div>
                <div className={"Subtitle"}>
                    {props.subtitle}
                </div>*/}
            </div>

            <Logo />

            <div  className={"scrollHint"} >
                <SlArrowDown size={40}/>
            </div>
        </div>
    );
}