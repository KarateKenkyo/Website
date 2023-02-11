// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {dojo} from "../../Content/TrainerContent";
import {Container, Space} from "@mantine/core";
import MyContent from "../../Utils/MyContent";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import React from "react";
import Seperator from "../Home/Seperator";
import FooterBody from "../Footer/FooterBody";
import Language from "../Footer/Language";

export default function Location(props: any) {
    let current_lang = props.current_lang;
    return (
        <div className={"TrainerBody"}>
            <Space h={"xl"} />
            <MyTitle order={1} content={dojo[current_lang][0]}/>
            <Seperator />
            <Container>
                <MyContent content={dojo[current_lang][1]} />
                <MyContent content={dojo[current_lang][2]} />
            </Container>
            <MapContainer center={[49.105648, 8.281833]} zoom={18} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[49.105648, 8.281833]}>
                    <Popup>{dojo[current_lang][0]}</Popup>
                </Marker>
            </MapContainer>
            <FooterBody current_lang={props.current_lang}/>
            <Language setCurrentLang={props.setCurrentLang} />
        </div>
    );
}
