import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen33218935Navigator from '../features/BlankScreen33218935/navigator';
import Settings218934Navigator from '../features/Settings218934/navigator';
import UserProfile218927Navigator from '../features/UserProfile218927/navigator';
import Settings218926Navigator from '../features/Settings218926/navigator';
import Settings218924Navigator from '../features/Settings218924/navigator';
import SignIn2218922Navigator from '../features/SignIn2218922/navigator';
import ArticleList217844Navigator from '../features/ArticleList217844/navigator';
import ArticleList217843Navigator from '../features/ArticleList217843/navigator';
import ArticleList217842Navigator from '../features/ArticleList217842/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen33218935: { screen: BlankScreen33218935Navigator },
Settings218934: { screen: Settings218934Navigator },
UserProfile218927: { screen: UserProfile218927Navigator },
Settings218926: { screen: Settings218926Navigator },
Settings218924: { screen: Settings218924Navigator },
SignIn2218922: { screen: SignIn2218922Navigator },
ArticleList217844: { screen: ArticleList217844Navigator },
ArticleList217843: { screen: ArticleList217843Navigator },
ArticleList217842: { screen: ArticleList217842Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
