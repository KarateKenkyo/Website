// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {times} from "../../Content/TrainerContent";
import {Card, Group, Badge, Container, Space, Text} from "@mantine/core";
import MyContent from "../../Utils/MyContent";
import React from "react";

function CourseCard(props: any) {
    return (
        <>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{props.title}</Text>
                    <Group position="apart" mt="md" mb="xs">
                        <Badge color={props.color} variant="outline"> {props.day} </Badge>
                        <Badge color={props.color} variant="outline"> {props.time} </Badge>
                    </Group>
                </Group>

                <Text ta="left" size="sm" color="dimmed">
                    {props.desc}
                </Text>
            </Card>
            <Space h="xl" />
        </>
    );
}

export default function Times() {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <Container>
            <MyTitle content={times[current_lang][0]} />
            <Space h="xl" />
            <MyContent content={times[current_lang][1]} />
            <CourseCard
                title={times[current_lang][2]}
                desc={times[current_lang][3]}
                day={times[current_lang][4]}
                time={"18:00 - 19:00"}
                color={"teal"}
            />
            <CourseCard
                title={times[current_lang][5]}
                desc={times[current_lang][6]}
                day={times[current_lang][4]}
                time={"19:00 - 21:00"}
                color={"orange"}
            />
            <CourseCard
                title={times[current_lang][7]}
                desc={times[current_lang][9]}
                day={times[current_lang][8]}
                time={"18:30 - 20:30"}
                color={"dark"}
            />
            <CourseCard
                title={times[current_lang][10]}
                desc={times[current_lang][12]}
                day={times[current_lang][11]}
                time={"08:00 - 12:00"}
                color={"grape"}
            />
            <CourseCard
                title={times[current_lang][13]}
                desc={times[current_lang][14]}
                day={times[current_lang][11]}
                time={"08:00 - 12:00"}
                color={"red"}
            />
        </Container>
    );
}
