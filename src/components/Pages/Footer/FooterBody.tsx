// @ts-nocheck
import {Divider, Flex, Stack, Text, Title} from "@mantine/core";
import React, {useState, useEffect} from "react";
import {footer} from "../../Content/FooterContent";
import Copyright from "./Copyright";
import Verbaende from "./SubPages/Verbaende";
import Sponsoren from "./SubPages/Sponsoren";
import Imprint from "./SubPages/Imprint";
import Privacy from "./SubPages/Privacy";
import Seperator from "../Home/Seperator";
import Satzung from "./SubPages/Satzung";
import Begrifflichkeiten from "./SubPages/Begrifflichkeiten";
import Pruefungsordnung from "./SubPages/Pruefungsordnung";
import Wettkampfregeln from "./SubPages/Wettkampfregeln";
import Kontakt from "./SubPages/Kontakt";
import History from "./SubPages/History/History";
import Rules from "./SubPages/Rules";
import FAQ from "./SubPages/FAQ";
import Anmeldeformular from "./SubPages/Anmeldeformular";
import Kuendigungsvorlage from "./SubPages/Kuendigungsvorlage";

export default function FooterBody() {
    let current_lang = window.location.href.split("/")[3] as String;
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <div className={"Footer"}>
            <Seperator />

            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
                {!isMobile && <Divider orientation="vertical" /> }
                <Stack>
                    <Title order={4}>{footer[current_lang][5]}</Title>

                    <Flex
                        mih={50}
                        gap="md"
                        justify="center"
                        align="flex-start"
                        direction="row"
                        wrap="wrap"
                    >
                        <Stack>
                            <Begrifflichkeiten />
                            <History />
                            <Rules />
                        </Stack>
                        <Stack>
                            <Verbaende />
                            <Sponsoren />
                            <FAQ />
                        </Stack>
                    </Flex>
                </Stack>
                {!isMobile && <Divider orientation="vertical" /> }
                <Stack>
                    <Title order={4}>{footer[current_lang][1]}</Title>
                    <Imprint />
                    <Privacy />
                    <Kontakt />
                </Stack>
                {!isMobile && <Divider orientation="vertical" /> }
                <Stack>
                    <Title order={4}>{footer[current_lang][16]}</Title>
                    <Flex
                        mih={50}
                        gap="md"
                        justify="center"
                        align="flex-start"
                        direction="row"
                        wrap="wrap"
                    >
                        <Stack>
                            <Anmeldeformular title={footer[current_lang][12]} />
                            <Kuendigungsvorlage title={footer[current_lang][13]} />
                            <Text c={"dimmed"}>{footer[current_lang][14]}</Text>
                        </Stack>
                        <Stack>
                            <Pruefungsordnung title={footer[current_lang][15]} />
                            <Wettkampfregeln title={footer[current_lang][17]} />
                            <Satzung title={footer[current_lang][8]} />
                        </Stack>
                    </Flex>
                </Stack>
                {!isMobile && <Divider orientation="vertical" /> }
            </Flex>
            <Copyright />
        </div>
    );
}
