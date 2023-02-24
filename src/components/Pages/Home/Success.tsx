// @ts-nocheck
import {Container, Flex} from "@mantine/core";
import Card from "./Card";
import {GiBlackBelt} from "@react-icons/all-files/gi/GiBlackBelt";
import {BsPersonCheck} from "@react-icons/all-files/bs/BsPersonCheck";
import {IoTrophyOutline} from "@react-icons/all-files/io5/IoTrophyOutline";
import {succ} from "../../Content/HomeContent";
import {IoSchoolOutline} from "@react-icons/all-files/io5/IoSchoolOutline";
import Seperator from "./Seperator";


export default function Success() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <>
            <Seperator/>
            <Container>
                <Flex
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Card logo={<GiBlackBelt size={50}/>} title={succ[current_lang][0]} count={"4"}/>
                    <Card logo={<BsPersonCheck size={50}/>} title={succ[current_lang][2]} count={"6"}/>
                    <Card logo={<IoTrophyOutline size={50}/>} title={succ[current_lang][3]} count={"2"}/>
                    <Card logo={<IoSchoolOutline size={50}/>} title={succ[current_lang][1]} count={"1"}/>
                </Flex>
            </Container>
            <Seperator/>
        </>
    );
}