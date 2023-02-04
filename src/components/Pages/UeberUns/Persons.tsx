// @ts-nocheck
import {
    Title,
    Text,
    Badge,
    Button,
    Card,
    Flex,
    Group,
    Image,
    Blockquote,
    Space,
    Divider,
} from "@mantine/core";
import React from "react";
import TextToPage from "../../FloatingElement/TextToPage";
import {personsContent, raphaeleContent, zsoltContent} from "../../Content/PersonsContent";
import Seperator from "../Home/Seperator";

function MyCard(props: any) {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder className={"MyCard"}>
            <Card.Section>
                <Image
                    height={600}
                    src={props.url}
                    alt={props.title}
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Title order={4} weight={500}>{props.title}</Title>
                <Group>
                    {props.grade && (
                        <Badge
                            variant="gradient"
                            gradient={{ from: props.color, to: props.color, deg: 0 }}
                        >
                            {props.grade}
                        </Badge>
                    )}
                    {props.title === "Zsolt Penderik" && (
                        <Badge
                            variant="gradient"
                            gradient={{ from: props.color, to: props.color, deg: 0 }}
                        >
                            Sensei
                        </Badge>
                    )}
                </Group>
            </Group>

            <Text ta="left" c="dimmed">{props.position}</Text>

            {props.champion && (
                <>
                    <Space h="md" />
                    <Divider />
                    <Space h="md" />
                    <Text ta="left" c="dimmed">{props.succ1}</Text>
                    <Text ta="left" c="dimmed">{props.succ2}</Text>
                    <Text ta="left" c="dimmed">{props.succ3}</Text>
                    <Text ta="left" c="dimmed">{props.succ4}</Text>
                    <Space h="md" />
                    <Divider />
                </>
            )}

            {props.quote && props.quoteOriginDifferent && (
                <Blockquote cite={"~ " + props.quoteOrigin}>
                    <Text ta="left" size="lg" color="dimmed">
                        {props.quote}
                    </Text>
                </Blockquote>
            )}

            {props.quote && !props.quoteOriginDifferent && (
                <Blockquote>
                    <Text ta="left" size="lg" color="dimmed">
                        {props.quote}
                    </Text>
                </Blockquote>
            )}

            <TextToPage
                className={"PersonInfoButton"}
                size="xl"
                openingText={
                    <Button
                        variant="gradient"
                        gradient={{ from: props.color, to: props.color, deg: 0 }}
                        fullWidth
                        mt="md"
                        radius="md"
                    >
                        {personsContent[current_lang][9]}
                    </Button>
                }
                title={<Title order={1}>{props.title}</Title>}
                content={
                    <div>
                        {props.fulltext}
                        {props.champion && (
                            <>
                                <Seperator />
                                <Text ta="left">{props.succ1}</Text>
                                <Text ta="left">{props.succ2}</Text>
                                <Text ta="left">{props.succ3}</Text>
                                <Seperator />
                                <Text ta="left">{props.succ4}</Text>
                                <Seperator />

                                {props.quote && props.quoteOriginDifferent && (
                                    <Blockquote cite={"~ " + props.quoteOrigin}>
                                        <Text ta="left" size="lg">
                                            {props.quote}
                                        </Text>
                                    </Blockquote>
                                )}

                                {props.quote && !props.quoteOriginDifferent && (
                                    <Blockquote>
                                        <Text ta="left" size="lg">
                                            {props.quote}
                                        </Text>
                                    </Blockquote>
                                )}
                            </>
                        )}
                    </div>
                } />
        </Card>
    );
}

export default function Persons() {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <>
            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
                <MyCard
                    title={"Zsolt Penderik"}
                    color={"dark"}
                    grade={"5. Dan"}
                    position={personsContent[current_lang][0] + ", " + personsContent[current_lang][2] + ", " + personsContent[current_lang][3]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/Zsolt.jpg"}
                    champion={true}
                    fulltext="TODO"
                    succ1={zsoltContent[current_lang][0]}
                    succ2={zsoltContent[current_lang][1]}
                    succ3={zsoltContent[current_lang][2]}
                />
                <MyCard
                    title={"Raphaele Salvatore  Licciardo"}
                    color={"dark"}
                    grade={"1. Dan"}
                    position={personsContent[current_lang][0] + ", " + personsContent[current_lang][10] + ", " + personsContent[current_lang][4]}
                    quote={raphaeleContent[current_lang][0]}
                    quoteOriginDifferent={true}
                    quoteOrigin={raphaeleContent[current_lang][1]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/Raphaele-2.jpg"}
                    fulltext={raphaeleContent[current_lang][6]}
                    champion={true}
                    succ1={raphaeleContent[current_lang][2]}
                    succ2={raphaeleContent[current_lang][3]}
                    succ3={raphaeleContent[current_lang][4]}
                    succ4={raphaeleContent[current_lang][5]}
                />
            </Flex>

            <Space h="xl" />

            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
                <MyCard
                    title={"Michael Kupper"}
                    color={"dark"}
                    grade={"1. Dan"}
                    position={personsContent[current_lang][0] + ", " + personsContent[current_lang][6] + ", " + personsContent[current_lang][4]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-2.jpeg"}
                    champion={true}
                    fulltext="TODO"
                    succ1={zsoltContent[current_lang][0]}
                />
                <MyCard
                    title={"Dr. Evi Gleibs"}
                    color={"#6D4326"}
                    grade={"1. Kyu"}
                    position={personsContent[current_lang][1] + ", " + personsContent[current_lang][7]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-4.jpeg"}
                    fulltext={"TODO"}
                />
                <MyCard
                    title={"Monika Penderik"}
                    color={"dark"}
                    grade={"1. Dan"}
                    position={personsContent[current_lang][1] + ", " + personsContent[current_lang][5]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-7.jpeg"}
                    champion={true}
                    fulltext={personsContent[current_lang][11]}
                    succ1={zsoltContent[current_lang][0]}
                />
                <MyCard
                    title={"Darja Alena Kuklinski"}
                    color={"#6D4326"}
                    grade={"1. Kyu"}
                    position={personsContent[current_lang][1]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-9.jpeg"}
                    fulltext="TODO"
                />
                <MyCard
                    title={"Maria Licciardo"}
                    color={"grape"}
                    position={personsContent[current_lang][1] + ", " + personsContent[current_lang][8]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-3.jpeg"}
                    fulltext="TODO"
                />
            </Flex>
        </>
    );
}
