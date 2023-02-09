// @ts-nocheck
import {Space} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {items} from "../../Content/MenuContent";
import Offers from "./Offers";
import Times from "./Times";
import Location from "./Location";
import Language from "../Footer/Language";

export default function Training(props: any) {
    let current_lang = props.current_lang; 
    return (
        <>
            <div className={"TrainerBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][1]}/>

                <Seperator />

                <Location current_lang={props.current_lang} />

                <Seperator />

                <Times current_lang={props.current_lang} />

                <Seperator />

                <Offers current_lang={props.current_lang} />

                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang} />

            </div>
        </>
    );
}
