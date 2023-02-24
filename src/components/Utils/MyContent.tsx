import {Space, Text} from "@mantine/core";


export default function MyContent(props: any) {
    return (
        <div>
            {!props.dimmed && (
                <Text fz="md">
                    {props.content}
                </Text>
            )}
            {props.dimmed && (
                <Text c="dimmed" fz="md">
                    {props.content}
                </Text>
            )}
            {!props.no_space && (
                <Space h="md" />
            )}
        </div>
    );
}