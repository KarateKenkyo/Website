// @ts-nocheck
import {Accordion, Title, Text} from "@mantine/core";

import TextToPage from "../../../FloatingElement/TextToPage";
import {faq} from "../../../Content/FooterContent";

function AccordionCard(props: any) {
    return (
        <Accordion.Item value={props.id}>
            <Accordion.Control>{props.title}</Accordion.Control>
            <Accordion.Panel>
                <Text c="dimmed" ta="left">
                    {props.text}
                </Text>
            </Accordion.Panel>
        </Accordion.Item>
    );
}

export default function FAQ(props: any) {
    let current_lang = props.current_lang; 
    return (
        <TextToPage
            current_lang={props.current_lang}
            showButton={true}
            openingText={faq[current_lang][0]}
            size="xl"
            title={<Title order={1}>{faq[current_lang][0]}</Title>}
            content={
                <Accordion defaultValue="question11" variant="separated" >

                    <AccordionCard
                        id="question11"
                        title={faq[current_lang][1]}
                        text={faq[current_lang][2]}
                    />

                    <AccordionCard
                        id="question13"
                        title={faq[current_lang][3]}
                        text={faq[current_lang][4]}
                    />

                    <AccordionCard
                        id="question14"
                        title={faq[current_lang][5]}
                        text={faq[current_lang][6]}
                    />

                    <AccordionCard
                        id="question1"
                        title={faq[current_lang][7]}
                        text={faq[current_lang][8]}
                    />

                    <AccordionCard
                        id="question2"
                        title={faq[current_lang][9]}
                        text={faq[current_lang][10]}
                    />

                    <AccordionCard
                        id="question7"
                        title={faq[current_lang][11]}
                        text={faq[current_lang][12]}
                    />

                    <AccordionCard
                        id="question8"
                        title={faq[current_lang][13]}
                        text={faq[current_lang][14]}
                    />

                    <AccordionCard
                        id="question10"
                        title={faq[current_lang][15]}
                        text={faq[current_lang][16]}
                    />

                    <AccordionCard
                        id="question5"
                        title={faq[current_lang][17]}
                        text={faq[current_lang][18]}
                    />

                    <AccordionCard
                        id="question4"
                        title={faq[current_lang][19]}
                        text={faq[current_lang][20]}
                    />

                    <AccordionCard
                        id="question3"
                        title={faq[current_lang][21]}
                        text={faq[current_lang][22]}
                    />

                    <AccordionCard
                        id="question6"
                        title={faq[current_lang][23]}
                        text={faq[current_lang][24]}
                    />

                    <AccordionCard
                        id="question9"
                        title={faq[current_lang][25]}
                        text={faq[current_lang][26]}
                    />

                    <AccordionCard
                        id="question12"
                        title={faq[current_lang][27]}
                        text={faq[current_lang][28]}
                    />

                </Accordion>
            }/>
    );
}
