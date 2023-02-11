// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {times} from "../../Content/TrainerContent";
import {Grid, Container, Space} from "@mantine/core";
import React from "react";
import Cards from "./Cards";
import Seperator from "../Home/Seperator";
import FooterBody from "../Footer/FooterBody";
import Language from "../Footer/Language";

export default function Times(props: any) {
    let current_lang = props.current_lang;

    return (
        <div className={"TrainerBody"}>
            <Space h={"xl"} />
            <MyTitle order={1} content={times[current_lang][0]}/>
            <Seperator />
            <Container>
                <Grid>
                    <Grid.Col md={6}>
                        <Cards
                            title={times[current_lang][2]}
                            desc={times[current_lang][3]}
                            day={times[current_lang][4]}
                            time={"18:00 - 19:00"}
                            color={"teal"}
                            trainer1={"Zsolt"}
                            trainer2={"Monika"}
                            trainer3={"Raphaele"}
                            trainer4={"Michael"}
                            trainer5={"Evi"}
                        />
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Cards
                            title={times[current_lang][5]}
                            desc={times[current_lang][6]}
                            day={times[current_lang][4]}
                            time={"19:00 - 20:30"}
                            color={"orange"}
                            trainer1={"Zsolt"}
                        />
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col md={6}>
                        <Cards
                            title={times[current_lang][7]}
                            desc={times[current_lang][9]}
                            day={times[current_lang][8]}
                            time={"18:30 - 20:30"}
                            color={"dark"}
                            trainer1={"Zsolt"}
                        />
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Cards
                            title={times[current_lang][10]}
                            desc={times[current_lang][12]}
                            day={times[current_lang][11]}
                            time={"08:00 - 12:00"}
                            color={"grape"}
                            trainer1={"Zsolt"}
                            trainer2={"Raphaele"}
                        />
                    </Grid.Col>
                </Grid>
                <Cards
                    title={times[current_lang][13]}
                    desc={times[current_lang][14]}
                    day={times[current_lang][11]}
                    time={"08:00 - 12:00"}
                    color={"red"}
                    trainer1={"Zsolt"}
                />
            </Container>

            <FooterBody current_lang={props.current_lang}/>
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}
