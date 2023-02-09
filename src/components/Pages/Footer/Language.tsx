// @ts-nocheck
import {Image} from "@mantine/core";
import React from "react";

export default function Language(props: any) {

    function handleGer() { props.setCurrentLang("de") }
    function handleEng() { props.setCurrentLang("en") }
    function handleJap() { props.setCurrentLang("ja") }
    function handleUng() { props.setCurrentLang("un") }
    function handleUkr() { props.setCurrentLang("uk") }

    return (
        <div className={"FloatingLangChooser"}>
            <div onClick={handleUkr} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 0, margin: 10}}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/UKR.png"}
                />
            </div>
            <div onClick={handleJap} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 40, margin: 10}}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/JAP.png"}
                />
            </div>
            <div onClick={handleUng} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 80, margin: 10}}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/UNG.png"}
                />
            </div>
            <div onClick={handleEng} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 120, margin: 10}}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/ENG.png"}
                />
            </div>
            <div onClick={handleGer} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 160, margin: 10}}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/GER.png"}
                />
            </div>
        </div>
    );
}
