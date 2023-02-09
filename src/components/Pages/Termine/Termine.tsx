// @ts-nocheck
import FooterBody from "../Footer/FooterBody";
import React, {useState} from "react";
import Seperator from "../Home/Seperator";
import {Center, Space, Table} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import {items} from "../../Content/MenuContent";
import Language from "../Footer/Language";
import {noTermine, termine, termineHeader} from "../../Content/TermineContent";

export default function Termine(props: any) {
    let current_lang = props.current_lang;
    const [noData, setNoData] = useState(termine[current_lang].length === 0);
    let rows: any;
    for (let i = 0; i < termine[current_lang].length; i++) {
        rows = termine[current_lang].map((e) => (
            <tr key={e.name}>
                <td><Center>{e.event}</Center></td>
                <td><Center>{e.date}</Center></td>
                <td><Center>{e.location}</Center></td>
                <td><Center>{e.organizer}</Center></td>
            </tr>
        ));
    }

    console.log(noData);
    if (noData) {
        return (
            <div className={"WeiteresBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][3]} />

                <Seperator />
                <Table verticalSpacing="xs" highlightOnHover>
                    <thead>
                    <tr>
                        <th><Center>{termineHeader[current_lang][0]}</Center></th>
                        <th><Center>{termineHeader[current_lang][1]}</Center></th>
                        <th><Center>{termineHeader[current_lang][2]}</Center></th>
                        <th><Center>{termineHeader[current_lang][3]}</Center></th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>

                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang}/>
            </div>
        );

    } else {
        return (
            <div className={"WeiteresBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][3]} />

                <Seperator />
                <MyContent content={noTermine[current_lang]} />

                <FooterBody current_lang={props.current_lang}/>
                <Language setCurrentLang={props.setCurrentLang}/>
            </div>
        );
    }
}
