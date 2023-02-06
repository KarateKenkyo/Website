// @ts-nocheck
import {ScrollArea, Container, Group, Modal, Spoiler, Text} from "@mantine/core";
import React, {useState} from "react";
import {textToPage} from "../Content/PersonsContent";

export default function TextToPage(props: any) {
    const [opened, setOpened] = useState(false);
    let current_lang = window.location.href.split("/")[3] as String;

    return(
        <div>
            <Container>
                <Modal
                    centered
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title={props.title}
                    size={props.size}
                >
                    {!props.not_scrolling &&
                        <ScrollArea style={{ height: 600 }}>
                            <Spoiler
                                maxHeight={575}
                                showLabel={textToPage[current_lang][0]}
                                hideLabel={textToPage[current_lang][1]}>
                                {props.content}
                            </Spoiler>
                        </ScrollArea>
                    }
                    {props.not_scrolling && props.content}
                </Modal>

                <Group position="center">
                    <Text
                        c={props.color}
                        className={"Button"}
                        onClick={() => {setOpened(true);}}
                    >
                        {props.openingText}
                    </Text>
                </Group>
            </Container>
        </div>
    );
}
