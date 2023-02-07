// @ts-nocheck
import React from "react";
import {Container, Title} from "@mantine/core";
import MyTimeline from "./MyTimeline";
import IntroGojuRyu from "./IntroGojuRyu";
import IntroKenkyo from "./IntroKenkyo";
import {footer} from "../../../../Content/FooterContent";
import TextToPage from "../../../../FloatingElement/TextToPage";

export default function History() {
    let current_lang = window.location.href.split("/")[3] as String;
    return(
        <TextToPage
            showButton={true}
            size="xl"
            openingText={footer[current_lang][11]}
            title={<Title order={1}>{footer[current_lang][11]}</Title>}
            content={
                <Container>
                    <IntroGojuRyu />
                    <MyTimeline />
                    <IntroKenkyo />
                </Container>
            }/>
    );
}
