// @ts-nocheck
import React from "react";
import {items} from "../Content/MenuContent";
import {Title, Space} from "@mantine/core";

export default function MenuItems(props: any) {
    let current_lang = props.current_lang;//window.location.href.split("/")[3] as String;

    function handleHome() {
        props.scrollTo({ y: 0 });
        props.setOpened(false);
        props.showHome(true);
        props.showTraining(false);
        props.showUeberUns(false);
        props.showTermine(false);
        props.showNews(false);
    }

    function handleTraining() {
        props.scrollTo({ y: 0 });
        props.setOpened(false);
        props.showHome(false);
        props.showTraining(true);
        props.showUeberUns(false);
        props.showTermine(false);
        props.showNews(false);
    }

    function handleUeberUns() {
        props.scrollTo({ y: 0 });
        props.setOpened(false);
        props.showHome(false);
        props.showTraining(false);
        props.showUeberUns(true);
        props.showTermine(false);
        props.showNews(false);
    }

    function handleTermine() {
        props.scrollTo({ y: 0 });
        props.setOpened(false);
        props.showHome(false);
        props.showTraining(false);
        props.showUeberUns(false);
        props.showTermine(true);
        props.showNews(false);
    }

    function handleNews() {
        props.scrollTo({ y: 0 });
        props.setOpened(false);
        props.showHome(false);
        props.showTraining(false);
        props.showUeberUns(false);
        props.showTermine(false);
        props.showNews(true);
    }

    return (
        <>
            <Title order={1} className="click" onClick={handleHome}>{items[current_lang][0]}</Title>
            <Space h="xl" />
            <Title order={1} className="click" onClick={handleTraining}>{items[current_lang][1]}</Title>
            <Space h="xl" />
            <Title order={1} className="click" onClick={handleUeberUns}>{items[current_lang][2]}</Title>
            <Space h="xl" />
            <Title order={1} className="click" onClick={handleTermine}>{items[current_lang][3]}</Title>
            <Space h="xl" />
            <Title order={1} className="click" onClick={handleNews}>{items[current_lang][4]}</Title>
        </>
    );
}
