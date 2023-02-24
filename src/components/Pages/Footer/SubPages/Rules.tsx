// @ts-nocheck
import MyContent from "../../../Utils/MyContent";
import {verhalten} from "../../../Content/FooterContent";
import {Container, Title} from "@mantine/core";

import TextToPage from "../../../FloatingElement/TextToPage";
import MyTitle from "../../../Utils/MyTitle";

export default function Rules(props: any) {
    let current_lang = props.current_lang;     return (
        <TextToPage
            current_lang={props.current_lang}
            size="xl"
            showButton={true}
            openingText={verhalten[current_lang][0]}
            title={<Title order={1}>{verhalten[current_lang][0]}</Title>}
            content={
                <Container>
                    <MyContent content={verhalten[current_lang][2]} />
                    <MyTitle content={verhalten[current_lang][3]} />
                    <MyContent content={verhalten[current_lang][4]} />
                    <MyContent content={verhalten[current_lang][5]} />
                    <MyContent content={verhalten[current_lang][6]} />
                    <MyContent content={verhalten[current_lang][7]} />
                    <MyContent content={verhalten[current_lang][8]} />
                    <MyContent content={verhalten[current_lang][9]} />
                    <MyContent content={verhalten[current_lang][10]} />
                    <MyContent content={verhalten[current_lang][11]} />
                    <MyTitle content={verhalten[current_lang][12]} />
                    <MyContent content={verhalten[current_lang][13]} />
                    <MyContent content={verhalten[current_lang][14]} />
                    <MyContent content={verhalten[current_lang][15]} />
                    <MyContent content={verhalten[current_lang][16]} />
                    <MyTitle content={verhalten[current_lang][17]} />
                    <MyContent content={verhalten[current_lang][18]} />
                    <MyTitle content={verhalten[current_lang][19]} />
                    <MyContent content={verhalten[current_lang][20]} />
                    <MyTitle content={verhalten[current_lang][21]} />
                    <MyContent content={verhalten[current_lang][22]} />
                    <MyTitle content={verhalten[current_lang][23]} />
                    <MyContent content={verhalten[current_lang][24]} />
                    <MyTitle content={verhalten[current_lang][25]} />
                    <MyContent content={verhalten[current_lang][26]} />
                    <MyTitle content={verhalten[current_lang][27]} />
                    <MyContent content={verhalten[current_lang][28]} />
                    <MyTitle content={verhalten[current_lang][29]} />
                    <MyContent content={verhalten[current_lang][30]} />
                    <MyTitle content={verhalten[current_lang][31]} />
                    <MyContent content={verhalten[current_lang][32]} />
                    <MyContent content={verhalten[current_lang][33]} />
                    <MyContent content={verhalten[current_lang][34]} />
                    <MyContent content={verhalten[current_lang][35]} />
                    <MyTitle content={verhalten[current_lang][36]} />
                    <MyContent content={verhalten[current_lang][37]} />
                    <MyTitle content={verhalten[current_lang][38]} />
                    <MyContent content={verhalten[current_lang][39]} />
                    <MyContent content={verhalten[current_lang][40]} />
                </Container>
            }/>
    );
}
