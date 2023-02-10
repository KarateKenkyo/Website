import React from "react";
import MenuItems from "./MenuItems";
import {Drawer, Group, Title, Input, Text} from "@mantine/core";
import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu";
import Seperator from "../Pages/Home/Seperator";
import {openSpotlight} from "@mantine/spotlight";
import {BsSearch} from "@react-icons/all-files/bs/BsSearch";

export default function Header(props: any) {

    return (
        <div className={"DesktopHeader"} id={"DesktopHeader"}>
            <Drawer
                transition="rotate-left"
                transitionDuration={250}
                transitionTimingFunction="ease"
                opened={props.opened}
                onClose={() => props.setOpened(false)}
                padding="xl"
                size="xl"
                overlayOpacity={0.55}
                overlayBlur={3}
            >
                <Title order={1}>KENKYO</Title><Text c="dimmed">Staging Umgebung (also nur eine Demo)</Text>
                <Seperator />
                <MenuItems
                    handleHome={props.handleHome}
                    handleTraining={props.handleTraining}
                    handleUeberUns={props.handleUeberUns}
                    handleTermine={props.handleTermine}
                    handleNews={props.handleNews}
                    scrollTo={props.scrollTo}
                    opened={props.opened}
                    setOpened={props.setOpened}
                    showHome={props.showHome}
                    showUeberUns={props.showUeberUns}
                    showTraining={props.showTraining}
                    showTermine={props.showTermine}
                    showNews={props.showNews}
                    current_lang={props.current_lang}
                />
                <Seperator />
                <Group position="left">
                    <Input.Wrapper
                        style={{width: "100%"}}
                        id="search-input"
                        label="Durchsuche die Hauptseiten"
                        description="Diese Funktion ist in aktiver Entwicklung und kann daher noch
                                        Fehler beinhalten"
                    >
                        <Input
                            className="click"
                            radius="xl"
                            component="button"
                            icon={<BsSearch />}
                            onClick={() => openSpotlight()}
                            variant="filled"
                            placeholder="Suchen"
                        />
                    </Input.Wrapper>
                </Group>
            </Drawer>

            <Group position="center" className="MenuOpen" >
                <AiOutlineMenu size={55} onClick={() => props.setOpened(true)} />
            </Group>
        </div>
    );
}
