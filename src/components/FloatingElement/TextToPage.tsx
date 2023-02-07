// @ts-nocheck
import {Badge, Avatar, ScrollArea, Container, Group, Modal, Spoiler, Text} from "@mantine/core";
import React, {useState} from "react";
import {textToPage} from "../Content/PersonsContent";

export default function TextToPage(props: any) {
    const [opened, setOpened] = useState(false);
    let current_lang = window.location.href.split("/")[3] as String;

    function getInitials(name: any) {
        if (name) {
            var matches = name.match(/\b(\w)/g);
            var acronym = matches.join('');
            return acronym;
        }
    }

    function getColor(name: any) {
        let names = ["RL", "ZP", "MK", "EG", "MP", "DK", "ML"];
        let colors = ["blue", "pink", "green", "orange", "indigo", "red", "cyan"];
        return colors[names.indexOf(getInitials(name))];
    }

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
                    {props.cont1 && <Group>
                        <Avatar.Group spacing="sm">
                            {props.cont7 && <Avatar src={null} alt={props.cont7} color={getColor(props.cont7)} radius="xl">{getInitials(props.cont7)}</Avatar>}
                            {props.cont6 && <Avatar src={null} alt={props.cont6} color={getColor(props.cont6)} radius="xl">{getInitials(props.cont6)}</Avatar>}
                            {props.cont5 && <Avatar src={null} alt={props.cont5} color={getColor(props.cont5)} radius="xl">{getInitials(props.cont5)}</Avatar>}
                            {props.cont4 && <Avatar src={null} alt={props.cont4} color={getColor(props.cont4)} radius="xl">{getInitials(props.cont4)}</Avatar>}
                            {props.cont3 && <Avatar src={null} alt={props.cont3} color={getColor(props.cont3)} radius="xl">{getInitials(props.cont3)}</Avatar>}
                            {props.cont2 && <Avatar src={null} alt={props.cont2} color={getColor(props.cont2)} radius="xl">{getInitials(props.cont2)}</Avatar>}
                            {props.cont1 && <Avatar src={null} alt={props.cont1} color={getColor(props.cont1)} radius="xl">{getInitials(props.cont1)}</Avatar>}
                        </Avatar.Group>
                        {props.date && <Badge variant="outline" color="gray">{props.date}</Badge>}
                        {props.type && <Badge variant="outline" color="gragrayy">{props.type}</Badge>}
                     </Group>}
                </Modal>

                {props.showButton &&
                    <Group position="center">
                        <Text
                            c={props.color}
                            className={"Button"}
                            onClick={() => {setOpened(true);}}
                        >
                            {props.openingText}
                        </Text>
                    </Group>
                }
            </Container>
        </div>
    );
}
