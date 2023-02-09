// @ts-nocheck
import MyContent from "../../../Utils/MyContent";
import {footer, sponsor} from "../../../Content/FooterContent";
import {Title} from "@mantine/core";
import React from "react";
import TextToPage from "../../../FloatingElement/TextToPage";

export default function Sponsoren(props: any) {
    let current_lang = props.current_lang;     return (
        <TextToPage
            current_lang={props.current_lang}
            size="xl"
            showButton={true}
            not_scrolling={true}
            openingText={footer[current_lang][7]}
            title={<Title order={1}>{footer[current_lang][7]}</Title>}
            content={
                <>
                    <MyContent content={sponsor[current_lang][0]} />
                    <MyContent content={<a href={"mailto: todo@todo.de"}>todo@todo.de</a>} />
                    <MyContent content={sponsor[current_lang][1]} />
                </>
            }/>
    );
}
