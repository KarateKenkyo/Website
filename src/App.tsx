// @ts-nocheck
import React, {useEffect, useState} from 'react';
import './App.scss';
import {Affix, Button, MantineProvider, Transition} from "@mantine/core";
import {NotificationsProvider, showNotification} from "@mantine/notifications";
import Home from "./components/Pages/Home/Home";
import UeberUns from "./components/Pages/UeberUns/UeberUns";
import News from "./components/Pages/News/News";
import Termine from "./components/Pages/Termine/Termine";
import {useWindowScroll} from "@mantine/hooks";
import {AiOutlineArrowUp} from "@react-icons/all-files/ai/AiOutlineArrowUp";
import {home} from "./components/Content/HomeContent";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {closeSpotlight, SpotlightAction, SpotlightProvider} from "@mantine/spotlight";
import {items} from "./components/Content/MenuContent";
import {dojo, offers, times} from "./components/Content/TrainerContent";
import {termineTypes} from "./components/Content/TermineContent";
import {news1, news2, news3} from "./components/Content/NewsContent";
import Times from "./components/Pages/Training/Times";
import Offers from "./components/Pages/Training/Offers";
import Location from "./components/Pages/Training/Location";
import {personsContent} from "./components/Content/PersonsContent";
import {cookies} from "./components/Content/HomeContent";

function Body(props: any) {
    return (
        <>
            <Helmet>
                <title>Kenkyo Karate</title>
                <meta
                    name="description"
                    content="Homepage des Goju-Ryu Karateverein Kenkyo Rheinzabern e.V"
                    data-rh="true" />
                <link rel="canonical" href="/" />
            </Helmet>
            <Header {...props}/>
            <LandingPage {...props} />
            {props.showHome && <Home {...props} /> }
            {props.showTrainingTimes && <Times {...props} /> }
            {props.showTrainingOffer && <Offers {...props} /> }
            {props.showTrainingLocation && <Location {...props} /> }
            {props.showUeberUns && <UeberUns {...props} /> }
            {props.showTermine && <Termine {...props} /> }
            {props.showNews && <News {...props} /> }
        </>
    );
}

export default function App() {
    const [scroll, scrollTo] = useWindowScroll();
    const [current_lang, setCurrentLang] = useState("de");
    const [opened, setOpened] = useState(false);
    const [showHome, setShowHome] = useState(true);
    const [showTrainingLocation, setShowTrainingLocation] = useState(false);
    const [showTrainingTimes, setShowTrainingTimes] = useState(false);
    const [showTrainingOffer, setShowTrainingOffer] = useState(false);
    const [showUeberUns, setShowUeberUns] = useState(false);
    const [showTermine, setShowTermine] = useState(false);
    const [showNews, setShowNews] = useState(false);

    useEffect( () =>{
        showNotification({
            className: "cookies",
            id: "cookies",
            title: "Cookies",
            disallowClose: false,
            color: 'blue',
            loading: false,
            autoClose: true,
            message: cookies[current_lang][0]
        });
    }, [current_lang, setCurrentLang]);

    function handleHome() {
        scrollTo({ y: 0 });
        setOpened(false);
        setShowHome(true);
        setShowTrainingLocation(false);
        setShowUeberUns(false);
        setShowTermine(false);
        setShowNews(false);
        setShowTrainingTimes(false);
        setShowTrainingOffer(false);
        closeSpotlight()
    }

    function handleTrainingLocation() {
        scrollTo({ y: 0 });
        setOpened(false);
        setShowHome(false);
        setShowTrainingLocation(true);
        setShowUeberUns(false);
        setShowTermine(false);
        setShowNews(false);
        setShowTrainingTimes(false);
        setShowTrainingOffer(false);
        closeSpotlight()
    }

    function handleTrainingTimes() {
        scrollTo({ y: 0 });
        setOpened(false);
        setShowHome(false);
        setShowTrainingLocation(false);
        setShowUeberUns(false);
        setShowTermine(false);
        setShowNews(false);
        setShowTrainingTimes(true);
        setShowTrainingOffer(false);
        closeSpotlight()
    }

    function handleTrainingOffer() {
        scrollTo({ y: 0 });
        setOpened(false);
        setShowHome(false);
        setShowTrainingLocation(false);
        setShowUeberUns(false);
        setShowTermine(false);
        setShowNews(false);
        setShowTrainingTimes(false);
        setShowTrainingOffer(true);
        closeSpotlight()
    }

    function handleUeberUns() {
        scrollTo({ y: 0 });
        setOpened(false);
        setShowHome(false);
        setShowTrainingLocation(false);
        setShowUeberUns(true);
        setShowTermine(false);
        setShowNews(false);
        setShowTrainingTimes(false);
        setShowTrainingOffer(false);
        closeSpotlight()
    }

    function handleTermine() {
        scrollTo({ y: 0 });
        setOpened(false);
        setShowHome(false);
        setShowTrainingLocation(false);
        setShowUeberUns(false);
        setShowTermine(true);
        setShowNews(false);
        setShowTrainingTimes(false);
        setShowTrainingOffer(false);
        closeSpotlight()
    }

    function handleNews() {
        scrollTo({ y: 0 });
        setOpened(false);
        setShowHome(false);
        setShowTrainingLocation(false);
        setShowUeberUns(false);
        setShowTermine(false);
        setShowNews(true);
        setShowTrainingTimes(false);
        setShowTrainingOffer(false);
        closeSpotlight()
    }

    const actions: SpotlightAction[] = [
        {
            title: items[current_lang][0],
            onTrigger: () => handleHome(),
        },
        {
            title: times[current_lang][0],
            onTrigger: () => handleTrainingTimes(),
        },
        {
            title: offers[current_lang][0],
            onTrigger: () => handleTrainingOffer(),
        },
        {
            title: dojo[current_lang][0],
            onTrigger: () => handleTrainingLocation(),
        },
        {
            title: items[current_lang][2],
            description: personsContent[current_lang][0] + ", " + personsContent[current_lang][2] + ", " + personsContent[current_lang][12],
            onTrigger: () => handleUeberUns(),
        },
        {
            title: items[current_lang][3],
            description: termineTypes[current_lang][0] + ", " + termineTypes[current_lang][1] + ", " + termineTypes[current_lang][2],
            onTrigger: () => handleTermine(),
        },
        {
            title: items[current_lang][4],
            description: news1[current_lang][1] + ", " + news2[current_lang][1] + ", " + news3[current_lang][1],
            onTrigger: () => handleNews(),
        },
    ];

    return (
        <HelmetProvider>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
            >
                <SpotlightProvider
                    actions={actions}
                    searchPlaceholder="Search..."
                    shortcut={['mod + P', 'mod + K', '/']}
                    nothingFoundMessage="Nothing found..."
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
                                opened={opened}
                                setOpened={setOpened}
                                scrollTo={scrollTo}
                                showHome={showHome}
                                showTrainingLocation={showTrainingLocation}
                                showTrainingTimes={showTrainingTimes}
                                showTrainingOffer={showTrainingOffer}
                                showUeberUns={showUeberUns}
                                showTermine={showTermine}
                                showNews={showNews}
                                handleHome={handleHome}
                                handleTrainingLocation={handleTrainingLocation}
                                handleTrainingTimes={handleTrainingTimes}
                                handleTrainingOffer={handleTrainingOffer}
                                handleUeberUns={handleUeberUns}
                                handleTermine={handleTermine}
                                handleNews={handleNews}
                                current_lang={current_lang}
                                setCurrentLang={setCurrentLang}
                            />
                        </div>
                    </NotificationsProvider>
                </SpotlightProvider>
            </MantineProvider>
        </HelmetProvider>
    );
}
