// @ts-nocheck
import FooterBody from "../Footer/FooterBody";

import Seperator from "../Home/Seperator";
import {Space} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import {items} from "../../Content/MenuContent";
import Persons from "./Persons";
import Language from "../Footer/Language";

export default function UeberUns(props: any) {
    let current_lang = props.current_lang;

    return (
        <>
            <div className={"VorstandBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][2]} />

                <Seperator />

                <Persons current_lang={props.current_lang} />

                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang} />
            </div>
        </>
    );
}
