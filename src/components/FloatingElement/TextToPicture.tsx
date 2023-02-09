import React, {useState} from "react";
import {Text, Image, Modal, Indicator, Tooltip, ScrollArea} from "@mantine/core";

export default function FloatingTextToPicture(props: any) {
    const [opened, setOpened] = useState(false);
    return (
        <div>
            <Modal
                size={props.size}
                overlayOpacity={0.55}
                overlayBlur={3}
                title={props.label}
                opened={opened}
                withCloseButton={true}
                onClose={() => setOpened(false)}
            >
                <Image
                    radius="md"
                    src={props.pic}
                    alt="Hier sollte ein Bild sein ..."
                    withPlaceholder
                />
            </Modal>

            <Tooltip label={props.label} position="right" withArrow>
                <Indicator inline size={8} color="violet">
                    <Text className={"click"} onClick={() => setOpened(true)}>{props.text}</Text>
                </Indicator>

            </Tooltip>
        </div>
    );
}
