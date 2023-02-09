// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {times} from "../../Content/TrainerContent";
import {Stack, Grid, Container, Space} from "@mantine/core";
import React from "react";
import Cards from "./Cards";

export default function Times(props: any) {
    let current_lang = props.current_lang;     return (
        <Container>
            <MyTitle content={times[current_lang][0]} />
            <Space h="xl" />
            <Stack>
                <Grid>
                    <Grid.Col md={6}>
                        <Cards
                            title={times[current_lang][2]}
                            desc={times[current_lang][3]}
                            day={times[current_lang][4]}
                            time={"18:00 - 19:00"}
                            color={"teal"}
                        />
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Cards
                            title={times[current_lang][10]}
                            desc={times[current_lang][12]}
                            day={times[current_lang][11]}
                            time={"08:00 - 12:00"}
                            color={"grape"}
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
                <Grid>
                    <Grid.Col md={6}>
                        <Cards
                            title={times[current_lang][7]}
                            desc={times[current_lang][9]}
                            day={times[current_lang][8]}
                            time={"18:30 - 20:30"}
                            color={"dark"}
                        />
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Cards
                            title={times[current_lang][5]}
                            desc={times[current_lang][6]}
                            day={times[current_lang][4]}
                            time={"19:00 - 21:00"}
                            color={"orange"}
                        />
                    </Grid.Col>
                </Grid>
            <Cards
                title={times[current_lang][13]}
                desc={times[current_lang][14]}
                day={times[current_lang][11]}
                time={"08:00 - 12:00"}
                color={"red"}
            />
        </Container>
    );
}
