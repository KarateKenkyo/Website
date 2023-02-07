// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {dojo} from "../../Content/TrainerContent";
import {Container, Space} from "@mantine/core";
import MyContent from "../../Utils/MyContent";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import React from "react";

export default function Location() {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <Container>
            <MyTitle content={dojo[current_lang][0]} />
            <Space h="xl" />
            <MyContent content={dojo[current_lang][1]} />
            <MyContent content={dojo[current_lang][2]} />
            <MapContainer center={[49.105648, 8.281833]} zoom={18} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[49.105648, 8.281833]}>
                    <Popup>{dojo[current_lang][0]}</Popup>
                </Marker>
            </MapContainer>
        </Container>
    );
}
