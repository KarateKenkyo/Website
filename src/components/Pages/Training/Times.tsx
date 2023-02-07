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
                title={"Kinder- und Anfänger Training"}
                desc={"Das Kindertraining findet jeden Dienstag und Donnerstag von 18:00 bis 19:00 Uhr statt. Auch Erwachsene Anfänger können daran teilnehmen."}
                day={"Dienstag & Donnerstag"}
                time={"18:00 - 19:00"}
                color={"teal"}
            />
            <CourseCard
                title={"Erwachsenen- und Fortgeschrittenen Training"}
                desc={"Das Kindertraining findet jeden Dienstag und Donnerstag von 18:00 bis 19:00 Uhr statt. Auch Erwachsene Anfänger können daran teilnehmen."}
                day={"Dienstag & Donnerstag"}
                time={"19:00 - 21:00"}
                color={"orange"}
            />
            <CourseCard
                title={"Schwarzgurt Training"}
                desc={"Für unsere Schwarzgurte bieten wir ein gesondertes Spezieltraining an."}
                day={"Freitag"}
                time={"18:30 - 20:30"}
                color={"dark"}
            />
            <CourseCard
                title={"Altersvorsorge Training"}
                desc={"Für unsere Älteren Karateka bieten wir auch ein angepasstes Training an. Auch jüngere Teilnehmen mit Verletztungen haben hier schon dran teilgenommen."}
                day={"Samstag"}
                time={"08:00 - 12:00"}
                color={"grape"}
            />
            <CourseCard
                title={"Speziall Training"}
                desc={"Bei wichtigen Veranstaltungen bieten wir ein gesondertes Speziall Training an. Dafür können bei anstehenden Wettkämpfen oder Kyu- / Danprüfungen nochmal die Feinheiten ausgebessert werden."}
                day={"Samstag"}
                time={"08:00 - 12:00"}
                color={"red"}
            />
        </Container>
    );
}
