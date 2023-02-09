import React from "react";
import MenuItems from "./MenuItems";

export default function Header(props: any) {

    return (
        <div className={"DesktopHeader"} id={"DesktopHeader"}>
            <MenuItems
                showHome={props.showHome}
                showUeberUns={props.showUeberUns}
                showTraining={props.showTraining}
                showTermine={props.showTermine}
                showNews={props.showNews}
                current_lang={props.current_lang}
            />
        </div>
    );
}
