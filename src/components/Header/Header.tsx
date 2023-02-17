// @ts-nocheck
import React from "react";
import MenuItems from "./MenuItems";
import {Drawer, Group, Title, Input, Text, Kbd, Space} from "@mantine/core";
import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu";
import Seperator from "../Pages/Home/Seperator";
import {openSpotlight} from "@mantine/spotlight";
import {BsSearch} from "@react-icons/all-files/bs/BsSearch";
import {home} from "../Content/HomeContent";

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
                <MenuItems {...props} />
                <Seperator />
                <Group position="left">
                    <Input.Wrapper
                        style={{width: "100%"}}
                        id="search-input"
                        label={
                            <>
                                {home[props.current_lang][4]}
                                &shy;
                                &shy;
                                &shy;
                                <Kbd>⌘ + k</Kbd>
                            </>
                        }
                    >
                        <Space h="xs"/>
                        <Input
                            radius="xl"
                            component="button"
                            icon={<BsSearch />}
                            onClick={() => openSpotlight()}
                            variant="filled"
                            placeholder="Suchen"
                        />
                    </Input.Wrapper>
                </Group>
                <Seperator />
                Made by Raphaele Salvatore Licciardo
            </Drawer>

            <Group position="center" className="MenuOpen" >
                <AiOutlineMenu size={40} onClick={() => props.setOpened(true)} />
            </Group>
        </div>
    );
}
