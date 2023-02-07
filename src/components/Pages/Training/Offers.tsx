// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {Badge, Card, Container, Flex, Group, Space, Text} from "@mantine/core";
import MyContent from "../../Utils/MyContent";
import Kontakt from "../Footer/SubPages/Kontakt";
import React from "react";
import {offers} from "../../Content/TrainerContent";

function TraingsCard(props: any) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{props.title}</Text>
                <Badge color={props.color} variant="outline">
                    {props.price}
                </Badge>
            </Group>

            <Text ta="left" size="sm" color="dimmed">
                {props.desc}
            </Text>
        </Card>
    );
}

export default function Offers() {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <Container>
            <MyTitle content={offers[current_lang][0]} />
            <Space h="xl" />
            <MyContent content={offers[current_lang][1]} />
            <Kontakt button={true} />
            <Space h="lg" />
            <MyContent content={offers[current_lang][13]} />
            <Space h="xl" />

            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
                <TraingsCard
                    title={offers[current_lang][2]}
                    desc={offers[current_lang][3]}
                    price={"65€ / 6 " + offers[current_lang][12]}
                    color={"teal"}
                />
                <TraingsCard
                    title={offers[current_lang][4]}
                    desc={offers[current_lang][5]}
                    price={"35€ / 6 " + offers[current_lang][12]}
                    color={"yellow"}
                />
                <TraingsCard
                    title={offers[current_lang][6]}
                    desc={offers[current_lang][7]}
                    price={"55€ / 6 " + offers[current_lang][12]}
                    color={"grape"}
                />
                <TraingsCard
                    title={offers[current_lang][8]}
                    desc={offers[current_lang][9]}
                    price={"45€ / 6 " + offers[current_lang][12]}
                    color={"orange"}
                />
                <TraingsCard
                    title={offers[current_lang][10]}
                    desc={offers[current_lang][11]}
                    price={"30€ / 3 " + offers[current_lang][12]}
                    color={"pink"}
                />
            </Flex>
        </Container>
    );
}
