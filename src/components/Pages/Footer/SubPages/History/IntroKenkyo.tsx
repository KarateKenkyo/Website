import {Table, Title} from "@mantine/core";

import TextToPage from "../../../../FloatingElement/TextToPage";
import Seperator from "../../../Home/Seperator";

export default function IntroKenkyo() {

    const foundersHerxheim = [
        {
            date: "06.01.2023",
            first: "Zsolt Penderik",
            second: "Raphaele Salvatore Licciardo",
            finances: "Michael Kupper",
            writing: "Dr. Evi Gleibs",
        },
    ]

    const foundersRow = foundersHerxheim.map((data) => (
        <tr>
            <td>{data.date}</td>
            <td>{data.first}</td>
            <td>{data.second}</td>
            <td>{data.finances}</td>
            <td>{data.writing}</td>
        </tr>
    ));

    return (
        <div>
            <Seperator />
            <TextToPage
                size="xl"
                openingText={"Vorstand seit Gründung"}
                title={
                    <Title order={1}>
                        Vorstand seit Gründung
                    </Title>
                }
                content={
                    <div>
                        <Table withColumnBorders highlightOnHover>
                            <thead>
                                <tr>
                                    <th>Datum</th>
                                    <th>Vorstand</th>
                                    <th>Stellvertretende*r Vorstand*in</th>
                                    <th>Kassenwart*in</th>
                                    <th>Schriftführer*in</th>
                                </tr>
                            </thead>
                            <tbody>{foundersRow}</tbody>
                        </Table>
                    </div>
                }
            />
            <Seperator />
        </div>
    );
}
