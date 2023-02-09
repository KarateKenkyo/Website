// @ts-nocheck
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Image, Text, Button, Title, Badge, Group, Flex, Space, Divider} from "@mantine/core";
import TextToPage from "../../FloatingElement/TextToPage";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import {news1, news2, news3} from "../../Content/NewsContent";
import {items} from "../../Content/MenuContent";
import {personsContent} from "../../Content/PersonsContent";
import Language from "../Footer/Language";

function NewsBox(props: any) {
    let current_lang = props.current_lang; 
    return (
        <div className={"NewsBox"}>
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
                <TextToPage
                    current_lang={props.current_lang}
                    showButton={true}
                    date={props.date}
                    type={props.news_id[current_lang][4]}
                    cont1={props.cont1}
                    cont2={props.cont2}
                    cont3={props.cont3}
                    cont4={props.cont4}
                    cont5={props.cont5}
                    cont6={props.cont6}
                    cont7={props.cont7}
                    className={"PersonInfoButton"}
                    size="xl"
                    openingText={
                        <Button
                            color="dark"
                            fullWidth
                            mt="md"
                            radius="md"
                        >
                            {personsContent[current_lang][9]}
                        </Button>
                    }
                    title={<Title order={1}>{props.news_id[current_lang][1]}</Title>}
                    content={
                        <>
                            <Image
                                radius="md"
                                src={props.news_id[current_lang][0]}
                                alt="Hier sollte ein Bild sein ..."
                                withPlaceholder
                            />
                            <Space h={"xl"} />
                            <Text c="dimmed">
                                {props.news_id[current_lang][3]}
                            </Text>
                        </>
                    } />
                <Space h={"md"} />
            </div>
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

                    <NewsBox
                        current_lang={props.current_lang}
                        news_id={news3}
                        date={"15.04.2023"}
                        cont1={"Zsolt Penderik"}
                        cont2={"Raphaele Licciardo"}
                        cont3={"Michael Kupper"}
                        cont4={"Evi Gleibs"}
                        cont5={"Monika Penderik"}
                    />
                    <NewsBox
                        current_lang={props.current_lang}
                        news_id={news2}
                        date={"01.04.2023"}
                        cont1={"Zsolt Penderik"}
                        cont2={"Raphaele Licciardo"}
                        cont3={"Monika Penderik"}
                        cont4={"Maria Licciardo"}
                    />
                    <NewsBox
                        current_lang={props.current_lang}
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
                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang}/>
            </div>
        </>
    );
}
