// @ts-nocheck

import MyTitle from "../../../Utils/MyTitle";
import MyContent from "../../../Utils/MyContent";
import {footer, imprint} from "../../../Content/FooterContent";
import {Title, Container} from "@mantine/core";
import TextToPage from "../../../FloatingElement/TextToPage";

export default function Imprint(props: any) {
    let current_lang = props.current_lang; 
    return(<TextToPage
                current_lang={props.current_lang}
                size="xl"
                showButton={true}
                openingText={footer[current_lang][2]}
                title={<Title order={1}>{footer[current_lang][2]}</Title>}
                content={
                <Container>
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

                </Container>
        } />
    );
}
