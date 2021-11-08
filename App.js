import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import "react-native-gesture-handler";
import UserCartContext from "./src/contexts/cartContext";
import UserFavoriteContext from "./src/contexts/favoriteContext";
import UserContext from "./src/contexts/userContext";
import RootNavigator from "./src/navigation/RootNavigator";
import { fonts } from "./src/theme/typography";

function App() {
  const [loadedFont] = useFonts({ ...fonts });
  if (!loadedFont) {
    return <AppLoading />;
  }

  return (
    <UserContext>
      <UserCartContext>
        <UserFavoriteContext>
          <RootNavigator />
        </UserFavoriteContext>
      </UserCartContext>
    </UserContext>
  );
}

export default App;
