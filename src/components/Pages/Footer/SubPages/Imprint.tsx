// @ts-nocheck
import React from "react";
import MyTitle from "../../../Utils/MyTitle";
import MyContent from "../../../Utils/MyContent";
import {footer, imprint} from "../../../Content/FooterContent";
import {Title} from "@mantine/core";
import TextToPage from "../../../FloatingElement/TextToPage";

export default function Imprint() {
    let current_lang = window.location.href.split("/")[3] as String;

    return(<TextToPage
                size="xl"
                showButton={true}
                openingText={footer[current_lang][2]}
                title={<Title order={1}>{footer[current_lang][2]}</Title>}
                content={
                <div>
                    <MyTitle content={imprint[current_lang][0]}/>
                    <MyContent content={imprint[current_lang][1]} />

                    <MyTitle content={imprint[current_lang][2]}/>
                    <MyContent content={imprint[current_lang][3]}/>

                    <MyTitle content={imprint[current_lang][4]}/>
                    <MyContent content={imprint[current_lang][5]}/>

                    <MyTitle content={imprint[current_lang][6]}/>
                    <MyContent content={imprint[current_lang][7]}/>

                    <MyTitle content={imprint[current_lang][8]} />
                    <MyContent content={imprint[current_lang][9]} />

                    <MyTitle content={imprint[current_lang][10]} />
                    <MyContent content={imprint[current_lang][11]} />

                    <MyTitle content={imprint[current_lang][12]} />
                    <MyContent content={imprint[current_lang][13]} />

                    <MyTitle content={imprint[current_lang][14]} />
                    <MyContent content={imprint[current_lang][15]} />

                    <MyTitle content={imprint[current_lang][16]} />
                    <MyContent content={imprint[current_lang][17]} />

                </div>
        } />
    );
}
