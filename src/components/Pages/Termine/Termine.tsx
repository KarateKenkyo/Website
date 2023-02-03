// @ts-nocheck
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Space} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import {items} from "../../Content/MenuContent";
import Language from "../Footer/Language";

export default function Termine() {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <>
            <div className={"WeiteresBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][3]} />

                <Seperator />

                Aktuell haben wir noch keine Termine.

                <FooterBody/>
                <Language />
            </div>
        </>
    );
}