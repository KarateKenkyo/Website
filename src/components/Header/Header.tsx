import React from "react";
import MenuItems from "./MenuItems";
import {Drawer, Group, Title} from "@mantine/core";
import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu";
import Seperator from "../Pages/Home/Seperator";

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
                <Title order={1}>KENKYO</Title>
                <Seperator />
                <MenuItems
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
                <div>
                    <Title order={4}>Vorstand</Title>
                    <div>Zsolt Penderik</div>
                    <div>Rappengasse 32</div>
                    <div>76764 Rheinzabern</div>
                </div>
                <Seperator />
            </Drawer>

            <Group position="center" className="MenuOpen" >
                <AiOutlineMenu size={55} onClick={() => props.setOpened(true)} />
            </Group>
        </div>
    );
}
