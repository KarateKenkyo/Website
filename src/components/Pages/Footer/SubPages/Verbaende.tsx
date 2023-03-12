// @ts-nocheck
import {Space, Image, Title} from "@mantine/core";
import {footer} from "../../../Content/FooterContent";

import TextToPage from "../../../FloatingElement/TextToPage";

export default function Verbaende(props: any) {
    let current_lang = props.current_lang; 
    return (
        <TextToPage
            not_fullscreen={true}
            current_lang={props.current_lang}
            showButton={true}
            size="xl"
            not_scrolling={true}
            openingText={footer[current_lang][6]}
            title={<Title order={1}>{footer[current_lang][6]}</Title>}
            content={
                <>
                    Inoffiziell (Gespräche laufen)
                    <Space h="xl" />
                    <Image
                        radius={"md"}
                        alt={"DKV Logo"}
                        src={"https://www.karate.de/de-wGlobal/wGlobal/layout/images/hd-logo.svg"} />
                    <Image
                        radius={"md"}
                        alt={"JKF Logo"}
                        src={"https://www.goju-kai.de/images/345.jpg"} />
                    <Image
                        radius={"md"}
                        alt={"GKD Logo"}
                        src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/GKD.webp"} />
                </>
            } />
    );
}
