// @ts-nocheck
import {List, Title} from "@mantine/core";
import React from "react";
import MyTitle from "../../../Utils/MyTitle";
import MyContent from "../../../Utils/MyContent";
import {footer, privacy} from "../../../Content/FooterContent";
import TextToPage from "../../../FloatingElement/TextToPage";

export default function Privacy() {
    let current_lang = window.location.href.split("/")[3] as String;

    return(
        <TextToPage
            size="xl"
            showButton={true}
            openingText={footer[current_lang][3]}
            title={<Title order={1}>{footer[current_lang][3]}</Title>}
            content={
            <div>
                <MyContent content={privacy[current_lang][0]} />

                <MyTitle content={privacy[current_lang][1]} />
                <MyContent content={privacy[current_lang][2]}/>

                <MyTitle content={privacy[current_lang][3]}/>
                <MyContent content={
                    <List>
                        <List.Item>{privacy[current_lang][4]}</List.Item>
                        <List.Item>{privacy[current_lang][5]}</List.Item>
                        <List.Item>{privacy[current_lang][6]}</List.Item>
                        <List.Item>{privacy[current_lang][7]}</List.Item>
                        <List.Item>{privacy[current_lang][8]}</List.Item>
                    </List>
                }/>

                <MyTitle content={privacy[current_lang][9]}/>
                <MyContent content={privacy[current_lang][10]}/>

                <MyTitle content={privacy[current_lang][11]}/>
                <MyContent content={
                    <List>
                        <List.Item>{privacy[current_lang][12]}</List.Item>
                        <List.Item>{privacy[current_lang][13]}</List.Item>
                        <List.Item>{privacy[current_lang][14]}</List.Item>
                        <List.Item>{privacy[current_lang][15]}</List.Item>
                    </List>
                }/>

                <MyTitle content={privacy[current_lang][16]}/>
                <MyContent content={privacy[current_lang][17]}/>

                <MyTitle content={privacy[current_lang][18]}/>
                <MyContent content={privacy[current_lang][19]}/>

                <MyTitle content={privacy[current_lang][20]}/>
                <MyContent content={privacy[current_lang][21]}/>

                <MyTitle content={privacy[current_lang][22]}/>
                <MyContent content={privacy[current_lang][23]}/>

                <MyTitle content={privacy[current_lang][24]}/>
                <MyContent content={privacy[current_lang][25]}/>

                <MyTitle content={privacy[current_lang][26]}/>
                <MyContent content={privacy[current_lang][27]}/>

                <MyTitle content={privacy[current_lang][28]}/>
                <MyContent content={privacy[current_lang][29]}/>

                <MyTitle content={privacy[current_lang][30]}/>
                <MyContent content={privacy[current_lang][31]}/>

                <MyTitle content={privacy[current_lang][32]}/>
                <MyContent content={privacy[current_lang][33]}/>

                <MyTitle content={privacy[current_lang][34]}/>
                <MyContent content={privacy[current_lang][35]}/>

                <MyTitle content={privacy[current_lang][36]}/>
                <MyContent content={privacy[current_lang][37]}/>

                <MyTitle content={privacy[current_lang][38]}/>
                <MyContent content={privacy[current_lang][39]}/>

                <MyTitle content={privacy[current_lang][40]}/>
                <MyContent content={privacy[current_lang][41]}/>

                <MyTitle content={privacy[current_lang][42]}/>
                <MyContent content={privacy[current_lang][43]}/>
            </div>
        } />
    );
}
