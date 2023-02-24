
import Logo from "../Header/Logo";

export default function LandingPage(props: any) {
    let url = "";

    if (props.showHome) {
        url = "https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-5.jpeg";
    } else if (props.showTrainingLocation) {
        url = "https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-2.jpeg";
    } else if (props.showTrainingTimes) {
        url = "https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-6.jpeg";
    } else if (props.showTrainingOffer) {
        url = "https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-8.jpeg";
    } else if (props.showUeberUns) {
        url = "https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-1.jpeg";
    } else if (props.showTermine) {
        url = "https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-3.jpeg";
    } else if (props.showNews) {
        url = "https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/LandingPage-7.jpeg";
    }

    return (
        <div className={"LandingPage"}>
            <div className={"BackgroundImage"} style={{backgroundImage: `url(${url})`}} />

            <Logo />

        </div>
    );
}