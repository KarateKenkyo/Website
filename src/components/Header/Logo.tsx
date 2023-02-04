import { Image } from '@mantine/core';

export default function Logo() {
    return (
        <div className={"Logo"}>
            <Image
                alt={"Logo"}
                src={"https://raw.githubusercontent.com/KarateKenkyo/Data/main/assets/Logo.png"}
            />
        </div>
    );
}