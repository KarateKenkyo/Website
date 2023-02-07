// @ts-nocheck
import {Flex, Stack, Text, Title} from "@mantine/core";
import React from "react";
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

export default function FooterBody() {
    let current_lang = window.location.href.split("/")[3] as String;

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
                <Stack>
                    <Title order={4}>{footer[current_lang][1]}</Title>
                    <Imprint />
                    <Privacy />
                    <Kontakt />
                </Stack>
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
                        </Stack>
                    </Flex>
                </Stack>
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
                            <Text c={"dimmed"}>{footer[current_lang][12]}</Text>
                            <Text c={"dimmed"}>{footer[current_lang][13]}</Text>
                            <Text c={"dimmed"}>{footer[current_lang][14]}</Text>
                        </Stack>
                        <Stack>
                            <Pruefungsordnung title={footer[current_lang][15]} />
                            <Wettkampfregeln title={footer[current_lang][17]} />
                            <Satzung title={footer[current_lang][8]} />
                        </Stack>
                    </Flex>
                </Stack>
            </Flex>
            <Copyright />
        </div>
    );
}
