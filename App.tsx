import { SafeAreaView } from "react-native";
import { BoxObjectModel } from "./src/screens/BoxObjectModel";
import { ContadorScreen } from "./src/screens/ContadorScreen";
import { DimensionScreens } from "./src/screens/DimensionScreens";
import { PositionScreens } from "./src/screens/PositionScreens";
import { Tarea } from "./src/screens/Tarea";
// import { HolaMundoScreen } from "./src/screens/holaMundoScreen";


const App = () => {
    return (
        // <HolaMundoScreen />
        // <ContadorScreen />
        <SafeAreaView style={{ flex: 1 }}>
            {/* <BoxObjectModel /> */}

            {/* <DimensionScreens /> */}
            {/* <PositionScreens /> */}
            <Tarea />
        </SafeAreaView>

    )
};


export default App;
