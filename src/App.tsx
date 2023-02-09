// @ts-nocheck
import React, {useEffect, useState} from 'react';
import './App.scss';
import {Affix, Button, MantineProvider, Transition} from "@mantine/core";
import {NotificationsProvider, showNotification} from "@mantine/notifications";
import Home from "./components/Pages/Home/Home";
import Training from "./components/Pages/Training/Training";
import UeberUns from "./components/Pages/UeberUns/UeberUns";
import News from "./components/Pages/News/News";
import Termine from "./components/Pages/Termine/Termine";
import {useWindowScroll} from "@mantine/hooks";
import {AiOutlineArrowUp} from "@react-icons/all-files/ai/AiOutlineArrowUp";
import {home} from "./components/Content/HomeContent";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";

function Body(props: any) {
    return (
        <>
            <Header
                showHome={props.setShowHome}
                showTraining={props.setShowTraining}
                showUeberUns={props.setShowUeberUns}
                showTermine={props.setShowTermine}
                showNews={props.setShowNews}
                current_lang={props.current_lang} />
             <LandingPage
                showHome={props.showHome}
                showTraining={props.showTraining}
                showUeberUns={props.showUeberUns}
                showTermine={props.showTermine}
                showNews={props.showNews}/>
            {props.showHome && <Home
                                    setCurrentLang={props.setCurrentLang}
                                    current_lang={props.current_lang}/>}
            {props.showTraining && <Training
                                    setCurrentLang={props.setCurrentLang}
                                    current_lang={props.current_lang}/>}
            {props.showUeberUns && <UeberUns
                                    setCurrentLang={props.setCurrentLang}
                                    current_lang={props.current_lang}/>}
            {props.showTermine && <Termine
                                    setCurrentLang={props.setCurrentLang}
                                    current_lang={props.current_lang}/>}
            {props.showNews && <News
                                    setCurrentLang={props.setCurrentLang}
                                    current_lang={props.current_lang}/>}

        </>
    );
}

export default function App() {
    const [scroll, scrollTo] = useWindowScroll();
    const [current_lang, setCurrentLang] = useState("de");

    showNotification({
        className: "cookies",
        id: "cookies",
        title: "Cookies",
        disallowClose: false,
        color: 'blue',
        loading: false,
        autoClose: false,
        message: "Diese Website nutzt keine Cookies zur Datenerhebung und Statistik.",
    });

    showNotification({
        className: "generall",
        id: "generall",
        title: "Information",
        disallowClose: false,
        color: 'red',
        loading: false,
        autoClose: false,
        message: "Diese Website befindet sich noch in der aktiven Entwicklung und kann sommit Fehler aufweißen. Sollten Sie einen entdecken, dann meldet diese bitte dem zweiten Vorstand.",
    });

    useEffect( () =>{
        let name = "";
        let title = "";
        let text = "";
        let show = false;
        if (current_lang === "ja") {
            show = true;
            name = "jap-banner"
            title = "翻訳エラー";
            text = "翻訳に一部誤りがある可能性があります。不正確な情報がある場合は、申し訳ございません。誤記を発見された場合は、ご遠慮なく弊社までご連絡ください。";
        } else if (current_lang === "un") {
            show = true;
            name = "hun-banner"
            title = "Fordítási hiba";
            text = "A fordítás részben hibás lehet. Elnézést kérünk az esetleges pontatlanságokért. Ha bármilyen hibát észlel, kérjük, ne habozzon kapcsolatba lépni velünk.";
        } else if (current_lang === "uk") {
            show = true;
            name = "ukr-banner"
            title = "Помилка перекладу";
            text = "Переклад може бути частково неправильним. Приносимо вибачення за можливі неточності. Якщо ви помітили будь-які помилки, будь ласка, зв'яжіться з нами";
        }
        if (show) {
            showNotification({
                className: name,
                id: name,
                title: title,
                disallowClose: false,
                color: 'red',
                loading: false,
                autoClose: false,
                message: text,
            });
        }
    }, [current_lang, setCurrentLang]);
    const [showHome, setShowHome] = useState(true);
    const [showTraining, setShowTraining] = useState(false);
    const [showUeberUns, setShowUeberUns] = useState(false);
    const [showTermine, setShowTermine] = useState(false);
    const [showNews, setShowNews] = useState(false);

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
            <NotificationsProvider>
                <Affix position={{ bottom: 20, right: 20 }}>
                    <Transition transition="slide-up" mounted={scroll.y > 0}>
                        {(transitionStyles) => (
                            <Button color="gray" compact uppercase
                                    leftIcon={<AiOutlineArrowUp size={16} />}
                                    style={transitionStyles}
                                    onClick={() => scrollTo({ y: 0 })}
                            >
                                {home[current_lang][3]}
                            </Button>
                        )}
                    </Transition>
                </Affix>
                <div className="App" id="App">

                    <Body
                        showHome={showHome}
                        showTraining={showTraining}
                        showUeberUns={showUeberUns}
                        showTermine={showTermine}
                        showNews={showNews}
                        setShowHome={setShowHome}
                        setShowTraining={setShowTraining}
                        setShowUeberUns={setShowUeberUns}
                        setShowTermine={setShowTermine}
                        setShowNews={setShowNews}
                        current_lang={current_lang}
                        setCurrentLang={setCurrentLang}
                    />
                </div>
            </NotificationsProvider>
        </MantineProvider>
    );
}
