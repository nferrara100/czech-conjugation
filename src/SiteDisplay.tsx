import React from "react";
import {WebView} from "react-native-webview";
import {useSafePaddings} from "./useSafePaddings";

export const SiteDisplay = () => {
    const safePaddings = useSafePaddings();
    return (
        <WebView
            source={{
                uri: "https://prirucka.ujc.cas.cz/en/",
            }}
            contentInset={safePaddings}
        />
    );
};
