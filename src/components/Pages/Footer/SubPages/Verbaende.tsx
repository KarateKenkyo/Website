// @ts-nocheck
import {Image, Title} from "@mantine/core";
import {footer} from "../../../Content/FooterContent";
import React from "react";
import TextToPage from "../../../FloatingElement/TextToPage";

export default function Verbaende() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <TextToPage
            size="xl"
            not_scrolling={true}
            openingText={footer[current_lang][6]}
            title={<Title order={1}>{footer[current_lang][6]}</Title>}
            content={
                <>
                    <Image
                        radius={"md"}
                        alt={"DKV Logo"}
                        src={"https://www.karate.de/de-wGlobal/wGlobal/layout/images/hd-logo.svg"} />
                    <Image
                        radius={"md"}
                        alt={"JKF Logo"}
                        src={"https://www.goju-kai.de/images/345.jpg"} />
                </>
            } />
    );
}
