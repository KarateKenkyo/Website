// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {Stack, Container, Grid, Space} from "@mantine/core";
import MyContent from "../../Utils/MyContent";
import Kontakt from "../Footer/SubPages/Kontakt";
import React from "react";
import {offers} from "../../Content/TrainerContent";
import Cards from "./Cards";
import Seperator from "../Home/Seperator";
import FooterBody from "../Footer/FooterBody";
import Language from "../Footer/Language";

export default function Offers(props: any) {
    let current_lang = props.current_lang;
    return (
        <div className={"TrainerBody"}>
            <Space h={"xl"} />
            <MyTitle order={1} content={offers[current_lang][0]}/>
            <Seperator />
            <Container>
                <MyContent content={offers[current_lang][1]} />
                <Kontakt button={true} current_lang={props.current_lang}/>
                <Space h="lg" />
                <MyContent content={offers[current_lang][13]} />
                <Space h="xl" />

                <Stack>
                    <Grid>
                        <Grid.Col md={6}>
                            <Cards
                                title={offers[current_lang][2]}
                                desc={offers[current_lang][3]}
                                time={"65€ / 6 " + offers[current_lang][12]}
                                color={"teal"}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Cards
                                title={offers[current_lang][6]}
                                desc={offers[current_lang][7]}
                                time={"55€ / 6 " + offers[current_lang][12]}
                                color={"grape"}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid>
                        <Grid.Col md={6}>
                            <Cards
                                title={offers[current_lang][8]}
                                desc={offers[current_lang][9]}
                                time={"45€ / 6 " + offers[current_lang][12]}
                                color={"orange"}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Cards
                                title={offers[current_lang][4]}
                                desc={offers[current_lang][5]}
                                time={"35€ / 6 " + offers[current_lang][12]}
                                color={"yellow"}
                            />
                        </Grid.Col>
                    </Grid>
                    <Cards
                        title={offers[current_lang][10]}
                        desc={offers[current_lang][11]}
                        time={"30€ / 3 " + offers[current_lang][12]}
                        color={"pink"}
                    />
                </Stack>
            </Container>
            <FooterBody current_lang={props.current_lang}/>
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}
