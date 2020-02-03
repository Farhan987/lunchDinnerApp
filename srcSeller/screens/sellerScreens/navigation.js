import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
// Seller Screeeeens
//Seller Auth Screens
import LoginScreen from './authScreens/loginScreen';
import SignUpScreen from './authScreens/registerScreen';
import SellerProfileScreen from './authScreens/sellerProfileScreen';
import ForgetPasswordScreen from './authScreens/forgetPasswordScreen';
import RecoverPasswordScreen from './authScreens/recoverPasswordScreen';
//Seller Other Screens
import EditInfoScreen from './editInfoScreen';
import DrawerScreen from './drawerScreen';
import AllMealScreen from './allMealScreen';
import MenuListScreen from './menuListScreen';
import MenuDetailScreen from './menuDetailScreen';
import MealDetailScreen from './mealDetailScreen';
import SellerOrderScreen from './orderScreen';

const AppDrawer = createDrawerNavigator(
  {
    MealDetailScreen: {screen: MealDetailScreen},
    MenuDetailScreen: {screen: MenuDetailScreen},
    SellerOrderScreen: {screen: SellerOrderScreen},
    EditInfoScreen: {screen: EditInfoScreen},
  },
  {
    contentComponent: DrawerScreen,
  },
);

const SellerStackNavigator = createStackNavigator(
  {
    MealDetailScreen: {screen: MealDetailScreen},
    MenuDetailScreen: {screen: MenuDetailScreen},
    SellerOrderScreen: {screen: SellerOrderScreen},
    EditInfoScreen: {screen: EditInfoScreen},
    MenuListScreen: {screen: MenuListScreen},
    AllMealScreen: {screen: AllMealScreen},
  },
  {
    initialRouteName: 'AllMealScreen',
  },
);

const SellerAuthSwitchNavigator = createSwitchNavigator(
  {
    LoginScreen: {screen: LoginScreen},
    SignUpScreen: {screen: SignUpScreen},
    SellerProfileScreen: {screen: SellerProfileScreen},
    ForgetPasswordScreen: {screen: ForgetPasswordScreen},
    RecoverPasswordScreen: {screen: RecoverPasswordScreen},
    SellerDrawerScreen: {screen: AppDrawer},
  },
  {
    initialRouteName: 'LoginScreen',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    SellerAuthScreens: {screen: SellerAuthSwitchNavigator},
    SellerOtherScreens: {screen: SellerStackNavigator},
  },
  {
    initialRouteName: 'SellerAuthScreens',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
