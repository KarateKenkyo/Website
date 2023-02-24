// @ts-nocheck
import { Image } from "@mantine/core";


export default function Language(props: any) {

    function showCookieBanner(lang: any) {
        hideNotification("cookies");
        showNotification({
            className: "cookies",
            id: "cookies",
            title: "Cookies",
            disallowClose: false,
            color: 'blue',
            loading: false,
            autoClose: true,
            message: cookies[lang][0]
        });
    }

    function handleGer() { props.setCurrentLang("de"); showCookieBanner("de") }
    function handleEng() { props.setCurrentLang("en"); showCookieBanner("en") }
    function handleJap() { props.setCurrentLang("ja"); showCookieBanner("ja") }
    function handleUng() { props.setCurrentLang("un"); showCookieBanner("un") }
    function handleUkr() { props.setCurrentLang("uk"); showCookieBanner("uk") }

    return (
        <div className={"FloatingLangChooser"}>
            <div onClick={handleUkr} style={{ cursor: "pointer", width: 50, position: "fixed", bottom: 0, margin: 10 }}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/UKR.png"}
                />
            </div>
            <div onClick={handleJap} style={{ cursor: "pointer", width: 50, position: "fixed", bottom: 40, margin: 10 }}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/JAP.png"}
                />
            </div>
            <div onClick={handleUng} style={{ cursor: "pointer", width: 50, position: "fixed", bottom: 80, margin: 10 }}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/UNG.png"}
                />
            </div>
            <div onClick={handleEng} style={{ cursor: "pointer", width: 50, position: "fixed", bottom: 120, margin: 10 }}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/ENG.png"}
                />
            </div>
            <div onClick={handleGer} style={{ cursor: "pointer", width: 50, position: "fixed", bottom: 160, margin: 10 }}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/GER.png"}
                />
            </div>
        </div>
    );
}
