// @ts-nocheck
import {Accordion, Title, Text} from "@mantine/core";
import React from "react";
import TextToPage from "../../../FloatingElement/TextToPage";

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
    // let current_lang = window.location.href.split("/")[3] as String;

    return (
        <TextToPage
            showButton={true}
            openingText={"Häufige Fragen"}
            size="xl"
            title={<Title order={1}>{"Häufige Fragen"}</Title>}
            content={
            <Accordion defaultValue="question11" variant="separated" >

                <AccordionCard
                    id="question11"
                    title="Was ist Karate?"
                    text="Karate ist eine japanische Kampfsportart, die sowohl körperliche als auch mentale Fähigkeiten trainiert. Es umfasst eine Vielzahl von Techniken, einschließlich Faust- und Fußstößen, Blocks, Schlägen und Hebeln. Die Philosophie des Karate zielt darauf ab, die Kontrolle über den eigenen Körper und Geist zu erlangen, um besser auf Konflikte und Herausforderungen im Leben reagieren zu können. Karate kann als Mittel zur Selbstverteidigung, als Fitnessübung und als Möglichkeit, innere Ruhe und Konzentration zu erlangen, betrachtet werden."
                />

                <AccordionCard
                    id="question13"
                    title="Warum Goju-Ryu Karate?"
                    text="Es ist wichtig zu beachten, dass jeder Stil seine eigenen Stärken hat und es wichtig ist, den richtigen Stil für einen selbst zu finden. Goju-Ryu Karate vereint harte und weiche Techniken, was es zu einem ausgewogenen Stil macht."
                />

                <AccordionCard
                    id="question14"
                    title="Warum der Karateverein Kenkyo?"
                    text="Wir bieten einige Speziall Kurse an, welche einmalig sind (zumindest hier im Umkreis). Wir bieten unter anderem ein Training für unsere Älteren Mitglieder an. Hat man eine Verletztung oder ist in einem gewissen Alter, kann man daran Teilnehmen und wird speziell auf deren Wünsche und Probleme Traininiert. Ebenfalls ist unser Trainingspersonal auf das Training mit Kinder geschult und geprüft worden. Im weiteren haben die meisten Gründer und Trainer bereits Erfahrung in anderen Kampfsportarten und können somit auch auf den Hintergrund des jeweiligen Athleten rücksicht nehmen."
                />

                <AccordionCard
                    id="question1"
                    title="Welche Kosten kommen noch?"
                    text="Neben der 20€ Verwaltungskosten, kommt lediglich der Karateanzug noch hinzu. Alles weitere wie Wettkampfkleidung, Faustschützer, Tiefschutz (und Brustschutz bei Frauen) und weiteres, stellt der Verein fürs erste. Sollten aber im Verlauf der Mitgliedschaft selber bereitgestellt werden. Ebenfalls muss zu Beginn einer Mitgliedschaft ein Karateausweiß erworben werden. Jedes Jahr, wird zudem eine Jahresmarke fällig."
                />

                <AccordionCard
                    id="question2"
                    title="Kann ich mir ein Training ansehen kommen?"
                    text="Jederzeit! Wir freuen uns auf deinen Besuch. Schreibe uns am besten eine E-Mail das ein Qualifizierter Ansprechpartner auch vor Ort ist."
                />

                <AccordionCard
                    id="question7"
                    title="Welche Mitgliedschaft ist für mich am besten?"
                    text="Das lässt sich nicht verallgemeinert beantworten, meldet euch einfach gerne an ein Vorstandsmitglied / Gründer. Wir beraten euch gerne!"
                />

                <AccordionCard
                    id="question8"
                    title="Ich mache bereits Kampfsport, ist es Ratsam noch eine weitere (Karate) anzufangen?"
                    text="Unsere Fachkundigen Trainer sind selbst in verschiedenen Kampfsportarten ausgebildet und Erfolgreich, wir besitzten neben Karate noch Erfahrungen in Kung Fu, Boxen, Thai Boxen und Judo. Somit kann auf deine bisherige Erfahrung Rücksicht genommen werden. Dennoch hängt es von deinem Willen und deinen Vorerfahrungen ab."
                />

                <AccordionCard
                    id="question10"
                    title="Ich habe Vorerkrankungen, kann ich trotzdem Karate betreiben?"
                    text="JA! Durch regelmäßiges Karatetraining lassen sich (unter anderem) positive Veränderungen in der Gesamtmuskulatur, Herz- Kreislaufsystem, Gleichgewichtssinn und Motorischen Fähigkeiten vermerken. Es gibt Vorstandsmitglieder welche ebenfalls trotz diverser Vorerkrankungen in Karate erfolgreich sind."
                />

                <AccordionCard
                    id="question5"
                    title="Was ist das mindestalter um Teilnehmen zu dürfen?"
                    text="6 Jahre."
                />

                <AccordionCard
                    id="question4"
                    title="Woher bekomme ich den Karateanzug, Karateausweiß und Jahresmarken?"
                    text="Karateausweiß und Jahrsmarken bekommt ihr von uns. Den Karateanzug (+ Gürtel) könnt ihr entweder bei uns bestellen oder im Internet."
                />

                <AccordionCard
                    id="question3"
                    title="Wie läuft ein Probetraining ab?"
                    text="Ein Gasttraining läuft zunächst wie jedes andere Training ab. Vor- und Nach dem Training hast du die Möglichkeit dich mit den anderen Mitglieder zu unterhalten. Selbstverständlich beraten wir dich anschließend. Vergisst das Trinken und Sportklamotten nicht :"
                />


                <AccordionCard
                    id="question6"
                    title="Was ist eine Kurzmitgliedschaft?"
                    text="Bei einer Kurzmitgliedschaft zahlt ihr einmalig einen Beitrag, damit seit Ihr für 3 Monate Mitglied unseres Vereins und dürft am Training teilnehmen. Nach den 3 Monaten könnt ihr dieses Angebot nicht nocheinmal buchen, falls ihr also Interesse an dem Karateverein Kenkyo habt, meldet euch gerne mit einer Vollen Mitgliedschaft an."
                />


                <AccordionCard
                    id="question9"
                    title="Muss ich Prüfungen absolvieren? Wie würde eine ablaufen?"
                text="Grundsätzlich musst du keine absolvieren! Jedoch wächst du dann in deinem Fortschritt auch nicht besonders. Daher empfehlen wir es. Unten findest du das Prüfungsprogramm, wir bereiten dich ausreichend darauf vor. Bei Kyu Prüfungen (Farbgürteln) stellst du dein Prüfungsprogramm unserem Sensei Zsolt Penderik vor. Meistens auch einem weiteren Co-Prüfer."
                />

                <AccordionCard
                    id="question12"
                    title="Wo Kündige ich?"
                    text="Weiter unten haben wir eine Kündigungsvorlage, gebe Sie dem Vorstand einfach ab."
                />


            </Accordion>
            }/>
    );
}
