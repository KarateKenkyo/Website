// @ts-nocheck
import {
    Title,
    Button,
    Text,
    Badge,
    Card,
    Flex,
    Group,
    Image,
    Blockquote,
    Space,
} from "@mantine/core";

import TextToPage from "../../FloatingElement/TextToPage";
import {darjaContent, personsContent, raphaeleContent, zsoltContent} from "../../Content/PersonsContent";
import Seperator from "../Home/Seperator";

function MyCard(props: any) {
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

            <TextToPage
                not_fullscreen={true}
                current_lang={props.current_lang}
                className={"PersonInfoButton"}
                showButton={true}
                size="xl"
                openingText={
                    <Button
                        variant="gradient"
                        gradient={{ from: props.color, to: props.color, deg: 0 }}
                        fullWidth
                        mt="md"
                        radius="md"
                    >
                        {personsContent[props.current_lang][9]}
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
                                <Text ta="left">{props.succ4}</Text>
                                <Text ta="left">{props.succ5}</Text>
                                <Text ta="left">{props.succ6}</Text>
                                <Text ta="left">{props.succ7}</Text>
                                <Text ta="left">{props.succ8}</Text>
                                {props.succ4 && <Seperator />}

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
                }
            />
        </Card>
    );
}

export default function Persons(props: any) {
    let current_lang = props.current_lang;
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
                    current_lang={props.current_lang}
                    title={"Zsolt Penderik"}
                    color={"dark"}
                    grade={"5. Dan"}
                    position={personsContent[current_lang][0] + ", " + personsContent[current_lang][2] + ", " + personsContent[current_lang][3]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/Zsolt.jpg"}
                    champion={true}
                    fulltext=""
                    succ1={zsoltContent[current_lang][0]}
                    succ2={zsoltContent[current_lang][1]}
                    succ3={zsoltContent[current_lang][2]}
                    succ4={zsoltContent[current_lang][4]}
                    succ5={zsoltContent[current_lang][5]}
                    succ6={zsoltContent[current_lang][6]}
                    succ7={zsoltContent[current_lang][7]}
                    succ8={zsoltContent[current_lang][8]}
                />
                <MyCard
                    current_lang={props.current_lang}
                    title={"Raphaele Salvatore  Licciardo"}
                    color={"dark"}
                    grade={"1. Dan"}
                    position={personsContent[current_lang][0] + ", " + personsContent[current_lang][10] + ", " + personsContent[current_lang][4]}
                    quote={raphaeleContent[current_lang][0]}
                    quoteOriginDifferent={true}
                    quoteOrigin={raphaeleContent[current_lang][1]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/Raphaele-2.jpg"}
                    fulltext={raphaeleContent[current_lang][7]}
                    champion={true}
                    succ1={raphaeleContent[current_lang][2]}
                    succ2={raphaeleContent[current_lang][3]}
                    succ3={raphaeleContent[current_lang][4]}
                    succ4={raphaeleContent[current_lang][5]}
                    succ5={zsoltContent[current_lang][0]}
                    succ6={zsoltContent[current_lang][1] + " " + zsoltContent[current_lang][3]}
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
                    current_lang={props.current_lang}
                    title={"Michael Kupper"}
                    color={"dark"}
                    grade={"1. Dan"}
                    position={personsContent[current_lang][0] + ", " + personsContent[current_lang][6]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/Michael.jpg"}
                    champion={true}
                    fulltext=""
                    succ1={zsoltContent[current_lang][0]}
                    succ2={zsoltContent[current_lang][1]}
                />
                <MyCard
                    current_lang={props.current_lang}
                    title={"Dr. med. Evi Gleibs"}
                    color={"#6D4326"}
                    grade={"1. Kyu"}
                    position={personsContent[current_lang][1] + ", " + personsContent[current_lang][7]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-4.jpeg"}
                    champion={false}
                    fulltext={""}
                />
                <MyCard
                    current_lang={props.current_lang}
                    title={"Monika Penderik"}
                    color={"dark"}
                    grade={"1. Dan"}
                    position={personsContent[current_lang][1] + ", " + personsContent[current_lang][5]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/monika.jpg"}
                    champion={true}
                    fulltext={personsContent[current_lang][11]}
                    succ1={zsoltContent[current_lang][0]}
                />
                <MyCard
                    current_lang={props.current_lang}
                    title={"Darja Alena Kuklinski"}
                    color={"#6D4326"}
                    grade={"1. Kyu"}
                    position={personsContent[current_lang][1]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/Darja.jpeg"}
                    fulltext={darjaContent[current_lang][0]}
                />
                <MyCard
                    current_lang={props.current_lang}
                    title={"Maria Licciardo"}
                    position={personsContent[current_lang][1] + ", " + personsContent[current_lang][8]}
                    url={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/mama.jpg"}
                    fulltext={raphaeleContent[current_lang][7]}
                    color={"pink"}
                    champion={true}
                    quote={raphaeleContent[current_lang][8]}
                />
            </Flex>
        </>
    );
}
