// @ts-nocheck
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Image, Text, Title, Badge, Group, Flex, Space, Divider} from "@mantine/core";
import TextToPage from "../../FloatingElement/TextToPage";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import {news1, } from "../../Content/NewsContent";
import {items} from "../../Content/MenuContent";
import Language from "../Footer/Language";

function NewsBox(props: any) {
    let current_lang = props.current_lang; 
    return (
        <div className={"NewsBox"}>
            <TextToPage
                not_fullscreen={true}
                current_lang={props.current_lang}
                showButton={true}
                date={props.date}
                className={"PersonInfoButton"}
                size="xl"
                openingText={
                    <div style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}>
                        <Image className={"NewsImage"}
                               radius="md"
                               src={props.news_id[current_lang][0]}
                               alt="Hier sollte ein Bild sein ..."
                               withPlaceholder
                        />
                        <Space h={"md"} />
                        <Group position="center">
                            <MyTitle content={props.news_id[current_lang][1]} />
                            <Badge color="gray">{props.date}</Badge>
                        </Group>
                        <Space h={"xs"} />
                        <MyContent content={props.news_id[current_lang][2]} />

                        <Space h={"md"} />
                    </div>
                }
                title={<Title order={1}>{props.news_id[current_lang][1]}</Title>}
                content={<Text c="dimmed"> {props.news_id[current_lang][3]} </Text>}
            />
            <Divider />
            <Space h={"xl"} />
        </div>
    );
}

export default function News(props: any) {
    let current_lang = props.current_lang; 
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
                    {/*<NewsBox
                        current_lang={props.current_lang}
                        news_id={news3}
                        date={"15.04.2023"}
                    />
                    <NewsBox
                        current_lang={props.current_lang}
                        news_id={news2}
                        date={"01.04.2023"}
                    />*/}
                    <NewsBox
                        current_lang={props.current_lang}
                        news_id={news1}
                        date={"06.01.2022"}
                    />
                </Flex>
                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang}/>
            </div>
        </>
    );
}
