import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SiteDisplay} from "./src/SiteDisplay";

const App = () => {
    return (
        <SafeAreaProvider>
            <SiteDisplay />
        </SafeAreaProvider>
    );
};

export default App;
