// @ts-nocheck
import MyContent from "../../../Utils/MyContent";
import {footer, sponsor} from "../../../Content/FooterContent";
import {Space, Title} from "@mantine/core";

import TextToPage from "../../../FloatingElement/TextToPage";
import Kontakt from "./Kontakt";

export default function Sponsoren(props: any) {
    let current_lang = props.current_lang;     return (
        <TextToPage
            not_fullscreen={true}
            current_lang={props.current_lang}
            size="xl"
            showButton={true}
            not_scrolling={true}
            openingText={footer[current_lang][7]}
            title={<Title order={1}>{footer[current_lang][7]}</Title>}
            content={
                <>
                    <MyContent content={sponsor[current_lang][0]} />
                    <Kontakt button={true} current_lang={props.current_lang}/>
                    <Space h="md" />
                    <MyContent content={sponsor[current_lang][1]} />
                </>
            }/>
    );
}
