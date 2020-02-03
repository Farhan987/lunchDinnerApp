import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

// Common Screens
import SplashScreen from './splashScreen';
import MainScreen from './mainScreen';

// Seller Screens
//Seller Auth Screens
import SellerLoginScreen from '../srcSeller/screens/sellerScreens/authScreens/loginScreen';
import SellerSignUpScreen from '../srcSeller/screens/sellerScreens/authScreens/registerScreen';
import SellerProfileScreen from '../srcSeller/screens/sellerScreens/authScreens/sellerProfileScreen';
import SellerForgetPasswordScreen from '../srcSeller/screens/sellerScreens/authScreens/forgetPasswordScreen';
import SellerRecoverPasswordScreen from '../srcSeller/screens/sellerScreens/authScreens/recoverPasswordScreen';
//Seller Other Screens
import SellerEditInfoScreen from '../srcSeller/screens/sellerScreens/editInfoScreen';
import SellerDrawerScreen from '../srcSeller/screens/sellerScreens/drawerScreen';
import SellerAllMealScreen from '../srcSeller/screens/sellerScreens/allMealScreen';
import SellerMenuListScreen from '../srcSeller/screens/sellerScreens/menuListScreen';
import SellerAddMenuScreen from '../srcSeller/screens/sellerScreens/addMenuScreen';
import SellerAddMealScreen from '../srcSeller/screens/sellerScreens/addMealScreen';
import SellerOrderScreen from '../srcSeller/screens/sellerScreens/orderScreen';

// Buyer Screens
//Buyer Auth Screens
import BuyerLoginScreen from '../srcBuyer/screens/buyerScreens/authScreens/loginScreen';
import BuyerSignUpScreen from '../srcBuyer/screens/buyerScreens/authScreens/registerScreen';
import BuyerProfileScreen from '../srcBuyer/screens/buyerScreens/authScreens/buyerProfileScreen';
import BuyerForgetPasswordScreen from '../srcBuyer/screens/buyerScreens/authScreens/forgetPasswordScreen';
import BuyerRecoverPasswordScreen from '../srcBuyer/screens/buyerScreens/authScreens/recoverPasswordScreen';
//Buyer Cart Screens
import BuyerFirstCartScreen from '../srcBuyer/screens/buyerScreens/cartScreens/stepOne';
import BuyerSecondCartScreen from '../srcBuyer/screens/buyerScreens/cartScreens/stepTwo';
import BuyerThirdCartScreen from '../srcBuyer/screens/buyerScreens/cartScreens/stepThree';
import BuyerCartSummaryScreen from '../srcBuyer/screens/buyerScreens/cartScreens/stepFour';
//Buyer Search Location Screens
import BuyerFirstSearchLocationScreen from '../srcBuyer/screens/buyerScreens/searchLocationScreens/firstScreen';
import BuyerSecondSearchLocationScreen from '../srcBuyer/screens/buyerScreens/searchLocationScreens/secondScreen';
//Buyer Other Screens
import BuyerOrderPlacementScreen from '../srcBuyer/screens/buyerScreens/orderPlacementScreen';
import BuyerConfirmOrderScreen from '../srcBuyer/screens/buyerScreens/confirmOrderScreen';
import BuyerOrderedMealScreen from '../srcBuyer/screens/buyerScreens/orderedMealScreen';
import BuyerOrderHistoryScreen from '../srcBuyer/screens/buyerScreens/orderHistoryScreen';
import BuyerShowInterestScreen from '../srcBuyer/screens/buyerScreens/showInterestScreen';
import BuyerInterestTrayScreen from '../srcBuyer/screens/buyerScreens/interestTrayScreen';
import BuyerNotificationTrayScreen from '../srcBuyer/screens/buyerScreens/notificationTrayScreen';
import BuyerEditInfoScreen from '../srcBuyer/screens/buyerScreens/editInfoScreen';
import BuyerDrawerScreen from '../srcBuyer/screens/buyerScreens/drawerScreen';

// Partner Screens
//Partner Auth Screens
import PartnerLoginScreen from '../srcPartner/screens/partnerScreens/authScreens/loginScreen';
import PartnerSignUpScreen from '../srcPartner/screens/partnerScreens/authScreens/registerScreen';
import PartnerProfileScreen from '../srcPartner/screens/partnerScreens/authScreens/partnerProfileScreen';
import PartnerForgetPasswordScreen from '../srcPartner/screens/partnerScreens/authScreens/forgetPasswordScreen';
import PartnerRecoverPasswordScreen from '../srcPartner/screens/partnerScreens/authScreens/recoverPasswordScreen';
//Partner Checkout Screens
import PartnerCheckoutFirstScreen from '../srcPartner/screens/partnerScreens/checkoutScreens/firstScreen';
import PartnerCheckoutSecondScreen from '../srcPartner/screens/partnerScreens/checkoutScreens/secondScreen';
import PartnerCheckoutSummaryScreen from '../srcPartner/screens/partnerScreens/checkoutScreens/summaryScreen';
//Partner Other Screens
import PartnerAddToCartScreen from '../srcPartner/screens/partnerScreens/addToCartScreen';
import PartnerDrawerScreen from '../srcPartner/screens/partnerScreens/drawerScreen';
import PartnerEditInfoScreen from '../srcPartner/screens/partnerScreens/editInfoScreen';
import PartnerHoldAndExpressedScreen from '../srcPartner/screens/partnerScreens/holdAndExpressedSreen';
import PartnerHoldAndWaitingScreen from '../srcPartner/screens/partnerScreens/holdAndWaitingScreen';
import PartnerHoldOrderScreen from '../srcPartner/screens/partnerScreens/holdOrderScreen';
import PartnerOrderHistoryScreen from '../srcPartner/screens/partnerScreens/orderHistoryScreen';
import PartnerOrderTrackingScreen from '../srcPartner/screens/partnerScreens/orderTrackingScreen';
import PartnerSearchSellerByLocationScreen from '../srcPartner/screens/partnerScreens/searchSellerByLocationScreen';

//Seller Stack Screens
const SellerStackNavigator = createStackNavigator(
  {
    SellerAddMealScreen: {screen: SellerAddMealScreen},
    SellerAddMenuScreen: {screen: SellerAddMenuScreen},
    SellerOrderScreen: {screen: SellerOrderScreen},
    SellerEditInfoScreen: {screen: SellerEditInfoScreen},
    SellerMenuListScreen: {screen: SellerMenuListScreen},
    SellerAllMealScreen: {screen: SellerAllMealScreen},
  },
  {
    initialRouteName: 'SellerAllMealScreen',
  },
);

//Seller Drawer Screens
const SellerAppDrawer = createDrawerNavigator(
  {
    SellerAddMealScreen: {screen: SellerStackNavigator},
    SellerMenuListScreen: {screen: SellerMenuListScreen},
    SellerOrderScreen: {screen: SellerOrderScreen},
    SellerEditInfoScreen: {screen: SellerEditInfoScreen},
    SellerLoginScreen: {screen: SellerLoginScreen},
  },
  {
    contentComponent: SellerDrawerScreen,
    initialRouteName: 'SellerAddMealScreen',
    headerMode: 'none',
  },
);

//Seller Switch Screens
const SellerAuthSwitchNavigator = createStackNavigator(
  {
    SellerLoginScreen: {screen: SellerLoginScreen},
    SellerSignUpScreen: {screen: SellerSignUpScreen},
    SellerProfileScreen: {screen: SellerProfileScreen},
    SellerForgetPasswordScreen: {screen: SellerForgetPasswordScreen},
    SellerRecoverPasswordScreen: {screen: SellerRecoverPasswordScreen},
    SellerAppDrawer: {screen: SellerAppDrawer},
  },
  {
    initialRouteName: 'SellerLoginScreen',
    headerMode: 'none',
  },
);

//Partner Stack Screens
const PartnerStackNavigator = createStackNavigator(
  {
    PartnerSearchSellerByLocationScreen: {
      screen: PartnerSearchSellerByLocationScreen,
    },
    PartnerCheckoutFirstScreen: {screen: PartnerCheckoutFirstScreen},
    PartnerCheckoutSecondScreen: {screen: PartnerCheckoutSecondScreen},
    PartnerCheckoutSummaryScreen: {screen: PartnerCheckoutSummaryScreen},
    PartnerAddToCartScreen: {screen: PartnerAddToCartScreen},
    PartnerEditInfoScreen: {screen: PartnerEditInfoScreen},
    PartnerHoldAndExpressedScreen: {screen: PartnerHoldAndExpressedScreen},
    PartnerHoldAndWaitingScreen: {screen: PartnerHoldAndWaitingScreen},
    PartnerHoldOrderScreen: {screen: PartnerHoldOrderScreen},
    PartnerOrderHistoryScreen: {screen: PartnerOrderHistoryScreen},
    PartnerOrderTrackingScreen: {screen: PartnerOrderTrackingScreen},
  },
  {
    initialRouteName: 'PartnerSearchSellerByLocationScreen',
  },
);

//Partner Drawer Screens
const PartnerAppDrawer = createDrawerNavigator(
  {
    PartnerSearchSellerByLocationScreen: {
      screen: PartnerStackNavigator,
    },
    PartnerCheckoutFirstScreen: {screen: PartnerCheckoutFirstScreen},
    PartnerHoldAndExpressedScreen: {screen: PartnerHoldAndExpressedScreen},
    PartnerHoldAndWaitingScreen: {screen: PartnerHoldAndWaitingScreen},
    PartnerOrderHistoryScreen: {screen: PartnerOrderHistoryScreen},
  },
  {
    initialRouteName: 'PartnerSearchSellerByLocationScreen',
    contentComponent: PartnerDrawerScreen,
    headerMode: 'none',
  },
);

//Partner Switch Screens
const PartnerAuthSwitchNavigator = createStackNavigator(
  {
    PartnerLoginScreen: {screen: PartnerLoginScreen},
    PartnerSignUpScreen: {screen: PartnerSignUpScreen},
    PartnerProfileScreen: {screen: PartnerProfileScreen},
    PartnerForgetPasswordScreen: {screen: PartnerForgetPasswordScreen},
    PartnerRecoverPasswordScreen: {screen: PartnerRecoverPasswordScreen},
    PartnerAppDrawer: {screen: PartnerAppDrawer},
  },
  {
    initialRouteName: 'PartnerLoginScreen',
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    MainScreen: {screen: MainScreen},
    SellerAuthScreens: {screen: SellerAuthSwitchNavigator},
    // BuyerAuthScreens: {screen: BuyerAuthSwitchNavigator},
    PartnerAuthScreens: {screen: PartnerAuthSwitchNavigator},
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
