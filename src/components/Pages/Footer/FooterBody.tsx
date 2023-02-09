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

export default function FooterBody(props: any) {
    let current_lang = props.current_lang; 
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
                            <Begrifflichkeiten  current_lang={props.current_lang} />
                            <History current_lang={props.current_lang} />
                            <Rules current_lang={props.current_lang} />
                        </Stack>
                        <Stack>
                            <Verbaende current_lang={props.current_lang} />
                            <Sponsoren current_lang={props.current_lang} />
                            <FAQ current_lang={props.current_lang}/>
                        </Stack>
                    </Flex>
                </Stack>
                {!isMobile && <Divider orientation="vertical" /> }
                <Stack>
                    <Title order={4}>{footer[current_lang][1]}</Title>
                    <Imprint current_lang={props.current_lang}/>
                    <Privacy current_lang={props.current_lang}/>
                    <Kontakt current_lang={props.current_lang}/>
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
                            <Anmeldeformular current_lang={props.current_lang} title={footer[current_lang][12]} />
                            <Kuendigungsvorlage current_lang={props.current_lang} title={footer[current_lang][13]} />
                            <Text c={"dimmed"}>{footer[current_lang][14]}</Text>
                        </Stack>
                        <Stack>
                            <Pruefungsordnung current_lang={props.current_lang} title={footer[current_lang][15]} />
                            <Wettkampfregeln  current_lang={props.current_lang} title={footer[current_lang][17]} />
                            <Satzung  current_lang={props.current_lang} title={footer[current_lang][8]} />
                        </Stack>
                    </Flex>
                </Stack>
                {!isMobile && <Divider orientation="vertical" /> }
            </Flex>
            <Copyright />
        </div>
    );
}
