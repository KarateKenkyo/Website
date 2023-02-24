// @ts-nocheck
import {Blockquote, Text} from "@mantine/core";

import Seperator from "./Seperator";

export default function Quote(props: any) {
    return (
        <>
            <Seperator />
            <Blockquote cite={"– " + props.author} icon={null}>
                <Text fs="italic">
                    {props.text}
                </Text>
            </Blockquote>
            <Seperator />
        </>
    );
}