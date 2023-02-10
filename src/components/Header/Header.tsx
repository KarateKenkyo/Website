import React from "react";
import MenuItems from "./MenuItems";
import {Drawer, Group} from "@mantine/core";
import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu";

export default function Header(props: any) {

    return (
        <div className={"DesktopHeader"} id={"DesktopHeader"}>
            <Drawer
                opened={props.opened}
                onClose={() => props.setOpened(false)}
                padding="xl"
                size="xl"
                overlayOpacity={0.55}
                overlayBlur={3}
            >
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
            </Drawer>

            <Group position="center" className="MenuOpen" >
                <AiOutlineMenu size={55} onClick={() => props.setOpened(true)} />
            </Group>
        </div>
    );
}
