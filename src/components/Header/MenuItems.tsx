// @ts-nocheck

import {items} from "../Content/MenuContent";
import {Title, Space} from "@mantine/core";
import {dojo, offers, times} from "../Content/TrainerContent";

export default function MenuItems(props: any) {
    let current_lang = props.current_lang;

    return (
        <>
            <Title order={2} className="click" onClick={props.handleHome}>{items[current_lang][0]}</Title>
            <Space h="xs" />
            <Title order={2} className="click" onClick={props.handleTrainingLocation}>{dojo[current_lang][0]}</Title>
            <Space h="xs" />
            <Title order={2} className="click" onClick={props.handleTrainingTimes}>{times[current_lang][0]}</Title>
            <Space h="xs" />
            <Title order={2} className="click" onClick={props.handleTrainingOffer}>{offers[current_lang][0]}</Title>
            <Space h="xs" />
            <Title order={2} className="click" onClick={props.handleUeberUns}>{items[current_lang][2]}</Title>
            <Space h="xs" />
            <Title order={2} className="click" onClick={props.handleTermine}>{items[current_lang][3]}</Title>
            <Space h="xs" />
            <Title order={2} className="click" onClick={props.handleNews}>{items[current_lang][4]}</Title>
        </>
    );
}
