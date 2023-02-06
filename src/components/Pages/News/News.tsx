// @ts-nocheck
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Avatar, Badge, Group, Flex, Space, Divider} from "@mantine/core";
import PictureToPicture from "../../FloatingElement/PictureToPicture";
import {news1, news2} from "../../Content/NewsContent";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import {items} from "../../Content/MenuContent";
import Language from "../Footer/Language";

function NewsBox(props: any) {
    let current_lang = window.location.href.split("/")[3] as String;

    function getInitials(name: any) {
        if (name) {
            var matches = name.match(/\b(\w)/g);
            var acronym = matches.join('');
            return acronym;
        }
    }

    function getColor(name: any) {
        let names = ["RL", "ZP", "MK", "EG", "MP", "DK", "ML"];
        let colors = ["blue", "pink", "green", "orange", "indigo", "red", "cyan"];
        return colors[names.indexOf(getInitials(name))];
    }

    return (
        <div className={"NewsBox"}>
            <div style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="Avatar">
                    <Avatar.Group spacing="sm">
                        {props.cont7 && <Avatar src={null} alt={props.cont7} color={getColor(props.cont7)} radius="xl">{getInitials(props.cont7)}</Avatar>}
                        {props.cont6 && <Avatar src={null} alt={props.cont6} color={getColor(props.cont6)} radius="xl">{getInitials(props.cont6)}</Avatar>}
                        {props.cont5 && <Avatar src={null} alt={props.cont5} color={getColor(props.cont5)} radius="xl">{getInitials(props.cont5)}</Avatar>}
                        {props.cont4 && <Avatar src={null} alt={props.cont4} color={getColor(props.cont4)} radius="xl">{getInitials(props.cont4)}</Avatar>}
                        {props.cont3 && <Avatar src={null} alt={props.cont3} color={getColor(props.cont3)} radius="xl">{getInitials(props.cont3)}</Avatar>}
                        {props.cont2 && <Avatar src={null} alt={props.cont2} color={getColor(props.cont2)} radius="xl">{getInitials(props.cont2)}</Avatar>}
                        {props.cont1 && <Avatar src={null} alt={props.cont1} color={getColor(props.cont1)} radius="xl">{getInitials(props.cont1)}</Avatar>}
                    </Avatar.Group>
                </div>
                <PictureToPicture
                    label={props.news_id[current_lang][1]}
                    pic={props.news_id[current_lang][0]}
                    size={"xl"}
                    full_content={<div>{props.news_id[current_lang][3]}</div>}
                />
                <Space h={"md"} />
                <Group position="center">
                    <MyTitle content={props.news_id[current_lang][1]} />
                    <Badge color="gray">{props.date}</Badge>
                </Group>
                <MyContent content={props.news_id[current_lang][2]} />
            </div>
            <Divider />
            <Space h={"xl"} />
        </div>
    );
}

export default function News() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <>
            <div className={"NewsBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][4]} />
                
                <Seperator />

                <Flex
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <NewsBox
                        news_id={news2}
                        date={"01.04.2023"}
                        cont1={"Raphaele Licciardo"}
                        cont2={"Zsolt Penderik"}
                    />
                    <NewsBox
                        news_id={news1}
                        date={"06.01.2022"}
                        cont1={"Zsolt Penderik"}
                        cont2={"Raphaele Licciardo"}
                        cont3={"Michael Kupper"}
                        cont4={"Evi Gleibs"}
                        cont5={"Monika Penderik"}
                        cont6={"Darja Kuklinski"}
                        cont7={"Maria Licciardo"}
                    />
                </Flex>
                <FooterBody />
                <Language />
            </div>
        </>
    );
}
