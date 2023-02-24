import {Card, Group, Badge, Space, Title, Text} from "@mantine/core";


export default function Cards(props: any) {
    return (
        <>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Title ta="left" order={4}>{props.title}</Title>
                </Group>

                <Text ta="left" size="sm" color="dimmed">
                    {props.desc}
                </Text>

                <Space h="md" />

                <Group>
                    <Badge color={props.color} variant="outline"> {props.time} </Badge>
                    {props.day && <Badge color={props.color} variant="outline"> {props.day} </Badge>}
                </Group>
            </Card>
            <Space h="xl" />
        </>
    );
}
