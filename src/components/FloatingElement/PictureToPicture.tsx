//@ts-nocheck
import React, {useState} from "react";
import {Spoiler, Text, Group, Image, Modal, Space, ScrollArea} from "@mantine/core";
import {textToPage} from "../Content/PersonsContent";

export default function PictureToPicture(props: any) {
    const [opened, setOpened] = useState(false);
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <div>
            <Modal
                size={props.size}
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                title={props.label}
                withCloseButton={true}
                onClose={() => setOpened(false)}
            >
                <ScrollArea style={{ height: 600 }}>
                    <Spoiler
                        maxHeight={575}
                        showLabel={textToPage[current_lang][0]}
                        hideLabel={textToPage[current_lang][1]}>
                        <Image

                            radius="md"
                            src={props.pic}
                            alt="Hier sollte ein Bild sein ..."
                            withPlaceholder
                        />
                        <Space h={"xl"} />
                        <Text c="dimmed">{props.full_content}</Text>
                    </Spoiler>
                </ScrollArea>
            </Modal>

            <Group>
                <Image className={"NewsImage"}
                       onClick={() => setOpened(true)}
                       radius="md"
                       src={props.pic}
                       alt="Hier sollte ein Bild sein ..."
                       withPlaceholder
                />
            </Group>
        </div>
    );
}
