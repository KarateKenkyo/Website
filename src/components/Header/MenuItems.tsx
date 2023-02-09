// @ts-nocheck
import React from "react";
import {items} from "../Content/MenuContent";
import {Text} from "@mantine/core";

export default function MenuItems(props: any) {
    let current_lang = props.current_lang;//window.location.href.split("/")[3] as String;

    function handleHome() {
        props.showHome(true);
        props.showTraining(false);
        props.showUeberUns(false);
        props.showTermine(false);
        props.showNews(false);
    }

    function handleTraining() {
        props.showHome(false);
        props.showTraining(true);
        props.showUeberUns(false);
        props.showTermine(false);
        props.showNews(false);
    }

    function handleUeberUns() {
        props.showHome(false);
        props.showTraining(false);
        props.showUeberUns(true);
        props.showTermine(false);
        props.showNews(false);
    }

    function handleTermine() {
        props.showHome(false);
        props.showTraining(false);
        props.showUeberUns(false);
        props.showTermine(true);
        props.showNews(false);
    }

    function handleNews() {
        props.showHome(false);
        props.showTraining(false);
        props.showUeberUns(false);
        props.showTermine(false);
        props.showNews(true);
    }

    return (
        <ul>
            <li>
                <Text className="MenuItem" onClick={handleHome}>{items[current_lang][0]}</Text>
            </li>
            <li>
                <Text className="MenuItem" onClick={handleTraining}>{items[current_lang][1]}</Text>
            </li>
            <li>
                <Text className="MenuItem" onClick={handleUeberUns}>{items[current_lang][2]}</Text>
            </li>
            <li>
                <Text className="MenuItem" onClick={handleTermine}>{items[current_lang][3]}</Text>
            </li>
            <li>
                <Text className="MenuItem" onClick={handleNews}>{items[current_lang][4]}</Text>
            </li>
        </ul>
    );
}
