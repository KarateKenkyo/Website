// @ts-nocheck
import React from "react";
import FooterBody from "../Footer/FooterBody";
import {Space, /*Container, Flex*/} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import Quote from "./Quote";
import {home, succ} from "../../Content/HomeContent";
import Language from "../Footer/Language";
import MyContent from "../../Utils/MyContent";
//import Seperator from "./Seperator";

export default function Home(props: any) {
    let current_lang = props.current_lang; 
    return (
        <>
            <div className={"HomeBody"}>
                <Space h={"xl"}/>
                <MyTitle order={1} content={"Karateverein Kenkyo Rheinzabern e.V."}/>

                <Quote author={succ[current_lang][5]} text={succ[current_lang][4]}/>

                <MyContent content={home[current_lang][0]} />
                <MyContent content={home[current_lang][1]} />
                <MyContent content={home[current_lang][2]} />
                {/*<Seperator />
                <MyTitle order={2} content={"3 Säulen von Karate"}/>
                <Space h="md" />
                <Flex
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="flex-start"
                    direction="row"
                    wrap="wrap"
                >
                    <div>
                        <MyTitle order={3} content={"Kihon"}/>
                        <MyTitle order={6} content={"Technik Training"}/>
                        <Container>
                            <MyContent content={"Inhaltlich wird Karate durch waffenlose Techniken charakterisiert, vor allem Schlag-, Stoß-, Tritt- und Blocktechniken sowie Fußfeger. Hebel und Würfe werden ebenfalls gelehrt. Auch die körperliche Konditionierung und Abhärtung sind Teil des Trainings."} />
                        </Container>
                    </div>
                    <Space w="xl" />
                    <div>
                        <MyTitle order={3} content={"Kata"}/>
                        <MyTitle order={6} content={"Perfektion der Form"}/>
                        <Container>
                            <MyContent content={"Eine Kata besteht aus einem festgelegten Ablauf von Bewegungen. Jede Kata hat spezifische Schwerpunkte in Bezug auf Technik und Kondition, außerdem werden mit jeder Kata werden auch Ideen für Kampfverhalten in unterschiedlichen Situationen vermittelt."} />
                        </Container>
                    </div>
                    <Space w="xl" />
                    <div>
                        <MyTitle order={3} content={"Kumite"}/>
                        <MyTitle order={6} content={"Partner Training"}/>
                        <Container>
                            <MyContent content={"Das Kumite-Training führt Schritt für Schritt zum kämpfen. Dazu gehören Übungen mit abgestimmten Angriffs- und Abwehrbewegungen, Distanz- und Timingübungen und natürlich das Kämpfen ohne Vorgaben und Absprache."} />
                        </Container>
                    </div>
                </Flex>*/}
                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang} />
            </div>
        </>
    );
}


