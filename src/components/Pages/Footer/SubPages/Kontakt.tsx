// @ts-nocheck
import {Button, Flex, Title} from "@mantine/core";
import Seperator from "../../Home/Seperator";
import {contact, footer} from "../../../Content/FooterContent";

import TextToPage from "../../../FloatingElement/TextToPage";

export default function Kontakt(props: any) {
    let current_lang = props.current_lang;     return (
        <TextToPage
            not_fullscreen={true}
            showButton={true}
            openingText={
                <>
                    {props.button && (
                        <Button color="gray" compact uppercase>
                            {footer[current_lang][4]}
                        </Button>
                    )}
                    {!props.button && (
                        footer[current_lang][4]
                    )}
                </>
            }
            size="xl"
            not_scrolling={true}
            title={<Title order={1}>{footer[current_lang][4]}</Title>}
            content={
                <>
                    {contact[current_lang][0]}
                    <Seperator />
                    <Flex
                        mih={50}
                        gap="md"
                        direction="row"
                        wrap="wrap">
                        <Seperator />
                        <div>
                            <Title order={4}>Vorstand</Title>
                            <div>Zsolt Penderik</div>
                            <div>Rappengasse 32</div>
                            <div>76764 Rheinzabern</div>
                            <a href="mailto:angenehm001@gmail.com">angenehm001@gmail.com</a>
                        </div>
                        <Seperator />
                    </Flex>
                    <Seperator />
                    <Flex
                        mih={50}
                        gap="md"
                        direction="row"
                        wrap="wrap">
                        <Seperator />
                        <div>
                            <Title order={4}>Stellvertretender Vorstand</Title>
                            <div>Raphaele Salvatore Licciardo</div>
                            <div>Sparbenhecke 1</div>
                            <div>76744 Maximiliansau</div>
                            <a href="mailto:raphaele.salvatore@outlook.de">raphaele.salvatore@outlook.de</a>
                        </div>
                    </Flex>
                    <Seperator />
                    <Flex
                        mih={50}
                        gap="md"
                        direction="row"
                        wrap="wrap">
                    <Seperator />
                        <div>
                            <Title order={4}>Mutti für alles</Title>
                            <div>Maria Licciardo</div>
                            <div>Sparbenhecke 1</div>
                            <div>76744 Maximiliansau</div>
                            <a href="mailto:licciardo.maria@outlook.de">licciardo.maria@outlook.de</a>
                        </div>
                    </Flex>
                    <Seperator />
                </>
            }/>
    );
}
