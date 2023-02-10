// @ts-nocheck
import React from "react";
import {items} from "../Content/MenuContent";
import {Title, Space} from "@mantine/core";

export default function MenuItems(props: any) {
    let current_lang = props.current_lang;

    return (
        <>
            <Title order={2} className="click" onClick={props.handleHome}>{items[current_lang][0]}</Title>
            <Space h="xl" />
            <Title order={2} className="click" onClick={props.handleTraining}>{items[current_lang][1]}</Title>
            <Space h="xl" />
            <Title order={2} className="click" onClick={props.handleUeberUns}>{items[current_lang][2]}</Title>
            <Space h="xl" />
            <Title order={2} className="click" onClick={props.handleTermine}>{items[current_lang][3]}</Title>
            <Space h="xl" />
            <Title order={2} className="click" onClick={props.handleNews}>{items[current_lang][4]}</Title>
        </>
    );
}
