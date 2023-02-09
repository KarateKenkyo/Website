// @ts-nocheck
import {Text} from "@mantine/core";
import React from "react";
import MyTitle from "../../../../Utils/MyTitle";
import MyContent from "../../../../Utils/MyContent";
import TextToPicture from "../../../../FloatingElement/TextToPicture";
import {gojuryu} from "../../../../Content/FooterContent";

export default function IntroGojuRyu(props: any) {
    let current_lang = props.current_lang; //props.current_lang; //window.location.href.split("/")[3] as String;
    return (
        <div>
            <Text>
                <MyTitle content={
                    <TextToPicture
                        size="lg"
                        label={gojuryu[current_lang][0]}
                        text={"剛柔流 - Gōjū-Ryū"}
                        pic={
                            "https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/KarateHistoryOverview.png"
                        }
                    />
                    }/>

                <MyContent dimmed={true} content={gojuryu[current_lang][1]} />

                <MyContent dimmed={true} content={gojuryu[current_lang][2]} />
            </Text>
        </div>
);

}
